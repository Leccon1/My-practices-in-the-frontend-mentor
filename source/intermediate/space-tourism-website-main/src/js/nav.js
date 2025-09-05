import '/src/style/sass/main.scss'

// Для nav из header
const nav = document.querySelector('.nav')
const burger = document.querySelector('.burger')

if (nav && burger) {
	burger.addEventListener('click', () => {
		nav.classList.toggle('active')
		burger.classList.toggle('active')
	})
}

// Для nav из destinations, crew, technology
const buttons = document.querySelectorAll('[data-planet]')

buttons.forEach(button => {
	button.addEventListener('click', () => {
		buttons.forEach(btn => {
			btn.classList.remove('active')
		})
		button.classList.add('active')
	})
})
