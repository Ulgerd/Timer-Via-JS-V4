class StatefulEmitter {
	constructor(obj) {
		this.state = {...obj};
		this.funcs = [];
	};

	subscribe(fn) {
		this.funcs.push(fn);
		this.functionCall();

		return () => {
			this.funcs = this.funcs.filter(eventFn => fn !== eventFn);
		};
	};

  	setState(data) {
		this.state = (data.constructor === Function) ? data(this.state) : {...this.state, ...data};
  		this.functionCall();
	};

	functionCall() {
		return this.funcs.forEach(fn => {
			fn.call(null, this.state);
		})
	};
};