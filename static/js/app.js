// from data.js
var tableData = data;

// YOUR CODE HERE!
function updateTable(someData) {
    someData.forEach((sighting) => {
        const ufoTable = d3.select("#ufo-table")
        const tableBody = ufoTable.select("tbody")
        const tableRow = tableBody.append("tr");
        for (key in sighting){
            const cell = tableBody.append("td");
            cell.text(sighting[key]);
        }
    
    })  
}
tableData.forEach((sighting) => {
    var ufoTable = d3.select("#ufo-table")
    var tableBody = ufoTable.select("tbody")
    tableBody.append("tr");
    for (key in sighting){
        const cell = tableBody.append("td");
        cell.text(sighting[key]);
    }

});

var filterButton = d3.select("#filter-btn")

// var inputDate = d3.select("#datetime")
// var inputValue = inputDate.property("value")
// var filteredData = tableData.filter(sight => sight.datetime === inputDate)
// console.log(filteredData)




filterButton.on("click", function() {
    d3.event.preventDefault()
    // console.log(inputDate)
    const inputDate = d3.select("#datetime").property("value")

    console.log(inputDate)
    // console.log(tableData.filter(sight => sight.datetime === inputDate))
    var filteredData = tableData.filter(sight => sight.datetime === inputDate)
    console.log(filteredData)
    var ufoTable = d3.select("#ufo-table")
    var tableBody = ufoTable.select("tbody")
    tableBody.html("")
    updateTable(filteredData)
})