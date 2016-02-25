import React, {Component} from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  const {title} = video.snippet;
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{title}</div>
      </div>
    </li>
  );
}

export default VideoListItem;