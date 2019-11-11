function ativalupa (){
	if (document.querySelector('.headermenu-bisp-buscaInput').style.display == 'none'){  
	document.querySelector('.headermenu-bisp-buscaInput').style.display = 'flex';
	document.querySelector('.headermenu-bisp-busca').style.border = '0.5px solid #fff';
	} else {
		document.querySelector('.headermenu-bisp-buscaInput').style.display = 'none';
		document.querySelector('.headermenu-bisp-busca').style.border = 'none'
	}
}
