(() => {
	console.log('fired');

	const theButton = document.querySelector("#buttonHolder img");


	function changeHeadline() {
		document.querySelector("h1").textContent = "Hello There from Js!";
		document.querySelector("p").textContent = "this is the subhead!";
	}
	// set up the puzzle pieces and boards
	
    //window.addEventListener("load", changeHeadline);

    theButton.addEventListener("click", changeHeadline);

})();
