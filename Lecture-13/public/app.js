$(document).ready(function(){
    let inp = $('#inp');
    let btn = $('#btn');
    let list = $('#list');
    refresh();
    btn.click(function(){
        let value = inp.val();
        network(value);
    })

    function network(value){
        $.ajax({
            url: `/todo?task=${value}`,
            method: 'get',
            success: function(data){
                if(data === 'OK') {
                    createNode(value);
                }
            }
        })
    }

    function createNode(value) {
        let li = document.createElement('li');
        let node = document.createTextNode(value);
        li.append(node);
        list.append(li);
    }

    function refresh() {
        $.ajax({
            url: '/todoList',
            method: 'get',
            success: function(data) {
                console.log(data)
                for(let i=0; i< data.length; i++) {
                    createNode(data[i]);
                }
            }
        })
    }
})