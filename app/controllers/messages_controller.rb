class MessagesController < ApplicationController
  def index; end

  def random
    render json: Message.find(rand(1..5)), status: :ok
  end
end
