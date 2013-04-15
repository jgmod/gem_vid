class YoutubeController < ApplicationController
  def index
    @thumbnail = "https://i.ytimg.com/vi/wi-p4yDkBww/hqdefault.jpg"
    @video = "http://www.youtube.com/embed/wi-p4yDkBww?autoplay=1"
  end
end
