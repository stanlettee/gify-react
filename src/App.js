import './App.css';
import { Component } from 'react';
import GifList from "./components/GifList"
import GifSearch from "./components/GifSearch"

export default class App extends Component {
  state = {
    search: ''
  }

  handleSearchChange = (value) => {
    this.setState({ search: value });
  }

  render() {
    return (
      <div className="container">
        <GifSearch search={this.state.search} handleSearchChange={this.handleSearchChange}/>
        <GifList search={this.state.search}/>
      </div>
    )
  }
};
