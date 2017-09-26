/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-09-22 14:57:27
 */

module.exports = class SimplePromise {
	constructor(callback) {
		const noop = () => {};
		this.onResolve = this.onReject = noop;
		this.isHandled = false;

		setImmediate(() => {
			callback(this.resolve.bind(this), this.reject.bind(this))
		});
	}

	handle(callback, data) {
		if (this.isHandled) {
			return;
		}

		this.isHandled = true;
		callback(data);
	}

	resolve(data) {
		this.handle(this.onResolve, data)
	}

	reject(err) {
		this.handle(this.onReject, err)
	}

	then(callback) {
		if (typeof callback === "function") {
			this.onResolve = callback
		}
		return this;
	}

	catch (callback) {
		if (typeof callback === "function") {
			this.onReject = callback
		}
	}
}