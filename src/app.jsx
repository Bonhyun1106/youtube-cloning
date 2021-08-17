import React, {useEffect, useState} from "react";
import style from "./app.module.css";
import SearchBar from "./components/header/search_bar";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

function App({youtube}) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        youtube.loading()
            .then(videos => setVideos(videos))
            .catch(()=> alert(`동영상 목록 로딩 중 오류 발생`));
    }, [youtube]);

    const search = (query) => {
        youtube.search(query)
            .then(videos => {
                setVideos(videos);
                setSelectedVideo(null);
            })
            .catch(()=> alert(`동영상 검색 중 오류 발생`));
    };

    const selectVideo = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className={style.App}>
            <SearchBar onSearch={search}/>
            <section className={style.content}>
                { selectedVideo &&
                    <div className={style.detail}>
                        <VideoDetail video={selectedVideo} />
                    </div>
                }
                <div className={style.list}>
                    <VideoList videos={videos} onVideoClick={selectVideo} />
                </div>
            </section>
        </div>
    );
}

export default App;
