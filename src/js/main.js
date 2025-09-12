import '../sass/main.scss'

const cardContent = document.getElementById('cardContent')
const buttonSubmit = document.querySelector('[data-button-submit]')
const buttons = document.querySelectorAll('[data-rating-btn]')

let currentRaiting = null

buttons.forEach(button => {
	button.addEventListener('click', () => {
		currentRaiting = Number(button.dataset.ratingBtn)

		buttons.forEach(otherButton => {
			if (otherButton !== button) {
				otherButton.classList.remove('card-raiting__stars-button--active')
			}

			button.classList.add('card-raiting__stars-button--active')
		})
	})
})

buttonSubmit.addEventListener('click', () => {
	if (!currentRaiting) {
		alert('Пожалуйста, выберите оценку!')
		return
	}

	cardContent.style.setProperty('align-items', 'center')
	cardContent.classList.add('card-thanks')

	cardContent.innerHTML = `
            <img
            class="card-thanks__image"
            src="./images/illustration-thank-you.svg"
            alt="Thank you illustration">
            <p class="card-thanks__raiting-text">
                You selected <span>${currentRaiting}</span> out of 5
            </p>
            <h2 class="card-thanks__title">Thank you!</h2>
            <p class="card-thanks__description card-description">
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
    `
})
