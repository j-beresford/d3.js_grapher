let body = d3.select("#body")

d3.csv("data.csv").then(showChart)

function showChart(clients) {
    let max = d3.max(clients, d=>d.height)

    let scale = d3.scaleLinear()
        .range([0,250])
        .domain([0,max])

    let scalePosition = d3.scaleBand()
        .range([0,300])
        .domain(clients.map(d=>d.name))
        .padding(0.3)

    let join = body.selectAll("rect")
        .data(clients)

    join.enter()
        .append("rect")
        .style("fill","blue")
        .style("stroke","white")
        .style("width",d=>scale(d.height))
        .style("height",scalePosition.bandwidth())
        .style("y",d=>scalePosition(d.name))
    
    let xAxis = d3.axisBottom(scale)
        .ticks(5)
        .tickFormat(d=>d+"cm")


    d3.select("#xAxis")
        .attr("transform","translate(50,300)")
        .call(xAxis)

    let yAxis = d3.axisLeft(scalePosition)

    d3.select("#yAxis")
        .attr("transform","translate(50,0)")
        .call(yAxis)

    }
