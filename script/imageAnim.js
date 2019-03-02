(() => {
	console.log("fired");

	// set up the puzzle pieces and boards
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

//get a references to the grag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let pazzleBoard = document.querySelector(".puzzle-board");

// get a reference to the buttons at the bottom so we can change the puzlle

let puzzleSelectors = document.querySelectorAll("#buttonHolder img");


let dropZones = document.querySelectorAll(".drop-zone"); 

//functions go in the middle
	function createPuzzlePieces(pictureIndex)

	{
		//debugger
		//generate images here --> need to make 4(top left, top right, bottom left,rbottom ight)
		thePieces.forEach((piece, index) =>
		{
			let newPuzzlePiece = `<img id ="piece${index}" class="puzzle-image"
			src="images/${piece + pictureIndex}.jpg" alt="puzzle piece" draggable>`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});

		initDrag();
		
	}

	// drag and drop functionality
	//
	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.id);
			});

		});
	}

// handle the top
// 
dropZones.forEach(zone => {
	zone.addEventListener("dragover", function(e) {
		e.preventDefault();
		console.log("dragged over me!");

	});

	zone.addEventListener("drop", function(e) {
		e.preventDefault();
		console.log("you dropped something on me");

		let piece = e.dataTransfer.getData("text/plain");
		e.target.appendChild(document.querySelector(`#${piece}`));
	});
});


function resetPuzzlePieces()
	{
		//change the current puzzle, regenerate the pieces
		// 
		// clean out the puzzle piecesdiv
		piecesBoard.innerHTML = "";
		// generate new pieces
		createPuzzlePieces(this.dataset.puzzleref);
	}


	// event handling goes here
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

// call this function to set up/ generate the pieces on load

	createPuzzlePieces(0);

})();
