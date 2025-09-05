import data from '../data/data.json'
import { renderContent } from './renderer'
import { initSwipeListener } from './swipe'

// Переход на страницу destinations через кнопку
const exploreBtn = document.getElementById('exploreBtn')
if (exploreBtn) {
	exploreBtn.addEventListener('click', () => {
		window.location.href = './pages/destinations.html'
	})
}

function renderHome() {
	const subTitleEl = document.querySelector('[data-subtitle]')
	const titleEl = document.querySelector('[data-title]')
	const descriptionEl = document.querySelector('[data-desc]')

	if (!subTitleEl || !titleEl || !descriptionEl) {
		console.log('some elements not found')
		return
	}

	// По умолчанию
	subTitleEl.textContent = data.home[0].subtitle
	titleEl.textContent = data.home[0].title
	descriptionEl.textContent = data.home[0].description
}

function renderDestinations() {
	const selectors = {
		nameEl: document.querySelector('[data-name]'),
		imageEl: document.querySelector('[data-image]'),
		descEl: document.querySelector('[data-description]'),
		extraEls: {
			distance: document.querySelector('[data-distance]'),
			travel: document.querySelector('[data-travel]'),
		},
	}

	const buttons = document.querySelectorAll('[data-planet]')

	if (!selectors) {
		console.log('some elements not found')
		return
	}

	// контент по умолчанию
	renderContent({
		dataItem: data.destinations[0],
		selectors,
	})

	// Обработчик кликов для смены контента
	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			const planetName = btn.dataset.planet
			const planetData = data.destinations.find(
				p => p.name.toLowerCase() === planetName.toLowerCase()
			)
			if (!planetData) return

			renderContent({
				dataItem: planetData,
				selectors,
			})
		})
	})
}

function renderCrew() {
	let currentIndex = 0

	const selectors = {
		nameEl: document.querySelector('[data-name]'),
		descEl: document.querySelector('[data-description]'),
		imageEl: document.querySelector('[data-image]'),
		extraEls: {
			role: document.querySelector('[data-role]'),
		},
	}

	if (!selectors) {
		console.log('some elements not found')
		return
	}

	const dots = document.querySelectorAll('.hero__dot')

	function updateDots(index) {
		dots.forEach((dot, i) => {
			console.log('dot:', dot, i)
			if (i === index) {
				dot.classList.add('hero__dot--active')
			} else {
				dot.classList.remove('hero__dot--active')
			}
		})
	}

	function onSwipeRight() {
		currentIndex = (currentIndex + 1) % data.crew.length

		updateDots(currentIndex)

		renderContent({
			dataItem: data.crew[currentIndex],
			selectors,
		})
	}
	function onSwipeLeft() {
		currentIndex = (currentIndex - 1 + data.crew.length) % data.crew.length

		updateDots(currentIndex)

		renderContent({
			dataItem: data.crew[currentIndex],
			selectors,
		})
	}

	//контент по умолчанию
	renderContent({
		dataItem: data.crew[0],
		selectors,
	})

	initSwipeListener(onSwipeLeft, onSwipeRight)
}

const page = document.body.dataset.page

switch (page) {
	case 'home':
		renderHome()
		break
	case 'destinations':
		renderDestinations()
		break
	case 'crew':
		renderCrew()
		break
}

console.log(page)
