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

export const boardUsecase = {
  getBoard: () => board,
  clickBoard: (x: number, y: number, userId: UserId): BoardArray => {
    board[y][x] = UserColorUsecase.getUserColor(userId);
    return board;
  },
};
