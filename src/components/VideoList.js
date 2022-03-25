import VideoItem from "./VideoItem";

const VideoList = ({ videoList, onVideoSelect }) => {
  const list = videoList.map((r) => (
    <VideoItem key={r.id.videoId} onVideoSelect={onVideoSelect} video={r} />
  ));
  return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
