var video;

// load page
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.getElementById("player1")
	video.autoplay=false
	video.loop = false
	video.load();
})

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("play button has been clicked")
	video = document.getElementById("player1")
	video.play()
	var volume = document.getElementById("slider").value
	document.getElementById("volume").innerHTML = volume + "%"
})

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause button has been clicked")
	video = document.getElementById("player1")
	video.pause()
})

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video = document.getElementById("player1")
	console.log(video.playbackRate *= 0.9)

})

// slow down
document.querySelector("#faster").addEventListener("click", function() {
	video = document.getElementById("player1")
	console.log(video.playbackRate /= 0.9)
})

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video = document.getElementById("player1")
	if (video.currentTime + 10 < video.duration) {
		console.log(video.currentTime += 10) //this works but need mechanism to loop to beginning of video if time exceeded
	}
	else {
		console.log(video.currentTime = 0)
	}
})

// mute
document.querySelector("#mute").addEventListener("click", function() {
	video = document.getElementById("player1")
	if (!video.muted) {
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
	}
	else {
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
	}
})

// volume slider
document.querySelector("#slider").addEventListener("change", function (s) {
	video = document.getElementById("player1")
	video.volume = s.currentTarget.value / 100;
	document.getElementById("volume").innerHTML = (video.volume) * 100 + "%"
})

// styled - vintage
document.querySelector("#vintage").addEventListener("click", function() {
	video = document.getElementById("player1")
	video.classList.add("oldSchool")
})

// styled - orig
document.querySelector("#orig").addEventListener("click", function() {
	video = document.getElementById("player1")
	video.classList.remove("oldSchool")
})
