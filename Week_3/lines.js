let innerBody = d3.select("#innerBody")

d3.csv("data.csv").then(showData)


function showData(data) {


    let bodyHeight = 200
    let bodyWidth = 400

    let maxValue = d3.max(data, d => d.price)

    let dates = d3.timeParse("%Y-%m-%d")

    let yScale = d3.scaleLinear()
        .range([bodyHeight,0])
        .domain([0,maxValue])

    innerBody
        .append("g")
        .call(d3.axisLeft(yScale))


    let xScale = d3.scaleTime()
        .domain(d3.extent(data, d=>d.date))
        .range([0,bodyWidth])

    innerBody.append("g")
        .attr("transform","translate(0,200)")
        .call(d3.axisBottom(xScale))


    valueline = d3.line()
        .x(d=>xScale(d.date))
        .y(d=>yScale(d.price))
        .defined(d=>!!d.price)

    innerBody.append("path")
        .datum(data)
        .attr("d",valueline)
        .attr("class","line")

    }
