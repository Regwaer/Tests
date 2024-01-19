
const NextElement = document.getElementById('Next')

NextElement.onclick = function () {
    localStorage.setItem('Grid',document.getElementById('Grid').innerHTML) 
    
    window.location.href = 'List2.html'
    // return false;
    //GridElement.style.background = "rgb(255, 0, 0)";
    //document.getElementById('2') .setAttribute('class', 'table-active')

}

var table = document.getElementsByTagName("table")[0];
var cells = table.getElementsByTagName("td"); // 

for(var i = 1; i < cells.length; i++){
    // Cell Object
    var cell = cells[i];
    // Track with onclick
    cell.onclick = function(){
        var cellIndex  = this.cellIndex + 1;  

        var rowIndex = this.parentNode.rowIndex + 1;
       
        table.rows[rowIndex-1].cells[cellIndex-1].setAttribute('class', 'table-active')
    }
}

setTimeout(function() {
   localStorage.setItem('Grid',document.getElementById('Grid').innerHTML) 
    window.location.href = 'List2.html'
},10000) //функция вызова через определённое время 130000 = 130 секунды
