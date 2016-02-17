import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'YOU_MUST_INSERT_YOUR_YOUTUBE_API_KEY_HERE';

const App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello World!</h1>
        <SearchBar />
      </div>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('.container'));