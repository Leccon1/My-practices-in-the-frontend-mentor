import '../sass/main.scss'

const mainImg = document.querySelector('[data-main-img')
const thumbnails = document.querySelectorAll('.gallery__thumbnails button')

thumbnails.forEach(thumbnail => {
	thumbnail.addEventListener('click', () => {
		thumbnails.forEach(thumbnail => {
			thumbnail.classList.remove('gallery__thumbnails-item--current')
		})
		thumbnail.classList.add('gallery__thumbnails-item--current')

		mainImg.src = thumbnail.dataset.mainImg
	})
})
