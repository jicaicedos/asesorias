var menuList = document.getElementById('menu__list')
var menuIcon = document.getElementById('menu__icon')

menuIcon.addEventListener('click', function(e) {
	e.preventDefault()
	menuList.classList.toggle('visible')
})
