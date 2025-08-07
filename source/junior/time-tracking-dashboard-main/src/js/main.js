import '../styles/sass/main.scss'

const buttons = document.querySelectorAll('.profile__button')
const currentHours = document.querySelectorAll('.card__hours')
const previousHours = document.querySelectorAll('.card__previous-value')

let data = []

fetch('../../public/data/data.json')
	.then(res => res.json())
	.then(json => {
		data = json
		updateData('daily', data)

		buttons.forEach(btn => {
			btn.addEventListener('click', () => {
				buttons.forEach(b => b.classList.remove('profile__button--active'))
				btn.classList.add('profile__button--active')

				const type = btn.id
				updateData(type, data)
			})
		})
	})

function updateData(type, data) {
	data.forEach((item, index) => {
		currentHours[index].textContent = item.timeframes[type].current + 'hrs'
		previousHours[index].textContent = item.timeframes[type].previous + 'hrs'
	})
}
console.log(data)

/* 
const dailyBtn = document.getElementById('daily')
const weeklyBtn = document.getElementById('weekly')
const monthlyBtn = document.getElementById('monthly')

dailyBtn.addEventListener('click', () => {
	dailyBtn.classList.add('profile__button--active')
	weeklyBtn.classList.remove('profile__button--active')
	monthlyBtn.classList.remove('profile__button--active')
})

weeklyBtn.addEventListener('click', () => {
	weeklyBtn.classList.add('profile__button--active')
	dailyBtn.classList.remove('profile__button--active')
	monthlyBtn.classList.remove('profile__button--active')
})

monthlyBtn.addEventListener('click', () => {
	monthlyBtn.classList.add('profile__button--active')
	weeklyBtn.classList.remove('profile__button--active')
	dailyBtn.classList.remove('profile__button--active')
})
 */
