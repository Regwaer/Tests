
const NextElement = document.getElementById('Next')

NextElement.onclick = function () {
    localStorage.setItem('flexRadioDefault1',document.getElementById("flexRadioDefault1").checked)
    localStorage.setItem('flexRadioDefault2',document.getElementById("flexRadioDefault2").checked)
    localStorage.setItem('flexRadioDefault3',document.getElementById("flexRadioDefault3").checked)
    localStorage.setItem('flexRadioDefault4',document.getElementById("flexRadioDefault4").checked)
    localStorage.setItem('flexRadioDefault5',document.getElementById("flexRadioDefault5").checked)
    // let json = JSON.stringify(users);
    // sessionStorage.setItem('flexRadioDefault1', json);
    //AssignValue()
     window.location.href = 'List3.html'
    // return false;
    //GridElement.style.background = "rgb(255, 0, 0)";
    //document.getElementById('2') .setAttribute('class', 'table-active')

}

setTimeout(function() {
    localStorage.setItem('flexRadioDefault1',document.getElementById("flexRadioDefault1").checked)
    localStorage.setItem('flexRadioDefault2',document.getElementById("flexRadioDefault2").checked)
    localStorage.setItem('flexRadioDefault3',document.getElementById("flexRadioDefault3").checked)
    localStorage.setItem('flexRadioDefault4',document.getElementById("flexRadioDefault4").checked)
    localStorage.setItem('flexRadioDefault5',document.getElementById("flexRadioDefault5").checked)

    window.location.href = 'List3.html'
},30000) //функция вызова через определённое время 30000 = 30 секунды


