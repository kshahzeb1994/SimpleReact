import React from 'react';

const VideoListItem = ({video}) => {
// console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const imageTitle = video.snippet.title;
  // console.log(video.snippet.title);
  return (
    <li className="list-group-item">
      <div className="video_list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading"> {imageTitle} </div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;
