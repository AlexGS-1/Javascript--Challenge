// from data.js
var tableData = data;

// YOUR CODE HERE!

// First Build Table
const tbody = d3.select("tbody");

buildTable(tableData);

function buildTable(ufo_data) {
    tbody.html("");
    ufo_data.forEach((entry)=>{
        var table_row = tbody.append("tr");
        
        Object.values(entry).forEach((ufo_registry)=>{
            var cell = table_row.append("td");
                cell.text(ufo_registry);
        });
    });

}

// On Click Event

var button_html = d3.selectAll("#filter-btn");

button_html.on("click", click_action);

function click_action() {
    var date_element = d3.select("#datetime").property("value");
    
    var filtered_tableData = tableData.filter(obj => obj.datetime === date_element);
    
    if(typeof filtered_tableData === undefined || filtered_tableData === null){
        var filtered_tableData = tableData;
    }

    buildTable(filtered_tableData);
  
}
