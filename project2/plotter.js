let width = 900;
let height = 500;
let currWeek = "week1";

let divNames = [
  "NFC West",
  "NFC South",
  "NFC East",
  "NFC North",
  "AFC South",
  "AFC East",
  "AFC North",
  "AFC West",
];

let mapLayer;
let cityLayer;
let mapSvg = d3
  .select("body")
  .attr("class", "mapSVG")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let mapDiv = d3
  .select("body")
  .append("div")
  .attr("class", "divClass")
  .style("opacity", 0);
const loadStates = () => {
  let mapProjection = d3.geo
    .albersUsa()
    .translate([width / 2, height / 2])
    .scale([1050]);

  let mapPath = d3.geo.path().projection(mapProjection);

  mapLayer = mapSvg.append("g").attr("id", "usa_map");
  cityLayer = mapSvg.append("g").attr("id", "cities");

  let color = d3.scale
    .linear()
    .range([
      "#BB11F0",
      "#F0116C",
      "#F7F924",
      "#82F924",
      "#212F3D",
      "#6E2C00",
      "#1B4F72",
      "#2ECC71",
    ]);

  let dataPoints = getDataPoints();

  d3.csv("./states.csv", (data) => {
    color.domain([0, 1, 2, 3, 4, 5, 6, 7]);
    d3.json("./mapStates.json", (json) => {
      for (var i = 0; i < data.length; i++) {
        let dataState = data[i].state;
        let dataValue = data[i].visited;

        let dataLength = json.features.length;

        for (var j = 0; j < dataLength; j++) {
          var jsonState = json.features[j].properties.name;

          if (dataState == jsonState) {
            json.features[j].properties.visited = dataValue;

            break;
          }
        }
      }
      mapLayer
        .selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", mapPath)
        .style("stroke", "#fff")
        .style("stroke-width", "1")
        .style("fill", "rgb(69,173,168)")
        .classed("svgStyle");
    });
    cityLayer
      .selectAll("circle")
      .data(dataPoints)
      .enter()
      .append("circle")
      .attr("id", (d) => d.name)
      .attr("cx", function (d) {
        return mapProjection([d.lng, d.lat])[0];
      })
      .attr("cy", function (d) {
        return mapProjection([d.lng, d.lat])[1];
      })
      .attr("r", function (d) {
        return Math.sqrt(d.radius) * 2 || 1;
      })
      .style("fill", (d) => d.color)
      .style("opacity", 0.9)
      .on("mouseover", function (d) {
        mapDiv.transition().duration(200).style("opacity", 0.9);
        mapDiv
          .text(d.name)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px");
      })

      .on("mouseout", function (d) {
        mapDiv.transition().duration(500).style("opacity", 0);
      });

    let subDivsContent = d3
      .select("body")
      .append("svg")
      .attr("class", "subDivStyle")
      .attr("width", 140)
      .attr("height", 200)
      .selectAll("g")
      .data(color.domain())
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return "translate(0," + i * 20 + ")";
      });

    subDivsContent
      .append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

    subDivsContent
      .append("text")
      .data(divNames)
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .text(function (data) {
        return data;
      });
    console.log( document.getElementById('Minnesota Vikings').pageX )
  });
};

loadStates();
