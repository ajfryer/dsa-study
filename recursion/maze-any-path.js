const findMazePath = (maze, x = 0, y = 0, path = []) => {
  /* Base Cases */
  if (x < 0 || x > maze.length - 1) return false; // if (x outside maze) return false
  if (y < 0 || y > maze[x].length - 1) return false; // if (y outside maze) return false
  if (maze[x][y] === '*') return false; // if (x,y not open) return false
  if (maze[x][y] === 'e') return true; // if (x,y is goal) return true
  /* Recursive Case */
  maze[x][y] = '*'; // mark x,y as 'not open' because its been visited
  if (findMazePath(maze, x - 1, y, path) !== false) {
    path.unshift('U');
    return path;
  } // mark 'U' on successful path
  if (findMazePath(maze, x, y + 1, path) !== false) {
    path.unshift('R');
    return path;
  } // mark 'R' on successful path
  if (findMazePath(maze, x + 1, y, path) !== false) {
    path.unshift('D');
    return path;
  } // mark 'D' on successful path
  if (findMazePath(maze, x, y - 1, path) !== false) {
    path.unshift('L');
    return path;
  } // mark 'L' on successful path
  maze[x][y] = ' '; // unmark x,y as 'not open'
  return false;
};

let smallMaze = [
  [' ', '*', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

const way = 'RRDDLLDDRRRRRR';

const smallMazePath = findMazePath(smallMaze);
console.log(smallMazePath);
const smallMazeSolution = 'DDRR';
console.log(smallMazeSolution);
console.log(
  'do path and solution match?',
  smallMazePath.join('') === smallMazeSolution
);

const bigMazePath = findMazePath(bigMaze);
console.log(bigMazePath);
const bigMazeSolution = 'RRDDLLDDRRRRRR';
console.log(bigMazeSolution);
console.log(
  'do path and solution match?',
  bigMazePath.join('') === bigMazeSolution
);
