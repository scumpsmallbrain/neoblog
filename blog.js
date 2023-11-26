const Alpine = window.Alpine

function data() {
	return {
		//on init: call async function to get blog object from yaml
		init() {
			load_yaml().then((blog) => this.blog = blog)
		},
		//empty object to use until async function is finished
		blog: {
			options: {
				days_till_new_is_old: 30,
				items_per_page: 12
			},
			posts: [
				{
					display_dat: "loading...",
					true_date: new Date().getTime(),
					content: ""
				}
			]
		}
	}
}