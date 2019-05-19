import React from 'react';

const VideoDetail = ({video}) => {
  // if we try to render video detail and a video is not provided, we will
  // get back a div that says Loading... -- a return statement, so the
  // rest of the code will not be run.

  // Checking for the existence of a video property before rendering the
  // component.
  if (!video) {
    return <div>Loading...</div>;
  }

  // whenever you want to embed or navigate to a YouTube video, the only thing
  // that changes in the url, is the ID of the video.
  // We actually have the video ID inside of this video object, '({video})'
  // so we can craft our own embed url
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  // creating an iframe, which points to this^ url right here, will show a
  // YouTube video player for us inside of our application.

  return (
    // Giving width of video detail of "col-md-8"
    // <div className="embed-responsive embed-responsive-16by9"> is used to
    // wrap the iframe for the video
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
