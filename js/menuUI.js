var menuList = document.getElementById('menu__list')
var menuIcon = document.getElementById('menu__hamburguesa')

menuIcon.addEventListener('click', function(e) {
	e.preventDefault()
	menuList.classList.toggle('visible')
})
