/*
returns allPaths = [[path1],[path2],[path3]] (Array of Arrays)
*/
const findAllMazePaths = (maze, x = 0, y = 0) => {
  const allPaths = []; // initialize array to hold all the paths
  if (x < 0 || x > maze.length - 1) return null; // if (x outside maze) return null
  if (y < 0 || y > maze[x].length - 1) return null; // if (y outside maze) return null
  if (maze[x][y] === '*') return null; // if (x,y not open) return null
  if (maze[x][y] === 'e') {
    const path = [];
    allPaths.push(path);
    return allPaths;
  } // if (x,y is goal) return true
  maze[x][y] = '*'; // mark x,y as 'not open' because its been visited

  const nextMoves = [
    [x - 1, y, 'U'],
    [x, y + 1, 'R'],
    [x + 1, y, 'D'],
    [x, y - 1, 'L'],
  ];

  nextMoves.forEach((nextMove) => {
    const paths = findAllMazePaths(maze, nextMove[0], nextMove[1]);
    if (paths != null) {
      for (path of paths) {
        path.unshift(nextMove[2]);
        allPaths.push(path);
      }
    }
  });

  maze[x][y] = ' '; // unmark x,y as 'not open'
  return allPaths;
};

let smallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let bigMaze = [
  [' ', ' ', ' ', '', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', '*', ' '],
  [' ', ' ', ' ', '*', ' ', '*', ' '],
  ['*', '*', '*', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

const way = '';

const smallMazePath = findAllMazePaths(smallMaze);
console.log(smallMazePath);

const bigMazePath = findAllMazePaths(bigMaze);
console.log(bigMazePath);
