function getTweets(cb) {
  console.log('Sending Tweets');
 setTimeout(function(){
 	getBooks();
 	cb();
 })

 console.log('Receiveing tweets')
  
}

function doWork() {
   console.log('Work Done ....')
}

function getBooks() {

   console.log('Got Books');
}


getTweets(doWork)




