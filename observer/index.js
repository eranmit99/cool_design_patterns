/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-21 18:36:41
 * @version $Id$
 */

const Subject = require('./Subject');
const Observer = require('./Observer');


class AddressUpdater extends Subject {
	
	constructor() {
		super()
        this.addressHandlers = {
        	postOfficeHandler: new Observer((data) => {
	    		console.log(`post office was updated: ${data}`)
	    	}),
        	bankHandler: new Observer((data) => {
	    		console.log(`bank was updated: ${data}`);
  		    })
        }

	    this.subscribe(this.addressHandlers.postOfficeHandler);
	    this.subscribe(this.addressHandlers.bankHandler);
	}

	changeHeadquartersAddress(newAddress) {
		this.notifyAllObservers(newAddress);
	}

	changeDeliveryAddress(newAddress){
		this.notifyObserver(this.addressHandlers.postOfficeHandler, newAddress);
	}
    
}

const AU = new AddressUpdater();

//AU.changeHeadquartersAddress('Eben Gabirol 152, Israel');
AU.changeDeliveryAddress('Eben Gabirol 152, Tel-Aviv, Israel');




