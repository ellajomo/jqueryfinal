$(document).ready(function(){
	$("#useBilling").click(function(){
		if ($(this).is("checked")){
			$('#home').prop('disabled', true);
			$('#home').val($('#billing').val());
		}
		else{
			$('#home').val(" ");
			$('#home').prop('disabled', false);
		}
	});
});



// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}