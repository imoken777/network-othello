import type { BoardArray } from '$/repository/boardRepository';

export type Methods = {
  get: {
    resBody: { board: BoardArray };
  };
  post: {
    reqBody: { x: number; y: number };
    resBody: { board: BoardArray };
  };
};
