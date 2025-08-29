import data from '../data/data.json'

// Переход на страницу destinations через кнопку
const exploreBtn = document.getElementById('exploreBtn')
exploreBtn.addEventListener('click', () => {
	window.location.href = './pages/destinations.html'
})

function renderHome() {
	const subTitleEl = document.querySelector('.hero__subtitle')
	const titleEl = document.querySelector('.hero__title')
	const descriptionEl = document.querySelector('.hero__description')

	if (!subTitleEl || !titleEl || !descriptionEl) return

	subTitleEl.textContent = data.home[0].subtitle
	titleEl.textContent = data.home[0].title
	descriptionEl.textContent = data.home[0].description
}

function renderDestinations() {}

const page = document.body.dataset.page

switch (page) {
	case 'home':
		renderHome()
		break
	case 'destinations':
		renderDestinations()
		break
}
