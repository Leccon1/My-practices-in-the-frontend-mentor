import '../sass/main.scss'

const mainImg = document.querySelector('[data-main-img')
const thumbnails = document.querySelectorAll('.gallery__thumbnails button')

// Для смены класса у миниатюры
thumbnails.forEach(thumbnail => {
	thumbnail.addEventListener('click', () => {
		thumbnails.forEach(thumbnail => {
			thumbnail.classList.remove('gallery__thumbnails-item--current')
		})
		thumbnail.classList.add('gallery__thumbnails-item--current')

		mainImg.src = thumbnail.dataset.mainImg
	})
})

const plusBtn = document.querySelector('[data-mount-plus]')
const minusBtn = document.querySelector('[data-mount-minus]')
const mountValue = document.querySelector('[data-mount-value ]')

plusBtn.addEventListener('click', () => {
	mountValue.textContent = Number(mountValue.textContent) + 1
})
minusBtn.addEventListener('click', () => {
	if (Number(mountValue.textContent) > 0) {
		mountValue.textContent = Number(mountValue.textContent) - 1
	}
})
