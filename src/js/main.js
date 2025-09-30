import '../sass/main.scss'

const productGallery = document.querySelector('.product__gallery')
const mainImagePage = productGallery.querySelector('[data-main-img]')
const thumbnailsPage = productGallery.querySelectorAll(
	'.gallery__thumbnails button'
)

// чтобы при открытии модального окна картина была такая же как и на странице
let currentImagesSrc = null

// Переключение миниатюр на странице
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

const modalGallery = document.querySelector('.gallery--modal')
const mainImageModal = modalGallery.querySelector('[data-main-img]')
const thumbnailsModal = modalGallery.querySelectorAll(
	'.gallery__thumbnails button'
)
const mainImgButton = document.querySelector('[data-main-img-button]')
const closeToModal = document.querySelector('[data-modal-closed-button]')
const modalWindow = document.querySelector('[data-modal]')

// Переключение миниатюр в модальном окне
thumbnailsModal.forEach(thumbnail => {
	thumbnail.addEventListener('click', () => {
		thumbnailsModal.forEach(t =>
			t.classList.remove('gallery__thumbnails-item--current')
		)
		thumbnail.classList.add('gallery__thumbnails-item--current')
		mainImageModal.src = thumbnail.dataset.mainImgSrc
	})
})

// Открытие модального окна
mainImgButton.addEventListener('click', () => {
	modalWindow.classList.add('modal--visible')

	mainImageModal.src = currentImagesSrc
})

// Закрытие модального окна
closeToModal.addEventListener('click', () => {
	modalWindow.classList.remove('modal--visible')
})

const plusBtn = document.querySelector('[data-mount-plus]')
const minusBtn = document.querySelector('[data-mount-minus]')
const mountValue = document.querySelector('[data-mount-value]')

let mountCounter = 0

plusBtn.addEventListener('click', () => {
	mountCounter += 1
	mountValue.textContent = mountCounter
})

minusBtn.addEventListener('click', () => {
	if (mountCounter > 0) {
		mountCounter -= 1
		mountValue.textContent = mountCounter
	}
})

const addToCartButton = document.querySelector('[data-add-cart]')
const cartBtn = document.querySelector('.cart-icon')
const cart = document.querySelector('.cart-dropdown')

// Элементы, при клике на которые корзина не закрывается
const exceptions = ['.cart-icon', '.cart-dropdown', '.product__add']

// Открытие и закрытие корзинки при клике на кнопку
cartBtn.addEventListener('click', e => {
	e.stopPropagation()
	toggleCart()
})

// Закрытие корзины при клике вне неё
document.addEventListener('click', e => {
	const isException = exceptions.some(sel => e.target.closest(sel))
	if (!isException) {
		cart.classList.remove('cart-dropdown--visible')
	}
})

// Добавление товара в корзину
addToCartButton.addEventListener('click', () => {
	if (mountCounter > 0) {
		addToCart()
	}
})

// Добавление товара в корзину (логикаDDDDD)
function addToCart() {
	cart.classList.add('cart-dropdown--visible')
	const dropdownContent = cart.querySelector('.cart-dropdown__content')

	const existingProduct = dropdownContent.querySelector(
		'.cart-dropdown__product'
	)

	if (existingProduct) {
		// Обновление количества и суммы, если товар уже в корзине
		const qtyEl = existingProduct.querySelector('.cart-product__price-example')
		const sumEl = existingProduct.querySelector('.cart-product__price-sum')

		qtyEl.textContent = `$125.00 x ${mountCounter}`
		sumEl.textContent = `$${125 * mountCounter}.00`
	} else {
		// Создание нового блока товара
		const productHTML = `
      <div class="cart-dropdown__product">
        <img class="cart-product__img" src="./src/assets/images/image-product-1-thumbnail.jpg" alt="product image">
        <div class="cart-product__info">
          <h3 class="cart-product__name">Fall Limited Edition Sneakers</h3>
          <div class="cart-product__price">
            <span class="cart-product__price-example">$125.00 x ${mountCounter}</span>
            <span class="cart-product__price-sum">$${
							125 * mountCounter
						}.00</span>
          </div>
        </div>
        <button class="cart-product__delete-btn">
          <img src="./src/assets/images/icon-delete.svg" alt="delete button">
        </button>
      </div>
    `

		dropdownContent.insertAdjacentHTML('beforeend', productHTML)
	}
}

// видно не видно корзину
function toggleCart() {
	cart.classList.toggle('cart-dropdown--visible')
}
