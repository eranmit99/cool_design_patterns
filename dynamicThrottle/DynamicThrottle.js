/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-11-19 23:12:18
 */

class Throttle {

	constructor(initialAction, initialTime) {
		this.executionQueue = [];
		this.time = initialTime;
		this.action = initialAction;
		this.to = null;
		this.isWorking = false;
	}

	executeCommand(){		
		const action = () => {
			this.executionQueue.pop()();	
		
			this.to = setTimeout(()=>{
				clearTimeout(this.to);
				if (this.executionQueue.length > 0) {
					action();
				} else {
					this.isWorking = false;
				}
			}, this.time)
		}		
		action();
	}

	delayed(){
		this.executionQueue.push(this.action);

		if (!this.isWorking) {
			this.isWorking = true;
			this.executeCommand();
		}	
	};

}


const t = new Throttle(()=>{ console.log('this is my action!!') }, 1000);

for (var i = 0; i < 10; i++) {
	t.delayed();
}

setTimeout(()=>{
	t.time = 5000
}, 5000)


