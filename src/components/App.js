import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  onTermSubmit = async (term) => {
    const results = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[0],
    });
  };
  componentDidMount() {
    this.onTermSubmit("pokemon");
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail
                className="two  column"
                video={this.state.selectedVideo}
              />
            </div>
            <div className="five wide column">
              <VideoList
                className="two  column"
                onVideoSelect={this.onVideoSelect}
                videoList={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
