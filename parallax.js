window.ondeviceorientation = function (event) {
		
	var gamma = Math.round(event.gamma);
	var beta = Math.round(event.beta);
	var direction = Math.round(event.alpha);
		
	Parallax(gamma, beta, direction);
};
		
function Parallax(gamma, beta, direction) {
		
	$(".parallax").css("margin-top", beta + "px");
	$(".parallax").css("margin-left", gamma + "px");
			
	$(".parallax.more").css("margin-top", Math.round(beta*2) + "px");
	$(".parallax.more").css("margin-left", Math.round(gamma*2) + "px");
			
	$(".parallax.less").css("margin-top", Math.round(beta/2) + "px");
	$(".parallax.less").css("margin-left", Math.round(gamma/2) + "px");
	
	$(".parallax.subtle").css("margin-top", Math.round(beta*0.2) + "px");
	$(".parallax.subtle").css("margin-left", Math.round(gamma*0.2) + "px");
}