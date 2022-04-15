let container = d3.select("#container")

d3.csv("data.csv").then(showData)

function write(text){
    container.append("div").text(text)
}

function showData(clients) {

    let max=d3.max(clients,
        d=>d.age)

    let scale = d3.scaleSqrt()
        .range([0,100])
        .domain([0,max])

    let join = container.select("div").data(clients)

    join.enter()
        .append("div")
        .text(d => d.name +": "+ d.age +" years old")
        .style("background-color","blue")
        .style("margin","10px")
        .style("color","white")
        .style("width",d=>scale(d.age)+"%")
}


d3.csv("data.csv").then(showGraph)

function showGraph(clients) {

    let join = container
        .select("rect")
        .data(clients)

    join.enter()
        .append("rect")
        .attr("fill","red")
        .text("test ")
        .attr("width",500)
        .attr("height",500)

}
