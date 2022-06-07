## Reproduction 

Reproduction of [this bug](https://github.com/gatsbyjs/gatsby/discussions/35656)

* Clone repo, install etc.
* `npm start`
* Go to index page
* Image bug appears

### Notes

See `pages/index` - all I did was render a StaticImage and remove it after 1ms so it hadn't loaded fully
