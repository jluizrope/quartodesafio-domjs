function ativalupa (){
	if (document.querySelector('.headermenu-bisp-buscaInput').style.display == 'none'){  
	document.querySelector('.headermenu-bisp-buscaInput').style.display = 'flex';
	document.querySelector('.headermenu-bisp-busca').style.border = '0.5px solid #fff';
	} else {
		document.querySelector('.headermenu-bisp-buscaInput').style.display = 'none';
		document.querySelector('.headermenu-bisp-busca').style.border = 'none'
	}
}
function nextslides(){
	document.querySelector('.main-section-slides-films-ml-milis').style.display = 'none'
	document.querySelector('.main-section-slides-films-ml-milisback').style.display = 'flex'
}
function previouslides(){
	document.querySelector('.main-section-slides-films-ml-milisback').style.display = 'none'
	document.querySelector('.main-section-slides-films-ml-milis').style.display = 'flex'
}
