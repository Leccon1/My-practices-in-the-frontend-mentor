import '../sass/main.scss'

const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
	e.preventDefault()

	const errors = document.querySelectorAll('.error__label')
	for (let i = 0; i < errors.length; i++) {
		errors[i].classList.remove('active')
	}

	let valid = true

	const firstName = document.getElementById('first-name')
	if (firstName.value.trim() === '') {
		const error = firstName.parentElement.querySelector('.error__label')
		error.classList.add('active')
		valid = false
	}

	const lastName = document.getElementById('last-name')
	if (lastName.value.trim() === '') {
		const error = lastName.parentElement.querySelector('.error__label')
		error.classList.add('active')
		valid = false
	}

	const email = document.getElementById('email')
	if (email.value.trim() === '' || !email.value.includes('@')) {
		const error = email.parentElement.querySelector('.error__label')
		error.classList.add('active')
		valid = false
	}

	const message = document.getElementById('message')
	if (message.value.trim() === '') {
		const error = message.parentElement.querySelector('.error__label')
		error.classList.add('active')
		valid = false
	}

	const type1 = document.getElementById('type-1')
	const type2 = document.getElementById('type-2')
	if (!type1.checked && !type2.checked) {
		const error = document.querySelector('.form__type > .error__label')
		error.classList.add('active')
		valid = false
	}

	const agreement = document.getElementById('agreement')
	if (!agreement.checked) {
		const error = document.querySelector('label[for="agreement"].error__label')
		error.classList.add('active')
		valid = false
	}

	if (!valid) return

	const formSuccess = document.querySelector('[data-form-succes]')
	formSuccess.classList.add('active')

	setTimeout(() => {
		formSuccess.classList.remove('active')
	}, 3000)

	const formData = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		type: type1.checked ? 'General Enquiry' : 'Support Required',
		message: message.value,
		agreement: agreement.checked,
	}

	console.log('Form submitted:', formData)

	form.reset()
})
