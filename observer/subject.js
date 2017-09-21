/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-09-21 18:44:03
 */


module.exports = class Subject {

	constructor(args) {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer)
	}

	unSubscribe(observer) {
		this.observers.forEach((obs, index) => {
			if (observer === obs) {
				this.observers.splice(index, 1)
			}
		});
	}

	notifyObserver(observer, data) {
		this.observers.forEach((obs, index) => {
			if (observer === obs) {
				obs.notify(data)
			}
		});
	}

	notifyAllObservers(data) {
		this.observers.forEach((obs, index) => {
			obs.notify(data)
		});
	}
}