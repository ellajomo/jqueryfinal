$("#useBilling").click(function(){
	var home = $("#home")
	var billing = $("#billing")

	if (this.checked){
		home.val(billing.val());
		home.prop("disabled", true);
		console.log(home.val());
	} 

	else{
		home.val('');
		home.prop("disabled", false);
	}
})



// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	}