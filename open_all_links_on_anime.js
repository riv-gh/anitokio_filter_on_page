Array.from(document.querySelectorAll('.download-line-button-list>li:nth-child(1)>a')).map(a=>a.href).forEach(link=>{window.open(link)})
