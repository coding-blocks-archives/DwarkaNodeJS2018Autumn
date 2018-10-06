
// const url = 'http://numbersapi.com/42';

// function asyncFunction() {
//     return new Promise( function(resolve, reject) {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () =>  resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.statusText);
        
       
//         xhr.send();

//       });
// }

// asyncFunction().then(function(data){
//     console.log(data);
// })

//Method 2
function netWorkcall(){
    fetch('http://numbersapi.com/42')
    .then(function(response){
        if(response.status != 200) {
            return;
        }
         
        response.text().then(function(data){
            console.log(data);
        })
    })
}

//netWorkcall();
//Method 1
async function network() {
    try {
        let data = await fetch('http://numbersapi.com/42');
        let text = await data.text();
        console.log(text);
    }
    catch(e) {
       throw `Error is ${e}`;
    }
}
network();