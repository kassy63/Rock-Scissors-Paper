import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn.sketchpan.com/member/g/gml9796/draw/1232328441169/0.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png",
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons-png.flaticon.com/512/5824/5824373.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("~ judgement ~ user, computer:", user, computer);

    // user === computer tie
    // user === rock, computer === scissors user WIN
    // user === rock, computer === paper user LOSE
    // user === scissors, computer === paper user WIN
    // user === scissors, computer === rock user LOSE
    // user === paper, computer === rock user WIN
    // user === paper, computer === scissors user LOSE

    if (user.name === computer.name) {
      return "TIE";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "WIN" : "LOSE";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "WIN" : "LOSE";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "WIN" : "LOSE";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키 값만 뽑아서 어레이로 만들어주는 함수
    console.log("~ randomChoice ~ itemArray:", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("~ randomChoice ~ randomItem:", randomItem);
    let final = itemArray[randomItem];
    console.log("~ randomChoice ~ final:", final);
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box
          title="You"
          item={userSelect}
          result={result === "WIN" ? "WIN" : result === "LOSE" ? "LOSE" : "TIE"}
        />
        <Box
          title="Computer"
          item={computerSelect}
          result={result === "LOSE" ? "WIN" : result === "WIN" ? "LOSE" : "TIE"}
        />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
