import '/src/style/sass/main.scss'

const nav = document.querySelector('.nav')
const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
	nav.classList.toggle('active')
	burger.classList.toggle('active')
})
