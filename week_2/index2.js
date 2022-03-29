let container = d3.select("#container")

d3.csv("data.csv").then(function(data){
    data.sort((a,b)=>{
        return d3.ascending(a.name,b.name)
    })
    let filteredData = data.filter(d=>{
        return d.age<60
    })
    showData(data)
})

function showData(clients){
    for (let client of clients){
        write(client.name+","+client.age+","+client.height)
    }
}


function write(text) {
    container.append("div")
    .text(text)
}
