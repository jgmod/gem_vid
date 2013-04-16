class YoutubeController < ApplicationController
  def index
    @thumbnail = ["https://i.ytimg.com/vi/rRoFd4XeDLQ/hqdefault.jpg",
    			  "https://i.ytimg.com/vi/PHL3Mez0Utk/hqdefault.jpg",
    			  "https://i.ytimg.com/vi/bzqCOEjBwSw/hqdefault.jpg",
    			  "https://i.ytimg.com/vi/Ts04rocBBQE/hqdefault.jpg"]
    @video = ["http://www.youtube.com/embed/rRoFd4XeDLQ?autoplay=1",
    		 "http://www.youtube.com/embed/PHL3Mez0Utk?autoplay=1",
    		 "http://www.youtube.com/embed/bzqCOEjBwSw?autoplay=1",
    		 "http://www.youtube.com/embed/Ts04rocBBQE?autoplay=1"]
    @thumbnail_and_video = Hash[@thumbnail.zip(@video)]
  end
end
