import React from "react";
import "../skins/game/index.css";
import { makeStyles } from "@material-ui/core/styles";
import Websocket from "react-websocket";
import Button from "@material-ui/core/Button";
const baseUrl = "http://192.168.2.137:8081/";
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
const squareLen = 13;
const getAllWin = (len) => {
  const lines = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i + 4 <= len) {
        lines.push([
          i + j * len,
          i + j * len + 1,
          i + j * len + 2,
          i + j * len + 3,
          i + j * len + 4,
        ]);
        if (j + 4 <= len) {
          lines.push([
            i + j * len,
            i + (j + 1) * len,
            i + (j + 2) * len,
            i + (j + 3) * len,
            i + (j + 4) * len,
          ]);
          if (j + 5 <= len) {
            lines.push([
              i + j * len,
              i + (j + 1) * len + 1,
              i + (j + 2) * len + 2,
              i + (j + 3) * len + 3,
              i + (j + 4) * len + 4,
            ]);
          }
        }
      }
      if (i >= 4) {
        if (j <= len - 4) {
          lines.push([
            i + j * len,
            i + (j + 1) * len - 1,
            i + (j + 2) * len - 2,
            i + (j + 3) * len - 3,
            i + (j + 4) * len - 4,
          ]);
        }
      }
    }
  }
  return lines;
};
const calcWin = (lines, squares) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e]
    ) {
      return squares[a];
    }
  }
  return null;
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      squares: Array(squareLen * squareLen).fill(null),
      xIsNext: true,
      winner: null,
    };
    let _this = this;
    _this.winLines = getAllWin(squareLen);
    _this.hearCheck = {
      timeout: 30000,
      clientObj: null,
      reset: () => {
        let self = _this.hearCheck;
        clearTimeout(self.clientObj);
        self.start();
      },
      start: () => {
        let self = _this.hearCheck;
        self.clientObj = setTimeout(() => {
          _this.refWebsocket.sendMessage("Client-Alive");
        }, self.timeout);
      },
    };
  }
  handleClick(i) {
    const squares = this.state.squares;
    if (calcWin(this.winLines, squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.refWebsocket.sendMessage(
      JSON.stringify({ idx: i, piece: squares[i] })
    );
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        key={i}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }
  boardRow(len, line) {
    const res = [];
    for (let i = 0; i < len; i++) {
      res.push(this.renderSquare(line * len + i));
    }
    return res;
  }
  boardList(len) {
    const res = [];
    for (let i = 0; i < len; i++) {
      res.push(
        <div className="board-row" key={"row" + i}>
          {this.boardRow(len, i)}
        </div>
      );
    }
    return res;
  }

  render() {
    const wsData = (data) => {
      if (data === "Server-Alive") {
        console.log(data);
      } else {
        console.log(JSON.parse(data));
      }
      this.hearCheck.reset();
    };
    const wsOpen = (data) => {
      this.hearCheck.reset();
    };
    const winner = calcWin(this.winLines, this.state.squares);
    let status = "";
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className="status">{status}</div>
        {this.boardList(squareLen)}
        <Websocket
          url="ws://localhost:9502/fivePieces/123"
          onOpen={wsOpen.bind(this)}
          onMessage={wsData.bind(this)}
          ref={(Websocket) => {
            this.refWebsocket = Websocket;
          }}
        ></Websocket>
      </div>
    );
  }
}
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
const getData = () => {
  fetch(baseUrl + "auth/admin/login?userName=admin&password=naxin@2020", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "cors",
    cache: "default",
  })
    .then((res) => {
      if (res.status !== 200) {
        // console.log(res.json().then)
        const err = new Error(res.statusText);
        err.response = res.json();
        throw err;
      } else {
        return res.json();
      }
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      err.response.then((res) => {
        console.log(res);
      });
    });
};
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rReset: false,
    };
  }
  Reset(){
    window.location.reload()
  }
  render() {
    return (
      <div className={["game", useStyles.root].join(" ")}>
        <div className="game-board">
          <Board ref="game" />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={getData}>
            API
          </Button>
          <Button variant="contained" color="primary" onClick={()=>{this.Reset()}} style={{marginLeft:'20px'}}>
            RESET
          </Button>
        </div>
      </div>
    );
  }
}
export { Game };
