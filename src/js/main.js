import '../sass/main.scss'

const productGallery = document.querySelector('.product__gallery')
const mainImagePage = productGallery.querySelector('[data-main-img]')
const thumbnailsPage = productGallery.querySelectorAll(
	'.gallery__thumbnails button'
)

let currentImagesSrc = null

thumbnailsPage.forEach(thumbnail => {
	thumbnail.addEventListener('click', () => {
		thumbnailsPage.forEach(t =>
			t.classList.remove('gallery__thumbnails-item--current')
		)

		thumbnail.classList.add('gallery__thumbnails-item--current')

		mainImagePage.src = thumbnail.dataset.mainImgSrc
		currentImagesSrc = thumbnail.dataset.mainImgSrc
	})
})

const modalWindow = document.querySelector('[data-modal]')
const modalGallery = document.querySelector('.gallery--modal')
const mainImageModal = modalGallery.querySelector('[data-main-img]')
const thumbnailsModal = modalGallery.querySelectorAll(
	'.gallery__thumbnails button'
)
const openModalBtn = document.querySelector('[data-main-img-button]')
const closeModalBtn = document.querySelector('[data-modal-closed-button]')
const prevBtn = modalGallery.querySelector('.nav-btn__previous-btn')
const nextBtn = modalGallery.querySelector('.nav-btn__next-btn')

const modalImages = Array.from(thumbnailsModal).map(
	btn => btn.dataset.mainImgSrc
)
let currentIndex = 0

// Функция обновления картинки в модалке при помощи кнопочек
function updateModalImage(index) {
	if (index < 0) index = modalImages.length - 1
	if (index >= modalImages.length) index = 0
	currentIndex = index

	mainImageModal.src = modalImages[currentIndex]

	thumbnailsModal.forEach(t =>
		t.classList.remove('gallery__thumbnails-item--current')
	)
	thumbnailsModal[currentIndex].classList.add(
		'gallery__thumbnails-item--current'
	)
}

// Клики по миниатюрам в модалке
thumbnailsModal.forEach((thumbnail, index) => {
	thumbnail.addEventListener('click', () => {
		updateModalImage(index)
	})
})

// Кнопки лИстания
prevBtn.addEventListener('click', () => updateModalImage(currentIndex - 1))
nextBtn.addEventListener('click', () => updateModalImage(currentIndex + 1))

openModalBtn.addEventListener('click', () => {
	modalWindow.classList.add('modal--visible')

	// выставляем картинку, которая была на странице
	const startIndex = modalImages.indexOf(currentImagesSrc)
	updateModalImage(startIndex !== -1 ? startIndex : 0)
})

// закрыть модалку
closeModalBtn.addEventListener('click', () => {
	modalWindow.classList.remove('modal--visible')
})
