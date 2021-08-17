import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => (
    <>
    <iframe
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
    />
    <h2>{video.snippet.title}</h2>
    <h3>{video.snippet.channelTitle}</h3>
    <pre className={styles.description}>{video.snippet.description}</pre>
    </>
);

export default VideoDetail;