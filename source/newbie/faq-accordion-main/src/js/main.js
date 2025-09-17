import '../sass/main.scss'

const items = document.querySelectorAll('[data-itemFaq]')
const buttons = document.querySelectorAll('[data-buttonQuesion]')

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		items.forEach(item => {
			item.classList.remove('active')
		})

		const btnIsActive = btn.classList.contains('press')

		buttons.forEach(b => {
			b.classList.remove('press')
		})

		if (btnIsActive) return

		btn.classList.add('press')
		const clickedItem = btn.closest('[data-itemFaq]')
		clickedItem.classList.add('active')
	})
})
