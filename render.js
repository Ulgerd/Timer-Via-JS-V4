function render(state) {
	return `<div id = 'clock'>${state.time}</div>
			<ul>
				<li><button id='run'>Start</button></li>
				<li><button id='stop'>Stop</button></li>
				<li><button id='reset'>Reset</button></li>
			</ul>`;
};
