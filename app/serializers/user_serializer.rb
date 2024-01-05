class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id

  def profile_pic
    return unless User.profile_pic.attached?

    User.profile_pic.blob.attributes.slice('filename', 'byte_size', 'id').merge(url: profile_pic_url(User.profile_pic))
  end

  def profile_pic_url(image)
    rails_blob_path(image, only_path: true)
  end
end
