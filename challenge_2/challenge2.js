$(function(){
var control = 0;

/*
* Changes font color from black to red and back
*/
$('h1').click(function(){
	if (control ==0){
		$('h1').css("color", "red");
		control++;
	}else{
		$('h1').css("color", "black");
		control--;
	}
});


/*
* Hides odd sections
*/
$('.title:even').hide();
$('footer li:even').hide();


/*
* Replace every instance of "bacon" with "Laser Vision"
*/
$('p').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('Bacon', 'Laser Vision')); 
});



/*
* Removes pictures on aside
*/
$('aside').remove();



})