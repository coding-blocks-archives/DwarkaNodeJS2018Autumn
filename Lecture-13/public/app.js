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
        let del = document.createElement('button');
        let btnText = document.createTextNode('Delete');
        del.addEventListener('click', delet);
        del.append(btnText);
        li.append(node);
        li.append(del);
        list.append(li);
    }
    
    function delet() {
      let index =  $(this).parent().index();
       let self = this;
      $.ajax({
          url: `/delete`,
          method: 'post',
          data: {'id': index},
          success: function(data) {
              if(data == 'OK') {
                $(self).parent().remove();
              }
          }

      })
    }
    function refresh() {
        $.ajax({
            url: '/todoList',
            method: 'get',
            success: function(data) {
                for(let i=0; i< data.length; i++) {
                    createNode(data[i]);
                }
            }
        })
    }
})