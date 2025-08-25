import '../style/sass/main.scss'

// Элементы
const billInput = document.getElementById('bill')
const peopleInput = document.getElementById('people')
const tipButtons = document.querySelectorAll('.calculator__tip-button')
const customTipInput = document.querySelector('[data-tip="custom"]')
const tipAmount = document.querySelector('.result__tip-amount')
const totalAmount = document.querySelector('.result__total-amount')
const resetButton = document.querySelector('.result__reset')
const errorLabel = document.querySelector('.calculator__people-error')

// Значения
let bill = 0
let people = 0
let tip = 0
let errorShown = false

// Обновить всё
function updateResult() {
	if (people <= 0) {
		showError()
		resetButtonState(false)
		return
	}

	hideError()

	if (bill > 0 && tip >= 0 && people > 0) {
		const tipValue = (bill * tip) / 100 / people
		const totalValue = bill / people + tipValue

		tipAmount.textContent = `$${tipValue.toFixed(2)}`
		totalAmount.textContent = `$${totalValue.toFixed(2)}`
		resetButtonState(true)
	} else {
		tipAmount.textContent = `$0.00`
		totalAmount.textContent = `$0.00`
		resetButtonState(false)
	}
}

// Ошибка
function showError() {
	errorLabel.style.opacity = '1'
	peopleInput.classList.add('calculator__people-input--error')
	errorShown = true
}

function hideError() {
	errorLabel.style.opacity = '0'
	peopleInput.classList.remove('calculator__people-input--error')
	errorShown = false
}

// Кнопка Reset
function resetButtonState(state) {
	resetButton.disabled = !state
	resetButton.classList.toggle('completed', state)
}

// Reset
resetButton.addEventListener('click', () => {
	billInput.value = ''
	peopleInput.value = ''
	customTipInput.value = ''
	tipButtons.forEach(btn => btn.classList.remove('completed'))

	bill = 0
	people = 0
	tip = 0
	updateResult()
})

// Слушатели
billInput.addEventListener('input', () => {
	bill = parseFloat(billInput.value) || 0
	updateResult()
})

peopleInput.addEventListener('input', () => {
	people = parseInt(peopleInput.value) || 0
	updateResult()
})

tipButtons.forEach(button => {
	button.addEventListener('click', () => {
		tipButtons.forEach(btn => btn.classList.remove('completed'))
		button.classList.add('completed')
		tip = parseFloat(button.dataset.tip)
		customTipInput.value = ''
		updateResult()
	})
})

customTipInput.addEventListener('input', () => {
	tipButtons.forEach(btn => btn.classList.remove('completed'))
	tip = parseFloat(customTipInput.value) || 0
	updateResult()
})
