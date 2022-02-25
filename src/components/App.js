import React from "react";
import SearchBar from'./SearchBar';
import youtube from "./apis/youtube";
import VideoList from './VideoList';

class App extends React.Component {
  state ={ videos: []}
  onTermSubmit = async(term) => {
    
   const res = await youtube.get('/search',{
      params:{
        q : term
      }
    }); 
    console.log(res.data.items)
    this.setState({videos : res.data.items})
  };
  render(){
    return (
      <div className="">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
      <VideoList videos={this.state.videos}/>
      </div>
    );
  };
}

export default App;
