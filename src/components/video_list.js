import React from 'react';
import VideoListItem from './video_list_item';

// props will arrive as an arugment '(props)'
const VideoList = (props) => {
  // For each video, we will have a function that gets called with
  // a single video

  // Save an actual reference to this array that gets returned
  const videoItems = props.videos.map((video) => {
    // Return 'VideoListItem' and pass it the video as a property named 'video'
    return (
    <VideoListItem
      // Taking the prop that's coming from App and passing it down into
      // video_list_item.js
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });

  return (
    // "col-md-4" sets this as a bootstrap column with width of 4" and also
    // giving a list-group as well
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
