var [interval, currState] = [];

function timer(state) {

	var prevState = currState || state;
	currState = state;

	if ( currState.time > 0 && (prevState.running == false && currState.running == true) && !interval ) {
		timerSubtr();
		interval = setInterval(timerSubtr, 1000);
	}; 

	if (currState.time == 0 || (prevState.running == true && currState.running == false) ) {  
    	clearInterval(interval);
    	interval = false;
	}

	function timerSubtr() {
		currState.time--;		
		state$.setState(currState);
	}
	
	addListeners()
};

function addListeners() {
	var runElem = document.querySelector("#timer #run")
	var stopElem = document.querySelector("#timer #stop")
	var resetElem = document.querySelector("#timer #reset")
	
	runElem.addEventListener("click", () => {
	  state$.setState({running: true}) 
	})

	stopElem.addEventListener("click", () => {
		state$.setState({running: false}) 
	})

	resetElem.addEventListener("click", () => {
		state$.setState({time: 10, running: false}) 
	})
};