var fill = d3.scale.category20();



d3.csv("data.csv", function(data) {
    data.forEach(function(d) {
        d.size = +d.size;
    });

    d3.layout.cloud().size([window.innerWidth, 600])
        .words(data)
        .padding(5)
        .rotate(function() { return ~~(Math.random() * Math.random()*2) * Math.random()*100; })
        .font("Impact")
        .fontSize(function(d) { return Math.max(1, Math.min(d.size, 1000)); })
        .on("end", draw)
        .start();

    function draw(words) {
        d3.select(".SkillCloud").append("svg")
            .attr("width", window.innerWidth)
            .attr("height", 600)
            .append("g")
            .attr("transform", "translate(500,300)")
            .selectAll("text")
            .data(data)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }
});












