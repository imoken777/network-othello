import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../../atoms/user';
import styles from './othello.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState<number[][]>();
  const fetchBoard = async () => {
    const res = await apiClient.rooms.$get().catch(returnNull);

    if (res === null) {
      const newRoom = await apiClient.rooms.$post();
      setBoard(newRoom.board);
    } else {
      setBoard(res.board);
    }
  };
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

  const updateBoard = (
    board: number[][],
    x: number,
    y: number,
    dx: number,
    dy: number,
    turnColor: number,
    i: number
  ): number[][] => {
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[y][x] = turnColor;
    for (let j = 1; j < i; j++) {
      newBoard[y + j * dy][x + j * dx] = turnColor;
    }
    return newBoard;
  };

  const flipStonesInLine = (
    board: number[][],
    x: number,
    y: number,
    dx: number,
    dy: number,
    turnColor: number
  ): { newBoard: number[][]; flipped: boolean } => {
    let flipped = false;
    let i = 1;
    while (
      y + i * dy >= 0 &&
      y + i * dy < board.length &&
      x + i * dx >= 0 &&
      x + i * dx < board.length
    ) {
      if (board[y + i * dy][x + i * dx] === turnColor) {
        flipped = true;
        break;
      }
      i++;
    }
    return {
      newBoard: flipped
        ? updateBoard(board, x, y, dx, dy, turnColor, i)
        : JSON.parse(JSON.stringify(board)),
      flipped,
    };
  };

  const flipStonesInDirection = (
    board: number[][],
    x: number,
    y: number,
    dx: number,
    dy: number,
    turnColor: number
  ): { newBoard: number[][]; flipped: boolean } => {
    if (isValidMove(board, x, y, dx, dy, turnColor)) {
      return flipStonesInLine(board, x, y, dx, dy, turnColor);
    } else {
      return { newBoard: JSON.parse(JSON.stringify(board)), flipped: false };
    }
  };

  const clickCell = async (x: number, y: number) => {
    await apiClient.board.$post({ body: { x, y } });
    let newBoard: number[][] = JSON.parse(JSON.stringify(board));
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

    let flipped = false;
    for (const direction of directions) {
      const result = flipStonesInDirection(newBoard, x, y, direction[0], direction[1], turnColor);
      newBoard = result.newBoard;
      flipped = flipped || result.flipped;
    }

    if (flipped) {
      setTurnColor(3 - turnColor);
      setBoard(newBoard);
    }
    await fetchBoard();
  };

  useEffect(() => {
    const canselId = setInterval(fetchBoard, 500);
    return () => {
      clearInterval(canselId);
    };
  }, []);

  if (!board || !user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickCell(x, y)}>
                {color !== 0 && (
                  <div
                    className={styles.stone}
                    style={{ background: color === 1 ? '#000' : color === 2 ? '#fff' : '#ff0' }}
                  />
                )}
              </div>
            ))
          )}
        </div>
        {/* <div>{turnColor === 1 ? '黒のターン' : '白のターン'}</div>
      <div>
        黒{count_stone(1)} 白{count_stone(2)}
      </div> */}
      </div>
    </>
  );
};

export default Home;
