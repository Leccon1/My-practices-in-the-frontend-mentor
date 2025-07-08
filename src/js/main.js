const btnShare = document.querySelector('.card__author-share')
const cardPreview = document.querySelector('.card__preview')
const wrapper = document.querySelector('.card__share-wrapper')

function togglePreview() {
	cardPreview.classList.toggle('active')
}

if (window.innerWidth <= 768) {
	btnShare.addEventListener('click', togglePreview)
} else {
	wrapper.addEventListener('mouseenter', () => {
		cardPreview.classList.add('active')
	})
	wrapper.addEventListener('mouseleave', () => {
		cardPreview.classList.remove('active')
	})
}
