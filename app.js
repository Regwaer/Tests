

document.getElementById('tableFilterCountryCode').addEventListener('keyup', function() {
    // Get the value from the input field
    let filter = this.value.toLowerCase();
    // Get the table body and rows
    let tableBody = document.getElementById('tableBody');
    let rows = tableBody.getElementsByTagName('tr');
    
    // Loop through all table rows
    for (let i = 0; i < rows.length; i++) {
        // Get the first cell in the row (the 'Name' column)
        let nameCell = rows[i].getElementsByTagName('td')[0]
        
        // Check if the cell exists and compares the value
        if (nameCell) {
            let textValue = nameCell.textContent || nameCell.innerText;
            // Toggle the visibility based on the filter
            rows[i].style.display = textValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none'
        }
    }

   
})


document.getElementById('tableFilterCountries').addEventListener('keyup', function() {
    // Get the value from the input field
    let filter = this.value.toLowerCase();
    // Get the table body and rows
    let tableBody = document.getElementById('tableBody');
    let rows = tableBody.getElementsByTagName('tr');
    
    // Loop through all table rows
    for (let i = 0; i < rows.length; i++) {
        // Get the first cell in the row (the 'Name' column)
        let nameCell = rows[i].getElementsByTagName('td')[1]
        
        // Check if the cell exists and compares the value
        if (nameCell) {
            let textValue = nameCell.textContent || nameCell.innerText;
            // Toggle the visibility based on the filter
            rows[i].style.display = textValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none'
        }
    }

   
})


document.getElementById('tableFilterFormat').addEventListener('keyup', function() {
    // Get the value from the input field
    let filter = this.value.toLowerCase();
    // Get the table body and rows
    let tableBody = document.getElementById('tableBody');
    let rows = tableBody.getElementsByTagName('tr');
    
    // Loop through all table rows
    for (let i = 0; i < rows.length; i++) {
        // Get the first cell in the row (the 'Name' column)
        let nameCell = rows[i].getElementsByTagName('td')[3]
        
        // Check if the cell exists and compares the value
        if (nameCell) {
            let textValue = nameCell.textContent || nameCell.innerText;
            // Toggle the visibility based on the filter
            rows[i].style.display = textValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none'
        }
    }

   
})