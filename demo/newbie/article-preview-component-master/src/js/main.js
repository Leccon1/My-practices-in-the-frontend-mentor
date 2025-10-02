const btnShare = document.querySelector('.card__author-share')
const cardPreview = document.querySelector('.card__preview')
/* const wrapper = document.getElementById('previewBlock') */
const author = document.getElementById('authorBlock')
const closeBtn = document.getElementById('btnClosePreview')

function togglePreview() {
	cardPreview.classList.toggle('active')
}

if (window.innerWidth <= 768) {
	btnShare.addEventListener('click', togglePreview)
	if (btnShare.classList.toString('active')) {
		btnShare.classList.remove('active')
	}
} else {
	btnShare.addEventListener('mouseenter', () => {
		cardPreview.classList.add('active')
	})
	btnShare.addEventListener('mouseleave', () => {
		cardPreview.classList.remove('active')
	})
}

btnShare.addEventListener('click', () => {
	if (window.innerWidth <= 768) {
		author.style.display = 'none'
		cardPreview.classList.add('active')
	}
})

closeBtn.addEventListener('click', () => {
	if (window.innerWidth <= 768) {
		cardPreview.classList.remove('active')
		author.style.display = 'flex'
	}
})
