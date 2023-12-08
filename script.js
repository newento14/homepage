const avatar = document.getElementById('avatar')

const audio = new Audio('./assets/meow.mp3')

avatar.addEventListener('mouseover', function () {
	audio.currentTime = 0
	audio.play()
})
