const Alpine = window.Alpine

function data() {
	return {
		//on init: call async function to get blog object from yaml
		init() {
			load_yaml().then((blog) => {
				this.blog = blog
				this.pages = paginate(blog.posts, blog.options.items_per_page)
			})
		},
		//empty object to use until async function is finished
		blog: {},
		pages: [
			[
				{
				display_dat: "loading...",
				true_date: new Date().getTime(),
				content: ""
				}
			]
		],
		current: 0
	}
}