# neoblog - a dynamic miniblog template for static sites  
*v0.2 -- beta*

NEOBLOG is a javascript-enhanced version of the "miniblog" template i created for my neocities site, [scumpsmallbrain.neocities.org](https://scumpsmallbrain.neocities.org). it uses [Alpine.js](https://alpinejs.dev/) for simple reactivity with little javascript overhead.

## how 2 miniblog like me

miniblogs are a great way to post updates to your neocities page or other static site!

- the blog stays in its own self-contained folder
- posts are tiny and meant to fit within an iframe on your main site
- write posts in your own html

in the past, i did this by manually copying an html template to a static page for every post. this is an inefficient way of storing data and makes for a pain when trying to paginate.

with NEOBLOG, all post data is stored in an easy-to-read yaml file. your blog paginates automatically and posts from less than a certain number of days ago are automatically decorated with a little "new!" sticker.

## how 2 use

posts are stored in a yaml array. each post has 3 parameters:

- display date-&-time (whatever format you want)
- machine-readable date-&-time (YYYY-MM-DD)
	> note: the idea of having the displayed date & time separate from the actual one is to let users freely write their post dates in whatever format they want. i'm undecided though, on whether this is worth the extra step of writing all your date headers twice. let me know any feedback you might have on this :)
- the post content (any html)


```yaml
posts:
  - display_dat: 11/20/2023 7 PM ET
    true_date: 2023-11-20
    content: |
        <h1>A newer post!</h1>
        <p> Lorem ipsum . . . .
  - display_dat: 8/4/2023 4 PM ET
    true_date: 2023-08-04
    content: |
        <h1>A post!</h1>
        <p> Lorem ipsum . . . .
        <img src="pics/hello.png">
```

## files

only the files with a * have to be edited to customize your miniblog.

	graphix > new.gif   //"sticker" to be put on new posts
	*blog.yaml          //stores blog options and all posts
	*index.html         //template for viewing all posts
	*latest.html        //template for just the latest post
	*style.css          //styling for the blog
	latest.css          //just expands post on latest.html to fill whole frame
	blog.js             //populates index.html
	latest.js           //populates latest.html
	funcs.js            //parses yaml, calculates if a post is new

