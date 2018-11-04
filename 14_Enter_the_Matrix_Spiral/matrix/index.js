// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// matrix(4)
// [
//  [r0c0, r0c1, r0c2, r0c3],
//  [r1c0, r1c1, r1c2, r1c3],
//  [r2c0, r2c1, r2c2, r2c3],
//  [r3c0, r3c1, r3c2, r3c3]
// ]

 
// My iterative solution
function matrix(n) {
    var container = [];
    var rounds = 0;
    var row = 0;
    var collumn = 0;
    var direction = "right"
    //create a the container matrix
    for(var x = 0; x < n; x++) {
	container.push(Array(n));
    }

    while(rounds !== n*n) {
	rounds++;
	//start
	if(direction === "right") { 
	    container[row][collumn] = rounds;
	    if(shouldIStayOnThisDirection(container, row, collumn, "right")) {
		direction = "right";
		collumn++;
		continue;
	    } else {
		direction = "down";
		row++;
		continue;
	    }
	}
	
	    
	if(direction === "down") {
	    container[row][collumn] = rounds;
	    if(shouldIStayOnThisDirection(container, row, collumn, "down")) {
		direction = "down";
		row++;
		continue;
	    } else {
		direction = "left";
		collumn--;
		continue;
	    }
	}
		
	
	if(direction === "left") {
	    container[row][collumn] = rounds;
	    if(shouldIStayOnThisDirection(container, row, collumn, "left")) {
		direction = "left";
		collumn--;
		continue;
	    } else {
		direction = "up";
		row--;
		continue;
	    }
	}
	

	if(direction === "up") {
	    container[row][collumn] = rounds;
	    if(shouldIStayOnThisDirection(container, row, collumn, "up")) {
		direction = "up";
		row--;
		continue;
	    } else {
		direction = "right";
		collumn++;
		continue;
	    }
	}
    }
    return container;
}

function shouldIStayOnThisDirection(container, currentRow, currentCollumn, direction) {
    var isIndexWithinRange;
    var isNextIndexEmpty;
    switch(direction) {
    case 'right':
	isIndexWithinRange = container.length - 1 >= currentCollumn + 1;
	isNextIndexEmpty = (typeof container[currentRow][currentCollumn + 1] === "undefined");
	break;
	
    case 'down':
	isIndexWithinRange = container.length - 1 >= currentRow + 1;
	isNextIndexEmpty = (typeof container[currentRow+1] !== "undefined" && typeof container[currentRow+1][currentCollumn] === "undefined");
	break;

    case 'left':
	isIndexWithinRange = currentCollumn - 1 >= 0;
	isNextIndexEmpty = (typeof container[currentRow][currentCollumn-1] === "undefined");	
	break;

    case 'up':
	isIndexWithinRange = currentRow - 1 >= 0;
	isNextIndexEmpty = (typeof container[currentRow-1] !== "undefined" && typeof container[currentRow-1][currentCollumn] === "undefined");
	break;
    }
    return isIndexWithinRange && isNextIndexEmpty ? true : false;
}




// My recursive solution
/*
function matrix(n, container=[], round=0, row=0, collumn=0, direction="", roundFinished=false) {
    var checkContainerNextIndex;
    var checkContainerLength;


    // Create a multidimensional empty array
    if(container.length !== n) {
	container.push(Array(n));
	return matrix(n, container, round, row, collumn, direction, roundFinished);
    }

    if(round !== n*n) {
	round++;
	if(round === 1) {
	    roundFinished = true;
	    container[row][collumn] = round;
	    collumn++;
	    direction = "right";
	}

	if(direction === "right" && roundFinished === false) {
	    roundFinished = true;
	    container[row][collumn] = round;
	    // Check if the next collumn is empty OR if there it's NOT the end of the collumn
	    if(isNextIndexEmptyAndWithinRange(container, row, collumn, "right")) {
		collumn++;
		direction = "right";
	    } else {
		row++;
		direction = "down";
	    }
	}

	if(direction === "down" && roundFinished === false) {
	    roundFinished = true;
	    container[row][collumn] = round;
	    if(isNextIndexEmptyAndWithinRange(container, row, collumn, "down")) {
		row++;
		direction = "down";
	    } else {
		collumn--;
		direction = "left";
	    }
	}

	if(direction === "left" && roundFinished === false) {
	    roundFinished = true;
	    container[row][collumn] = round;
	    if(isNextIndexEmptyAndWithinRange(container, row, collumn, "left")) {
		collumn--;
		direction = "left";
	    } else {
		row--;
		direction = "up";
	    }
	}

	if(direction === "up" && roundFinished === false) {
	    roundFinished = true;
	    container[row][collumn] = round;
	    if(isNextIndexEmptyAndWithinRange(container, row, collumn, "up")) {
		row--;
		direction = "up";
	    } else {
		collumn++;
		direction = "right";
	    }
	}
	
	return matrix(n, container, round, row, collumn, direction);
    }
    
    // Base case
    if(round === (n*n) ) {
	return container;
    }
}

function isNextIndexEmptyAndWithinRange(container, currentRow, currentCollumn, direction) {
    var isIndexWithinRange;
    var isNextIndexEmpty;
    switch(direction) {
    case 'right':
	isIndexWithinRange = container.length - 1 >= currentCollumn + 1;
	isNextIndexEmpty = (typeof container[currentRow][currentCollumn + 1] === "undefined");
	break;
	
    case 'down':
	isIndexWithinRange = container.length - 1 >= currentRow + 1;
	isNextIndexEmpty = (typeof container[currentRow+1] !== "undefined" && typeof container[currentRow+1][currentCollumn] === "undefined");
	break;

    case 'left':
	isIndexWithinRange = currentCollumn - 1 >= 0;
	isNextIndexEmpty = (typeof container[currentRow][currentCollumn-1] === "undefined");	
	break;

    case 'up':
	isIndexWithinRange = currentRow - 1 >= 0;
	isNextIndexEmpty = (typeof container[currentRow-1] !== "undefined" && typeof container[currentRow-1][currentCollumn] === "undefined");
	break;
    }
    return isIndexWithinRange && isNextIndexEmpty ? true : false;
}


*/




module.exports = matri;
