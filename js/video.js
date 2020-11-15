var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = volumeSlider.value/100;
	let slider = document.getElementById("volume").innerHTML = volumeSlider.value + "%";
	console.log(volumeSlider.value);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .90;
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.10;
	console.log("Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5;
	if (video.ended) {
		video.load();
		video.play();
	}
	console.log("Current location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		let sound = document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		let sound = document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
	console.log("Grayscale");
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").style.filter = "grayscale(0%)";
	console.log("Original");
});
