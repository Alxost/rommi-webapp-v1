import './App.css';
import React,{Component} from "react"
import PlayerConfig from "./containers/PlayerConfig"
import Gameboard from "./containers/Gameboard"

process.title = "rommi-webapp-v1";

class App extends Component {
  render(){
  return (
    <div className="App">
      <PlayerConfig/>
    </div>
  );
  }
}

export default App;
