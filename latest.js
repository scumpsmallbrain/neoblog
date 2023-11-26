const Alpine = window.Alpine

function data() {
	return {
		init() {
			load_yaml().then((blog) => {this.post = blog.posts[0]; this.days_till = blog.options.days_till_new_is_old})
		},
		post: {
			display_dat: "loading...",
			true_date: new Date().getTime(),
			content: ""
		},
		days_till: 30
	}
}