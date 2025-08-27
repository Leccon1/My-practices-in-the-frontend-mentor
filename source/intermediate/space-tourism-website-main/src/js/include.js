export function includeHTML(selector, url) {
	return fetch(url)
		.then(response => {
			if (!response.ok) throw new Error(`Cannot load ${url}`)
			return response.text()
		})
		.then(html => {
			const container = document.querySelector(selector)
			if (container) container.innerHTML = html
		})
}
