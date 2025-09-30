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

//  Счетчик
const plusBtn = document.querySelector('[data-mount-plus]')
const minusBtn = document.querySelector('[data-mount-minus]')
const mountValue = document.querySelector('[data-mount-value ]')

let mountCounter = 0

plusBtn.addEventListener('click', () => {
	mountCounter += 1
	mountValue.textContent = mountCounter.toString()
})
minusBtn.addEventListener('click', () => {
	if (mountCounter > 0) {
		mountCounter -= 1
		mountValue.textContent = mountCounter.toString()
	}
})

const addToCartButton = document.querySelector('[data-add-cart]')
const cartBtn = document.querySelector('.cart-icon')
const cart = document.querySelector('.cart-dropdown')

const exceptions = ['.cart-icon', '.cart-dropdown', '.product__add']

// закрыть корзину при клике вне ней
cartBtn.addEventListener('click', e => {
	e.stopPropagation()
	cart.classList.toggle('cart-dropdown--visible')
})

// при клике на определенные элементы не закрывать корзину
document.addEventListener('click', e => {
	const isException = exceptions.some(sel => e.target.closest(sel))
	if (!isException) {
		cart.classList.remove('cart-dropdown--visible')
	}
})

addToCartButton.addEventListener('click', () => {
	if (mountCounter > 0) {
		addToCart()
	}
})

function addToCart() {
	cart.classList.add('cart-dropdown--visible')
	const dropdownContent = cart.querySelector('.cart-dropdown__content')

	let existingProduct = dropdownContent.querySelector('.cart-dropdown__product')

	if (existingProduct) {
		const qtyEl = existingProduct.querySelector('.cart-product__price-example')
		const sumEl = existingProduct.querySelector('.cart-product__price-sum')

		qtyEl.textContent = `$125.00 x ${mountCounter}`
		sumEl.textContent = `$${125 * mountCounter}.00`
	} else {
		const product = `
			<div class="cart-dropdown__product">
				<img class="cart-product__img" src="./src/assets/images/image-product-1-thumbnail.jpg">
				<div class="cart-product__info">
					<h3 class="cart-product__name">Fall Limited Edition Sneakers</h3>
					<div class="cart-product__price">
						<span class="cart-product__price-example">$125.00 x ${mountCounter}</span>
						<span class="cart-product__price-sum">$${125 * mountCounter}.00</span>
					</div>
				</div>
				<button class="cart-product__delete-btn">
					<img src="./src/assets/images/icon-delete.svg" alt="delete button">
				</button>
			</div>
		`

		dropdownContent.insertAdjacentHTML('beforeend', product)
	}
}
