import React from 'react';
import Cell from './cell.jsx';
import Row from './row.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player1: -1,
      player2: 1,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    };
    
    this.playGame = this.playGame.bind(this);
  }

    gameStart() {
    let board = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
                ]
    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: ''
    });
  }
  
  togglePlayer() {
    return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
  }
  
  playGame(column) {
    if (!this.state.gameOver) {
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][column]) {
          board[r][column] = this.state.currentPlayer;
          break;
        }
      }

      let result = this.checkAll(board);
      if (result === this.state.player1) {
        this.setState({ board, gameOver: true, message: 'Player 1 wins!' });
      } else if (result === this.state.player2) {
        this.setState({ board, gameOver: true, message: 'Player 2 wins!' });
      } else if (result === 'draw') {
        this.setState({ board, gameOver: true, message: 'Draw.' });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    } else {
      this.setState({ message: 'Start a new game.' });
    }
  }
  
  checkVertical(board) {
    // Check only if row is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
              board[r][c] === board[r - 2][c] &&
              board[r][c] === board[r - 3][c]) {
            return board[r][c];    
          }
        }
      }
    }
  }
  
  checkHorizontal(board) {
    // Check only if column is 3 or less
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] && 
              board[r][c] === board[r][c + 2] &&
              board[r][c] === board[r][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDiagonalRight(board) {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
              board[r][c] === board[r - 2][c + 2] &&
              board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDiagonalLeft(board) {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
              board[r][c] === board[r - 2][c - 2] &&
              board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  
  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === 0) {
          return null;
        }
      }
    }
    return 'draw';    
  }
  
  checkAll(board) {
    return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
  }
  
  componentWillMount() {
    this.gameStart();
  }
  
  render() {
    return (
      <div>
        <div className="button" onClick={() => {this.gameStart()}}> Start</div>
        
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.playGame} />))}
          </tbody>
        </table>
        
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}
