var btn = document.getElementById('entry');

btn.addEventListener('click', EntryClick);

function EntryClick() {
	let reg = document.getElementsByClassName('reg-2');
	reg[0].classList.toggle('non');
}


var ElemP = document.getElementById('scroll');
var navBar = document.getElementById('nb');

/*ElemDiv[0].innerHTML = "<p>" + sum + "</p>";*/

ElemP.innerHTML = pageYOffset + 'px';

window.addEventListener('scroll', MyScroll);

function MyScroll() {
	ElemP.innerHTML = pageYOffset + 'px';
	if (pageYOffset > 70) {
		navBar.classList.add('nav-bar-dop');
}	else {
		navBar.classList.remove('nav-bar-dop');
}

};




