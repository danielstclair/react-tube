import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <div>
        <input 
        value={this.state.term}
        onSubmit={e => this.setState({term: e.target.value})} />
      </div>
    )
  }
  onInputChange(e) {
    this.setState({term: e.target.value});
    console.log(this.state);
  }
}

export default SearchBar;