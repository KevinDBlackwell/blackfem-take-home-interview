class LinksController < ApplicationController
  def all
    render json: Link.all
  end
  def new
    render new_link_path
  end
  def create
    @link = Link.create(link_params)
    redirect_to root_path
  end
  private
  def link_params
    params.require(:links).permit(:url, :title, :description)
  end
  def index 
    render '/'
  end
  def destroy
    @link = Link.find(params[:id])
    @link.destroy
    @links = Link.all
    redirect_to root_path
  end
end
