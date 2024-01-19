
const NextElement = document.getElementById('Next')
const BtmDanger = document.getElementById('danger')
const p1 = document.getElementById('p1')

NextElement.onclick = function () {
    localStorage.setItem('L3p1',document.getElementById('p1').innerHTML)
     window.location.href = 'List4.html'
}

BtmDanger.onclick = function () {
    p1.innerHTML = p1.innerHTML.split(`<span class="d-inline text-bg-warning">`).join("")
}

p1.onmouseup = function () {
    p1.innerHTML = p1.innerHTML.replace(get_selected_text(),`<span class="d-inline text-bg-warning">${get_selected_text()}</span>`)
}


function get_selected_text() {
    if (window.getSelection()) {
        var select = window.getSelection()
        return select.toString()
    }
}

setTimeout(function() {
    localStorage.setItem('L3p1',document.getElementById('p1').innerHTML)


    window.location.href = 'List4.html'
},130000) //функция вызова через определённое время 130000 = 130 секунды

