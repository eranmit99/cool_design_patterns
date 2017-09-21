/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-09-21 18:46:21
 */

module.exports = class Observer {

	constructor(handler) {
		this.handler = handler;
	}

	notify(data) {
		this.handler(data)
	}
}