import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0,
        show:true
      };
    }

    IncrementItem = () => {
      this.setState({clicks:this.state.clicks + 1 });
    }

    DecreaseItem = () => {
      this.setState({clicks:this.state.clicks -1});
    }

  render() {
    return (
      <div>
        <h1>Create a simple button which increments when clicked:</h1>
        <h2>{this.state.show}{this.state.clicks}</h2>
        <button class="increase" onClick={this.IncrementItem}>Increase</button>
        <button onClick={this.DecreaseItem}>Decrease</button>
        


      </div>
    );
  }
}

  export default App;
