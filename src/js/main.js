const btnShare = document.querySelector('.card__author-share')
const cardPreview = document.querySelector('.card__preview')

function togglePreview() {
	cardPreview.classList.toggle('active')
}

if (window.innerWidth <= 768) {
	btnShare.addEventListener('click', togglePreview)
} else {
	btnShare.addEventListener('mouseenter', () => {
		cardPreview.classList.add('active')
	})
	btnShare.addEventListener('mouseleave', () => {
		cardPreview.classList.remove('active')
	})
	cardPreview.addEventListener('mouseleave', () => {
		cardPreview.classList.remove('active')
	})
}
