class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validate :acceptable_profilepic

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post
    
    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment
    
    has_many :postlikes,
        foreign_key: :author_id,
        class_name: :Postlike

    has_many :friendrequests

    has_many :pending_friendrequests, 
        -> { where confirmed: false }, 
        class_name: :Friendrequest, 
        foreign_key: :friend_id

    has_one_attached :profile_pic, dependent: :destroy
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    def acceptable_profilepic
        return unless profile_pic.attached?

        unless profile_pic.blob.byte_size <= 4.megabyte
            errors.add(:profile_pic, 'Profile picture must be less than 4 megabytes')
        end

        acceptable_types = ['image/jpeg', 'image/png', 'image/jpg']
        unless acceptable_types.include?(profile_pic.content_type)
            errors.add(:profile_pic, 'Picture must be png or jpg')
        end
    end

    def friends
        sent_friendreq = Friendrequest.where(user_id: id, confirmed: true).pluck(:friend_id)
        got_friendreq = Friendrequest.where(friend_id: id, confirmed: true).pluck(:user_id)
        ids = sent_friendreq + got_friendreq
        User.where(id: ids)
    end

    def friend_with?(user)
        Friendrequest.confirmed_record?(id, user.id)
    end
    
    def send_friendreq(user)
        Friendrequest.create(friend_id: user.id)
    end

    private 
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

end
