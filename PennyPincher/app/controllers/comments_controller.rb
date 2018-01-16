class CommentsController < ApplicationController

  def index
      @comments = Comment.where(:ticker => params[:ticker])
      if @comments
         render json:@comments 
      else 
        render @comments.errors.full_messages, status: 422
      end
  end

  def show
    @comment = Comment.find(params[:id])
    if @comment
      render  json:@comment
    else
      render json: ["comment isn't created yet"], status: 422
    end
  end

  def create
    @comment = comment.new(comment_params)
    if @comment.save
      render  json:@comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def edit
    @comment = comment.find(params[:id])
  end

  def update
    @comment = comment.find(params[:id])
      if @comment.update_attributes(comment_params)
        render "/api/comments/show"
      else
        render json: @comment.errors.full_messages, status:422
      end
  end

  def destroy
    @comment = comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end

  def comment_params
    params.require(:comment).permit(:rating,:body,:ticker)
  end

end


