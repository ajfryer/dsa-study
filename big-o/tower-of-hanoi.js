/*
FUNCTION MoveDisk(disk, source, dest, spare):
IF disk == 0, THEN:
    move disk from source to dest
ELSE:
    MoveDisk(disk - 1, source, spare, dest)   // Step 1 above
    move disk from source to dest              // Step 2 above
    MoveDisk(disk - 1, spare, dest, source)   // Step 3 above
END IF
*/

const moveDisk = (disk = 2, source = [2, 1, 0], dest = [], spare = []) => {
  if (disk === 0) {
    console.log('disk', disk);
    console.log('source', source);
    console.log('dest', dest);
    console.log('spare', spare);
    dest.push(source.pop());
  } else {
    moveDisk(disk - 1, source, spare, dest);
    dest.push(source.pop());
    moveDisk(disk - 1, spare, dest, source);
  }
  console.log('disk', disk);
  console.log('source', source);
  console.log('dest', dest);
  console.log('spare', spare);
};

const printTower = (disk, tower) => {
  //console.table(tower.map((_, colIndex) => tower.map((row) => row[colIndex])));
  console.log(`Move disk ${disk} from source to dest tower`);
  console.table(tower);
};

const moveDisk2 = (disk = 2, source = [2, 1, 0], dest = [], spare = []) => {
  console.log('recursive call');
  //printTower('0', [source, dest, spare]);

  if (disk === 0) {
    //printTower([source, dest, spare]);
    dest.push(source.pop());
    printTower(disk, [source, dest, spare]);
  } else {
    moveDisk2(disk - 1, source, spare, dest);
    //printTower('2', [source, dest, spare]);
    //printTower('2.5', [source, dest, spare]);
    dest.push(source.pop());
    printTower(disk, [source, dest, spare]);
    moveDisk2(disk - 1, spare, dest, source);
    //printTower('4', [source, dest, spare]);
  }
  //printTower('5', [source, dest, spare]);
  //return [source, dest, spare];
};

printTower(5, moveDisk2(5, [5, 4, 3, 2, 1, 0]));
