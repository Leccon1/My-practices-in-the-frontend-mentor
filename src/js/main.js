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

plusBtn.addEventListener('click', () => {
	mountValue.textContent = Number(mountValue.textContent) + 1
})
minusBtn.addEventListener('click', () => {
	if (Number(mountValue.textContent) > 0) {
		mountValue.textContent = Number(mountValue.textContent) - 1
	}
})

const addToCartButton = document.querySelector('[data-add-cart]')
const cartBtn = document.querySelector('.cart-icon')
const cart = document.querySelector('.cart-dropdown')

const exceptions = ['.cart-icon', '.cart-dropdown']

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

function addToCart() {
	const product = (document.createElement = `
    <div class="cart-dropdown__product">
        <img src="./src/assets/images/image-product-1-thumbnail.jpg">
        <div class="product__info">
            <h3 class="product__name">Fall Limited Edition Sneakers</h3>
            <div class="product__price">
                <span class="product__price-new">$125.00</span>
                <span class="product__price-old">$250.00</span>
            </div>
        </div>
    </div>
    `)
	console.log(product)
}
