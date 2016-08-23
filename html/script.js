var fill = d3.scale.category20();


d3.csv("data.csv", function (data) {
    data.forEach(function (d) {
        d.size = +d.size;
    });

    d3.layout.cloud().size([1000, 500])
        .words(data)
        .padding(5)
        .rotate(function () {
            return Math.floor((Math.random() * 60) + 1);
        })
        .font("Impact")
        .fontSize(function (d) {
            return d.size;
        })
        .on("end", draw)
        .start();

    function draw(words) {
        d3.select(".SkillCloud").append("svg")
            .attr("width", window.innerWidth)
            .attr("height", (window.innerHeight/2))
            .append("g")
            .attr("transform", "translate(" + (window.innerWidth) / 3 + ",240)")
            .selectAll("text")
            .data(data)
            .enter().append("text")
            .style("font-size", function (d) {
                return d.size + "px";
            })
            .style("fill", function (d, i) {
                return fill(i);
            })
            .attr("text-anchor", "middle")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) {
                return d.text;
            });
    }
});


















