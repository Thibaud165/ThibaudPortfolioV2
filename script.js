function setLang(lang) {
    document.getElementById('lang-fr').style.display = 'none';
    document.getElementById('lang-en').style.display = 'none';
    document.getElementById('lang-es').style.display = 'none';
    
    document.getElementById('lang-' + lang).style.display = 'block';
}