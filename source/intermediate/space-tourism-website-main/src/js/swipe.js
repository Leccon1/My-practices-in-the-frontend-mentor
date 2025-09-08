export function initSwipeListener(onSwipeLeft, onSwipeRight) {
	const swipeThreshold = 8

	const heroContent = document.querySelector('.hero__content')

	function handleSwipeLeft() {
		onSwipeLeft()
	}

	function handleSwipeRight() {
		onSwipeRight()
	}

	heroContent.addEventListener('touchstart', e => {
		const startX = e.touches[0].clientX
		const startY = e.touches[0].clientY

		heroContent.addEventListener(
			'touchmove',
			e => {
				const endX = e.touches[0].clientX
				const endY = e.touches[0].clientY

				const deltaX = endX - startX
				const deltaY = endY - startY

				if (
					Math.abs(deltaX) > swipeThreshold &&
					Math.abs(deltaY) < swipeThreshold
				) {
					if (deltaX > 0) {
						handleSwipeRight()
					} else {
						handleSwipeLeft()
					}
				}
			},
			{ once: true }
		)
	})

	document.addEventListener('keydown', e => {
		switch (e.key) {
			case 'ArrowLeft':
				handleSwipeLeft()
				break
			case 'ArrowRight':
				handleSwipeRight()
				break
		}
	})
}
