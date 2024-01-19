const NextElement = document.getElementById('Next')
const BtmDanger = document.getElementById('danger')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')



BtmDanger.onclick = function () {
    p1.innerHTML = p1.innerHTML.split(`<span class="d-inline text-bg-warning">`).join("")
    p2.innerHTML = p2.innerHTML.split(`<span class="d-inline text-bg-warning">`).join("")
}



p1.onmouseup = function () {
    p1.innerHTML = p1.innerHTML.replace(get_selected_text(),`<span class="d-inline text-bg-warning">${get_selected_text()}</span>`)
}
p2.onmouseup = function () {
    p2.innerHTML = p2.innerHTML.replace(get_selected_text(),`<span class="d-inline text-bg-warning">${get_selected_text()}</span>`)
}

function get_selected_text() {
    if (window.getSelection()) {
        var select = window.getSelection()
        return select.toString()
    }
}

NextElement.onclick = function () {
    // window.location.href = 'index.html'
    localStorage.setItem('p1',document.getElementById('p1').innerHTML)
    localStorage.setItem('p2',document.getElementById('p2').innerHTML)
    
    window.location.href = 'List5.html'
   // <button onclick="location.href='result.html?'+txt1.value+'&'+txt2.value+'&'+txt3.value"> отправить в result.html </button>
}

// setTimeout(function() {
    // localStorage.setItem('p1',document.getElementById('p1').innerHTML)
    // localStorage.setItem('p2',document.getElementById('p2').innerHTML)
//     window.location.href = 'index.html'
// },130000) //функция вызова через определённое время 130000 = 130 секунды



