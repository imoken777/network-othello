import type { UserId } from '$/commonTypesWithClient/branded';
import { userColorUsecase as UserColorUsecase } from './userColorUsecase';

export type BoardArray = number[][];

const board: BoardArray = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

let nowTurnColor = 1;

export const boardUsecase = {
  getBoard: () => board,

  clickCell: (x: number, y: number, userId: UserId): BoardArray => {
    const directions = [
      [-1, 0], // 上
      [-1, 1], // 右上
      [0, 1], // 右
      [1, 1], // 右下
      [1, 0], // 下
      [1, -1], // 左下
      [0, -1], // 左
      [-1, -1], // 左上
    ];

    const isValidMove = (
      board: number[][],
      x: number,
      y: number,
      dx: number,
      dy: number,
      turnColor: number
    ): boolean => {
      return (
        board[y + dy] !== undefined &&
        board[y + dy][x + dx] !== undefined &&
        board[y + dy][x + dx] !== 0 &&
        board[y + dy][x + dx] !== turnColor &&
        board[y][x] === 0
      );
    };

    const findLengthToTurnColor = (
      board: number[][],
      x: number,
      y: number,
      dx: number,
      dy: number,
      turnColor: number
    ): number => {
      for (
        let i = 1;
        y + i * dy >= 0 &&
        y + i * dy < board.length &&
        x + i * dx >= 0 &&
        x + i * dx < board.length;
        i++
      ) {
        if (board[y + i * dy][x + i * dx] === turnColor) {
          return i;
        }
      }
      return -1;
    };

    const flipDisks = (
      board: number[][],
      x: number,
      y: number,
      dx: number,
      dy: number,
      length: number,
      turnColor: number
    ) => {
      for (let j = 1; j < length; j++) {
        board[y + j * dy][x + j * dx] = turnColor;
      }
    };

    const turnColor = UserColorUsecase.getUserColor(userId);
    if (nowTurnColor === turnColor) {
      let isMoveMade = false;
      for (const [dy, dx] of directions) {
        if (isValidMove(board, x, y, dx, dy, turnColor)) {
          const length = findLengthToTurnColor(board, x, y, dx, dy, turnColor);
          if (length > 0) {
            isMoveMade = true;
            flipDisks(board, x, y, dx, dy, length, turnColor);
          }
        }
      }
      if (isMoveMade) {
        board[y][x] = turnColor;
        nowTurnColor = 3 - nowTurnColor; // すべての石が裏返された後にターンを切り替え
      }
    }
    return board;
  },
};
