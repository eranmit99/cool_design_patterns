/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-09-21 19:40:47
 */


const MyEmitter = require('./MyEmitter');


class Table extends MyEmitter {
	constructor() {
		super();

		this.TOPICS_NAMES = {
			ADDED: 'added',
			CHANGED: 'changed',
			DELETED: 'deleted'
		}
	}

	addContent(data) {
		this.emit(this.TOPICS_NAMES.ADDED, data)
	}

	changeContent(data) {
		this.emit(this.TOPICS_NAMES.CHANGED, data)
	}

	deleteContent(data) {
		this.emit(this.TOPICS_NAMES.DELETED, data)
	}
}


const t = new Table();

t.on(t.TOPICS_NAMES.ADDED, (data) => {
	console.log(`New content was added: ${data}`)
})

t.addContent('This is a new content for the table')