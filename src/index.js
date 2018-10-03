import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCPShpq9wPLbO6K-RHozsI9vBa_jgTZhs8';

//create a new component that produces some HTML
class App extends Component {
  constructor(props) {
    super(props);
  	// console.log(props);
    this.state = { videos : [] };

    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put is on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
