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
    itemlist.append("li")
    .text("text in added list")
}

function listremove2(params) {
    itemlist.remove("li")
}