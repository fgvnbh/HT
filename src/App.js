import React, { Component } from 'react';
import './App.css';
import SpotifyViewer from './SpotifyViewerApp'
import TestContainer from "./testContainer"
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<SpotifyViewer/>*/}
          <TestContainer/>
      </div>
    );
  }
}

export default App;
