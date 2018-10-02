$(document).ready(function(){
	let list = $('#list');
	list.append('Hello World');

	function networkRequest(){
		$.ajax({
			url: 'http://numbersapi.com/42',
			method: 'get',
			success: function(data){
                console.log(data);
			}
		})
	}

	networkRequest();
    
	$('.changeStyle .box3').siblings().css('color','red');
})