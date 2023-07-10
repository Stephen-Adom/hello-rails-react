class MessagesController < ApplicationController
  def index
    Message.find(rand(1..5))
  end
end
