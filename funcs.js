const yaml = window.jsyaml

async function load_yaml() {
	try {
		const response = await fetch('blog.yaml')
		const body = await response.text()
		return await yaml.load(body)
	}
	catch (e) {
		console.error(e.toString())
		document.body.innerText = "something went wrong parsing blog.yaml. check your browser's developer console"
	}
}

function is_new(post, days) {
	const time = Date.now()
	return (to_days(time) - to_days(post.true_date) < days)

	function to_days(date) {
		return date / 1000 / 60 / 60 / 24
	}
}

function paginate(posts, items_per_page) {
	let pages = []
	let p = 0
	for (let i = 0; i < posts.length; p++)
		pages[p] = posts.slice(i, i += items_per_page)
	return pages
}