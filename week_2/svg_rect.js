let container = d3.select("#container")

d3.csv("data.csv").then(ShowData)

function ShowData(clients){
    
    let max=d3.max(clients, d=> d.height)

    let widthScale = d3.scaleLinear()
        .range([0,300])
        .domain([0, max])
    
    let positionScale = d3.scaleBand()
        .range([0,200])
        .domain(clients.map(d=>d.name))
        .padding(0.1)


    let join = container
        .selectAll("rect")
        .data(clients)
    
    join.enter()
    .append("rect")
    .attr("fill","blue")
    .attr("width",d=>widthScale(d.height))
    .attr("height", positionScale.bandwidth())
    .attr("y",d=>positionScale(d.name))

    }

