/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-21 18:46:21
 * @version $Id$
 */

module.exports = class Observer {

	constructor(handler) {
		this.handler = handler;
	}

	notify(data) {
		this.handler(data)
	}
}