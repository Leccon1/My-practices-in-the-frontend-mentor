// import '../style/sass/main.scss'
import { includeHTML } from './include.js'

Promise.all([
	includeHTML('#head', 'public/common/head.html'),
	includeHTML('#header', 'public/common/header.html'),
]).then(() => {
	import('/src/style/sass/main.scss')

	const nav = document.querySelector('.nav')
	const burger = document.querySelector('.burger')
	if (burger && nav) {
		burger.addEventListener('click', () => {
			nav.classList.toggle('active')
			burger.classList.toggle('active')
		})
	}
})
