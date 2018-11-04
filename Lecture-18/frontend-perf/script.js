
let start = document.getElementById('start')
let num = document.getElementById('num')
let list = document.getElementById('list')

// start.onclick = function () {
//   let start = new Date().getTime()

//   let N = parseInt(num.value)
//   let html = ''
//   for (let i = 1; i <= N; i++) {
//     html += '<li>' + i + '</li>'
//   }
//   list.innerHTML = html

//   console.log(new Date().getTime() - start)
// }

start.onclick = function () {
  let start = new Date().getTime()

  let N = parseInt(num.value)
  for (let i = 1; i <= N; i++) {
    let li = document.createElement('li')
    li.innerText = i
    list.appendChild(li)
  }

  console.log(new Date().getTime() - start)
}
