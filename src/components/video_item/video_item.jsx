import React from 'react';
import style from './video_item.module.css'

const videoItem = ({video, onVideoClick}) => {
    return (
        <li className={style.videoCard} onClick={()=> onVideoClick(video)}>
            <img className={style.thumbnail} src={video.snippet.thumbnails.medium.url} alt="thumbnails" />
            <div className={style.metadata}>
                <p className={style.videoTitle}>{video.snippet.title}</p>
                <p className={style.videoChannel}>{video.snippet.channelTitle}</p>
            </div>
        </li>
    );
}

export default videoItem;