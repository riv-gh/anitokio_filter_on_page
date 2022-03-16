//           https://anitokyo.org/

/**************************************************/
/*               load all titles                  */
/**************************************************/

document.querySelectorAll('.navigation').forEach(navigation=>{navigation.style.display='none'})
const pages = +document.querySelector('.navi_link').lastChild.href.split('/').slice(-2,-1)[0]
const link_tpl = document.querySelector('.navi_link').lastChild.href.replace([]+pages,'${page}')
const getLink = (page, tpl = link_tpl) => {return eval('`'+link_tpl+'`')}

const content_el = document.getElementById('dle-content')
const insertBefore_el = content_el.lastChild
const insertBlock = (block_el) => {
	content_el.insertBefore(block_el, insertBefore_el)
}

let count = 2
for (let page=2; page<=pages; page++) {
	fetch(getLink(page)).then(function (response) {
		return response.text()
	}).then(function (html) {
		// console.log(html)
		const parser = new DOMParser()
		const htmlDocument = parser.parseFromString(html, "text/html")
		htmlDocument.querySelectorAll('#dle-content .story.shortstory').forEach(block=>{
			const clone_block = block.cloneNode(true)
			insertBlock(clone_block)
		})
		console.log(`Add page: ${page}\tCount: ${count++}/${pages} `)
	}).catch(function (err) {
		console.warn('Something went wrong.', err)
	});

}


/**************************************************/
/*               filter from all                  */
/**************************************************/
const filter_title = 'Жанр романтика'


content_el.childNodes.forEach(el=>{el.style.display='none'})

Array.apply(null, document.querySelectorAll('a'))
	.filter(a=>{
		return a.title === filter_title
	})
	.forEach(a=>{
		a.parentElement
		 .parentElement
		 .parentElement
		 .parentElement
		 .parentElement
		 .parentElement
		 .parentElement
		 .style.display = 'block'
	})
