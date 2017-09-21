/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-09-21 19:52:44
 */

module.exports = class MyEmitter {
	constructor(args) {
		this.topics = {};
	}

	on(topic, cb) {
		if (!this.topics[topic]) {
			this.topics[topic] = [];
		}
		this.topics[topic].push(cb)
	}

	off(topic, cb) {
		this.topics[topic].forEach((handler, index) => {
			if (handler === cb) {
				this.topics[topic].splice(index, 1)
			}
		});
	}

	emit(topic, data) {
		this.topics[topic].forEach((handler, index) => {
			if (typeof handler === "function"){
				try {
					handler(data)
				} catch(e) {
					console.warn(`failed to exec function`)
				}
			}
		});
	}

}