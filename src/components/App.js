import React from "react";
import SearchBar from './SearchBar';
import youtube from "./apis/youtube";
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
componentDidMount(){
  this.onTermSubmit('amsterdam');
}

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(res.data.items)

    this.setState(
      {
        videos: res.data.items,
        selectedVideo: res.data.items[0],
      });
  };


  onVideoSelected = video => {
    this.setState({
      selectedVideo: video
    })
    // console.log(video)
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos} />
            </div>
          </div>
        </div>

      </div>
    );
  };
}

export default App;
