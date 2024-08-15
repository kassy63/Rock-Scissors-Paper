import React, { Component } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/128/9496/9496176.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/128/9534/9534501.png",
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons-png.flaticon.com/128/5152/5152399.png",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      selectedButton: "",
    };
  }

  play = (userChoice) => {
    const user = choice[userChoice];
    const computer = this.randomChoice();
    const gameResult = this.judgement(user, computer);

    this.setState({
      userSelect: user,
      computerSelect: computer,
      result: gameResult,
      selectedButton: userChoice,
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "TIE";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "WIN" : "LOSE";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "WIN" : "LOSE";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "WIN" : "LOSE";
    }
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    return choice[itemArray[randomItem]];
  };

  render() {
    const { userSelect, computerSelect, result, selectedButton } = this.state;

    return (
      <div className="wrapper">
        <h1>가위바위보 게임</h1>
        <div className="main">
          <Box
            title="You"
            item={userSelect}
            result={
              result === "WIN" ? "WIN" : result === "LOSE" ? "LOSE" : result
            }
          />
          <Box
            title="Computer"
            item={computerSelect}
            result={
              result === "LOSE" ? "WIN" : result === "WIN" ? "LOSE" : result
            }
          />
        </div>
        <div className="buttons">
          <button
            onClick={() => this.play("scissors")}
            className={selectedButton === "scissors" ? "selected" : ""}
          >
            <img src={choice.scissors.img} alt="Scissors" />
          </button>
          <button
            onClick={() => this.play("rock")}
            className={selectedButton === "rock" ? "selected" : ""}
          >
            <img src={choice.rock.img} alt="Rock" />
          </button>
          <button
            onClick={() => this.play("paper")}
            className={selectedButton === "paper" ? "selected" : ""}
          >
            <img src={choice.paper.img} alt="Paper" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
