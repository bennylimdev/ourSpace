class Api::PostlikesController < ApplicationController
    def index
        @postlikes = Postlike.all
    end

    def show
        @postlike = Postlike.find(params[:id])
        render :show
    end

    def create
        @postlike = Postlike.new(postlike_params)

        if @postlike.save
            render :show
        else
            render json: @postlike.errors.full_messages, status: 401 
        end
    end

    def destroy
        @postlike = Postlike.find_by(id: params[:id])

        if @postlike
            @postlike.destroy
            render json: {}
        else
            render json: ["Like not found"], status: 404
        end
    end

    private

    def postlike_params
        params.require(:postlike).permit(:author_id, :post_id)
    end
end