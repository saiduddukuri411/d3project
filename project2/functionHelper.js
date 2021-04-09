let mapperData;
const builtData = () => {
  let arr = weekMatcher[currentWeek];
  mapperData = [];
  arr.map((data) => {
    let { source, target, sourceScore, targetScore } = data;
    let sourceName = positions[source],
      targetName = positions[target],
      sourceRadius = sourceScore,
      targetRadius = targetScore,
      sourceColor = `#${divisions[sourceName]}`,
      targetColor = `#${divisions[targetName]}`,
      [sourceLat, sourceLng] = geoLocations[sourceName],
      [targetLat, targetLng] = geoLocations[targetName];
    mapperData.push({
      name: sourceName,
      radius: sourceRadius,
      color: sourceColor,
      lat: sourceLat,
      lng: sourceLng,
    });
    mapperData.push({
      name: targetName,
      radius: targetRadius,
      color: targetColor,
      lat: targetLat,
      lng: targetLng,
    });
  });
  return mapperData;
};

const getDataPoints = () => {
  const points = [];
  console.log( weekMatcher );
  weekMatcher[`${currWeek}`].map(
    ({ source, target, sourceScore, targetScore }) => {
      let sourceName = positions[source],
        targetName = positions[target];
      let sourceColor = divisions[sourceName],
        targetColor = divisions[targetName];
      let [sourceLat, sourceLng] = geoLocations[sourceName];
      let [targetLat, targetLng] = geoLocations[targetName];

      points.push({
        name: sourceName,
        color: `#${sourceColor}`,
        lat: `${sourceLat}`,
        lng: `${sourceLng}`,
        radius: sourceScore,
      });
      points.push({
        name: targetName,
        color: `#${targetColor}`,
        lat: `${targetLat}`,
        lng: `${targetLng}`,
        radius: targetScore,
      });
    }
  );
  return points;
};

const weekChanger = (event) => {
  currWeek = event.target.value;
  mapLayer.remove();
  cityLayer.remove();
  // d3.select("svg").remove()
  // d3.select("div").remove()
  loadStates();
};
