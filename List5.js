let p1 = localStorage.getItem('p1')
let p2 = localStorage.getItem('p2')

let L3p1 = localStorage.getItem('L3p1')
let flexRadioDefault1 = localStorage.getItem('flexRadioDefault1')
let flexRadioDefault2 = localStorage.getItem('flexRadioDefault2')
let flexRadioDefault3 = localStorage.getItem('flexRadioDefault3')
let flexRadioDefault4 = localStorage.getItem('flexRadioDefault4')
let flexRadioDefault5 = localStorage.getItem('flexRadioDefault5')

let title = localStorage.getItem('title')
let title1 = localStorage.getItem('title1')
let title2 = localStorage.getItem('title2')

let p1itog = document.getElementById('p1')
let p2itog = document.getElementById('p2')

let L3p1itog = document.getElementById('L3p1')
let flexRadioDefault1itog = document.getElementById('flexRadioDefault1')
let flexRadioDefault2itog = document.getElementById('flexRadioDefault2')
let flexRadioDefault3itog = document.getElementById('flexRadioDefault3')
let flexRadioDefault4itog = document.getElementById('flexRadioDefault4')
let flexRadioDefault5itog = document.getElementById('flexRadioDefault5')

let titleitog = document.getElementById('title')
let title1itog = document.getElementById('title1')
let title2itog = document.getElementById('title2')



window.onload = function () {
    if(p1 == null){
        p1itog.innerHTML
    }
    else
    p1itog.innerHTML = p1

    if(p2 == null){
        p2itog.innerHTML
    }
    else
    p2itog.innerHTML = p2

    if(L3p1 == null){
        L3p1itog.innerHTML
    }
    else
    L3p1itog.innerHTML = L3p1



    if(flexRadioDefault1==='true'){
        flexRadioDefault1itog.checked = flexRadioDefault1
    }

    if(flexRadioDefault2==='true'){
        flexRadioDefault2itog.checked = flexRadioDefault2
    }

    if(flexRadioDefault3==='true'){
        flexRadioDefault3itog.checked = flexRadioDefault3
    }

    if(flexRadioDefault4==='true'){
        flexRadioDefault4itog.checked = flexRadioDefault4
    }
    
    if(flexRadioDefault5==='true'){
        flexRadioDefault5itog.checked = flexRadioDefault5
    }

    var content = localStorage.getItem('Grid')
    if (content !== undefined) {
      document.getElementById("Grid1").innerHTML = content
    }
   
    titleitog.innerHTML =  'ФИО:     ' +  title
    title1itog.innerHTML = 'Телефон: ' + title1
    title2itog.innerHTML = 'Дата:    ' + title2
}



const NextElement = document.getElementById('Next')
const documentElement = document.getElementById('invoice') 

// NextElement.onclick = function () {
//     //document.documentElement.innerHTML
//     // saveFile("file:///C:/Users/regwa/Downloads/Text.html", "filename")
//     //window.print()

//     // printDiv('content','3333')
//     generatePDF()

// }

// function generatePDF() {
//     //const element = document.getElementById('content');
//     html2pdf()
//         .from(documentElement)
//         .save();

// }


