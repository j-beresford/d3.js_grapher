function change1(){
    let p = d3.select(".main-para")
    p.text("New Text")
}   

function change2(){
    d3.selectAll("p").text("para 2 new text")
}

function change3(){
    d3.select("p").html("<b>test</b> normal")
}

function change4(){
    d3.select("p").text("<b>test</b> normal")
}

let itemlist = d3.select("#itemlist")

function count(){
    return itemlist.selectAll("li")
     .size()
}

function listadd1() {
    let c = count()+1
    itemlist.append("li")
    .text("text added "+c)
}

function listremove2(params) {
    itemlist.select("li:last-child").remove()
}

function listremoveall3(params) {
    itemlist.selectAll("li").remove()
}

function changepic(imgName) {
    d3.select("#animal")
        .attr("src",imgName)
}

function changecol(){
    let color = d3.select("h5").style("color")
    if(color==='red') {
        d3.select("h5").style('color','red')
    } else {
        d3.select("h5").style('color','blue')     
    }
}