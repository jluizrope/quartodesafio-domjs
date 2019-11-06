function handleSearch (){
	if (document.querySelector('.buscaInput').style.display == 'none'){  
	document.querySelector('.buscaInput').style.display = 'flex';
	document.querySelector('headermenu-busca').style.border = '0.5px solid #fff';
	} else {
		document.querySelector('.buscaInput').style.display = 'none';
		document.querySelector('headermenu-busca').style.border = 'none'
	}
}
