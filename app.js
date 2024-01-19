//11
const NextElement = document.getElementById('Next')

NextElement.onclick = function () {
    localStorage.setItem('title',document.getElementById('title').value)
    localStorage.setItem('title1',document.getElementById('title1').value)
    localStorage.setItem('title2',document.getElementById('title2').value)
    
    window.location.href = 'List1.html'
    return false;
   

}

