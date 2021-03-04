import React, {Component} from 'react'
import './App.css';
import Header from './components/Header';
import Body from './components/Body'

class App extends Component {

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Body />
        </header>
      </div>
    );
    }
  
}

export default App;
