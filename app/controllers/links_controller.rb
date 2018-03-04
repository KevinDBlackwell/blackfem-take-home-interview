class LinksController < ApplicationController
  def all
    render json: Link.all
  end
end
