import React from 'react';
import VideoItem from '../video_item/video_item'
import style from './video.module.css';

const VideoList = ({videos, onVideoClick}) => (
    <ul className={style.list}>
    {
        videos.map(video => (
            <VideoItem key={video.id} video={video} onVideoClick={onVideoClick}/>
        ))
    }
    </ul>
);

export default VideoList;