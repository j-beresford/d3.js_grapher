let container = d3.select("#container")

d3.csv("data.csv").then(function(data){
    data.sort((a,b)=>{
        return d3.descending(a.name,b.name)
    })
    let filteredData = data.filter(d => {
        return d.age>20
    })
    showData(filteredData)
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

/// Transforming data: map and reduce (like mutate and summarise)

const KG_PER_POUND = 1
const METER_PER_INCH = 1

d3.csv("data.csv").then(dataLoaded)

function dataLoaded(clients){
    write("---------")
    showData(clients)
    let sum = clients.reduce(
        (prev,curr)=>{
            prev, curr.height
        },0)
    let mean =sum/clients.length
    write("Mean: "+ mean)
    write("-------")
    let weightSum=d3.sum(clients,
        (d)=>d.height)
    write("Sum: "+weightSum)

    let weightMean=d3.mean(clients,
        (d)=>d.height)
    write("Mean: "+weightMean)

    let weightExt=d3.extent(clients,
        (d)=>d.height)
    write("Extent: "+weightExt)
}
