// importing 'lodash' by using '_'
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCblgNWOB5DMKPqfIXb94mAPJCqUJ4uHLg';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // initial search when kicking off the constructor
    this.videoSearch('golang advanced');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // ^will get resolved to:  this.setState({ videos: videos });
    });
  }

  render() {
    // created a fat arrow function (term) => { this.videoSearch(term) } and
    // passed it to '_.debounce()'
    // What '_.debounce()' does is it takes this inner function, the one that
    // is passed, and returns a new function that can only be called once
    // every 300 ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        // Defined a function that takes a video & defines it on App's state,
        // updating App's state with a new video
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
    </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// 'App' is a class of a component, a type that produces instances.
// To make an instance, we just have to wrap the component with JSX tags.
// Make a reference to target container for placement..
ReactDOM.render(<App />, document.querySelector('.container'));
