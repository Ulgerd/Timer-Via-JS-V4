var interval;

function timer(state) {
	var prevState = this.state || state;
	this.state = {...this.state, ...state};

	if ( this.state.time > 0 && (prevState.running == false && this.state.running == true) && !interval ) {
		timerSubtr();
		interval = setInterval(timerSubtr, 1000);
	}; 

	if (this.state.time == 0 || (prevState.running == true && this.state.running == false) ) {  
    		clearInterval(interval);
    		interval = false;
	}

	function timerSubtr() {
		this.state.time--;		
		state$.setState(this.state);
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

function render(state) {
	return `<div id = 'clock'>${state.time}</div>
			<ul>
				<li><button id='run'>Start</button></li>
				<li><button id='stop'>Stop</button></li>
				<li><button id='reset'>Reset</button></li>
			</ul>`;
};
