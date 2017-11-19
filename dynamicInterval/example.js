/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-11-19 10:10:12
 */


const di = new DynamicInterval(()=> { console.log('this is my action!!') }, 1000);

di.start()

setTimeout(()=>{
	di.changeTime(3000);
	
	di.changeAction(()=>{
		console.log("this is my new action!!")
	})
}, 7 * 1000)


setTimeout(()=>{
	di.stop();
}, 10 * 1000)