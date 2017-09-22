/**
 * 
 * @authors Eran Mitrani (eranmit@gmail.com)
 * @date    2017-09-22 14:57:44
 */
const SimplePromise = require('./SimplePromise');

function serverCall(callback) {
	setTimeout(()=>{
	    callback('This is the server data')
	}, 3000)
}

function tester() {
  return new SimplePromise((resolve, reject) => {
  	 serverCall(resolve)
  	 reject('failed to resolve')
  });
}


tester()
.then((data)=>{
   console.log(data)
})
.catch((err)=>{
	 console.log(err)
});


