/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-11-19 10:08:12
 */

module.exports = class DynamicInterval {

	constructor(cb, startTime) {
		this.to = null;
		this.time = startTime;
		this.cb = cb;
		this.isStopped = false;  
	}

	changeTime(t) {
		this.time = t;
	}

	changeAction(cb) {
		this.cb = cb;
	}

	start() {
		const action = () => {
			this.cb();			

			this.to = setTimeout(()=>{
				clearTimeout(this.to);
				if (!this.isStopped) {
					action();
				}
			}, this.time)
		}		
		action();	
	}
	
	stop() {
		this.isStopped = true;
	}

	restart() {
		this.isStopped = false;
		this.start();
	}
}
