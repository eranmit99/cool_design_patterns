/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-11-19 23:12:18
 */

 const Throttle = require('./DynamicThrottle');

 const t = new Throttle(()=>{ console.log('this is my action!!') }, 1000);

for (var i = 0; i < 10; i++) {
	t.delayed();
}

setTimeout(()=>{
	t.time = 5000
}, 5000)