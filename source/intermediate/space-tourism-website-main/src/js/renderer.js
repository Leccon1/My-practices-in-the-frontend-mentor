export function renderContent({ dataItem, selectors }) {
	const { descEl, imageEl, extraEls, nameEl, roleEl = {} } = selectors

	if (!nameEl || !descEl || !imageEl) {
		console.warn('Some elements not found')
		return
	}

	nameEl.textContent = dataItem.name
	descEl.textContent = dataItem.description
	roleEl.textContent = dataItem.role

	if (imageEl && dataItem.images) {
		imageEl.src = dataItem.images.png || dataItem.images.portrait || ''
	}

	for (const key in extraEls) {
		if (dataItem[key] !== undefined) {
			extraEls[key].textContent = dataItem[key]
		}
	}
}
