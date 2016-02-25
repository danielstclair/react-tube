import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  let listHTML = props.videos.map((video, i) => {
    return <VideoListItem 
      onVideoSelect={props.onVideoSelect}
      key={video.etag} 
      video={video} />
  })
  return (
    <ul className="col-md-4 list-group">
      {listHTML}
    </ul>
  )
}

export default VideoList;