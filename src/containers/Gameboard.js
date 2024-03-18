import React,{Component} from "react"

class Gameboard extends Component{
    state = {
        playedRows : [],
        gameOver : false
    }
    render(){
        return(
            <h1>Gameboard</h1>
        );
    }
}
export default Gameboard