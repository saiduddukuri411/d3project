let currentWeek = "week1";

const week1 = [
  { source: 18, target: 28, sourceScore: 20, targetScore: 34 },
  { source: 0, target: 7, sourceScore: 38, targetScore: 25 },
  { source: 26, target: 25, sourceScore: 6, targetScore: 38 },
  { source: 23, target: 20, sourceScore: 17, targetScore: 27 },
  { source: 29, target: 6, sourceScore: 34, targetScore: 30 },
  { source: 13, target: 15, sourceScore: 27, targetScore: 33 },
  { source: 17, target: 19, sourceScore: 20, targetScore: 27 },
  { source: 12, target: 14, sourceScore: 43, targetScore: 34 },
  { source: 21, target: 22, sourceScore: 11, targetScore: 21 },
  { source: 11, target: 8, sourceScore: 17, targetScore: 27 },
  { source: 30, target: 27, sourceScore: 16, targetScore: 13 },
  { source: 5, target: 4, sourceScore: 23, targetScore: 34 },
  { source: 2, target: 3, sourceScore: 24, targetScore: 20 },
  { source: 10, target: 1, sourceScore: 17, targetScore: 20 },
  { source: 24, target: 9, sourceScore: 26, targetScore: 16 },
  { source: 16, target: 31, sourceScore: 16, targetScore: 14 },
];

const divisions = {
  "Seattle Seahawks": "BB11F0", //0
  "Los Angeles Rams": "BB11F0", //1
  "Arizona Cardinals": "BB11F0", //2
  "San Francisco 49ers": "BB11F0", //3
  "New Orleans Saints": "F0116C", //4
  "Tampa Bay Buccaneers": "F0116C", //5
  "Carolina Panthers": "F0116C", //6
  "Atlanta Falcons": "F0116C", //7
  "Washington Football Team": "F7F924", //8
  "New York Giants": "F7F924", //9
  "Dallas Cowboys": "F7F924", //10
  "Philadelphia Eagles": "F7F924", //11
  "Green Bay Packers": "82F924", //12
  "Chicago Bears": "82F924", //13
  "Minnesota Vikings": "82F924", //14
  "Detroit Lions": "82F924", //15
  "Tennessee Titans": "212F3D", //16
  "Indianapolis Colts": "212F3D", //17
  "Houston Texans": "212F3D", //18
  "Jacksonville Jaguars": "212F3D", //19
  "Buffalo Bills": "6E2C00", //20
  "Miami Dolphins": "6E2C00", //21
  "New England Patriots": "6E2C00", //22
  "New York Jets": "6E2C00", //23
  "Pittsburgh Steelers": "1B4F72", //24
  "Baltimore Ravens": "1B4F72", //25
  "Cleveland Browns": "1B4F72", //26
  "Cincinnati Bengals": "1B4F72", //27
  "Kansas City Chiefs": "2ECC71", //28
  "Las Vegas Raiders": "2ECC71", //29
  "Los Angeles Chargers": "2ECC71", //30
  "Denver Broncos": "2ECC71", //31
};

const week2 = [
  { source: 27, target: 26, sourceScore: 30, targetScore: 35 },
  { source: 9, target: 13, sourceScore: 13, targetScore: 17 },
  { source: 7, target: 10, sourceScore: 39, targetScore: 40 },
  { source: 15, target: 12, sourceScore: 21, targetScore: 42 },
  { source: 14, target: 17, sourceScore: 11, targetScore: 28 },
  { source: 20, target: 21, sourceScore: 31, targetScore: 28 },
  { source: 3, target: 23, sourceScore: 31, targetScore: 13 },
  { source: 1, target: 11, sourceScore: 37, targetScore: 19 },
  { source: 31, target: 24, sourceScore: 21, targetScore: 26 },
  { source: 6, target: 5, sourceScore: 17, targetScore: 31 },
  { source: 19, target: 16, sourceScore: 30, targetScore: 33 },
  { source: 8, target: 2, sourceScore: 15, targetScore: 30 },
  { source: 25, target: 18, sourceScore: 33, targetScore: 16 },
  { source: 28, target: 30, sourceScore: 23, targetScore: 20 },
  { source: 22, target: 0, sourceScore: 30, targetScore: 35 },
  { source: 4, target: 29, sourceScore: 24, targetScore: 34 },
];

const week3 = [
  { source: 21, target: 19, sourceScore: 31, targetScore: 34 },
  { source: 13, target: 7, sourceScore: 30, targetScore: 28 },
  { source: 1, target: 20, sourceScore: 32, targetScore: 22 },
  { source: 8, target: 26, sourceScore: 17, targetScore: 30 },
  { source: 16, target: 14, sourceScore: 22, targetScore: 33 },
  { source: 29, target: 22, sourceScore: 28, targetScore: 40 },
  { source: 3, target: 9, sourceScore: 33, targetScore: 41 },
  { source: 27, target: 11, sourceScore: 46, targetScore: 40 },
  { source: 18, target: 24, sourceScore: 33, targetScore: 27 },
  { source: 23, target: 17, sourceScore: 48, targetScore: 30 },
  { source: 6, target: 30, sourceScore: 21, targetScore: 13 },
  { source: 15, target: 2, sourceScore: 23, targetScore: 36 },
  { source: 5, target: 31, sourceScore: 29, targetScore: 31 },
  { source: 10, target: 0, sourceScore: 40, targetScore: 22 },
  { source: 12, target: 4, sourceScore: 33, targetScore: 34 },
  { source: 28, target: 25, sourceScore: 22, targetScore: 14 },
];

const week4 = [
  { source: 23, target: 22, sourceScore: 15, targetScore: 33 },
  { source: 0, target: 30, sourceScore: 42, targetScore: 31 },
  { source: 21, target: 1, sourceScore: 33, targetScore: 26 },
  { source: 2, target: 31, sourceScore: 28, targetScore: 32 },
  { source: 24, target: 20, sourceScore: 22, targetScore: 18 },
  { source: 25, target: 3, sourceScore: 42, targetScore: 44 },
  { source: 4, target: 19, sourceScore: 26, targetScore: 18 },
  { source: 27, target: 5, sourceScore: 27, targetScore: 32 },
  { source: 7, target: 6, sourceScore: 26, targetScore: 22 },
  { source: 26, target: 18, sourceScore: 20, targetScore: 19 },
  { source: 17, target: 8, sourceScore: 38, targetScore: 21 },
  { source: 28, target: 12, sourceScore: 35, targetScore: 25 },
  { source: 9, target: 11, sourceScore: 20, targetScore: 29 },
  { source: 29, target: 10, sourceScore: 17, targetScore: 33 },
  { source: 16, target: 13, sourceScore: 21, targetScore: 36 },
  { source: 14, target: 15, sourceScore: 33, targetScore: 13 },
];

const week5 = [
  { source: 18, target: 20, sourceScore: 32, targetScore: 19 },
  { source: 19, target: 17, sourceScore: 26, targetScore: 42 },
  { source: 16, target: 28, sourceScore: 23, targetScore: 33 },
  { source: 29, target: 3, sourceScore: 15, targetScore: 36 },
  { source: 4, target: 15, sourceScore: 27, targetScore: 28 },
  { source: 30, target: 22, sourceScore: 24, targetScore: 41 },
  { source: 21, target: 31, sourceScore: 24, targetScore: 32 },
  { source: 0, target: 2, sourceScore: 28, targetScore: 19 },
  { source: 11, target: 10, sourceScore: 13, targetScore: 41 },
  { source: 23, target: 1, sourceScore: 29, targetScore: 26 },
  { source: 5, target: 9, sourceScore: 43, targetScore: 17 },
  { source: 24, target: 26, sourceScore: 28, targetScore: 28 },
  { source: 6, target: 8, sourceScore: 31, targetScore: 34 },
  { source: 12, target: 25, sourceScore: 19, targetScore: 26 },
  { source: 7, target: 27, sourceScore: 26, targetScore: 29 },
  { source: 13, target: 14, sourceScore: 21, targetScore: 17 },
];

const weekMatcher = { week1: week1, week2: week2, week3: week3, week4: week4, week5: week5 };
const positions = [
  "Seattle Seahawks",
  "Los Angeles Rams",
  "Arizona Cardinals",
  "San Francisco 49ers",
  "New Orleans Saints",
  "Tampa Bay Buccaneers",
  "Carolina Panthers",
  "Atlanta Falcons",
  "Washington Football Team",
  "New York Giants",
  "Dallas Cowboys",
  "Philadelphia Eagles",
  "Green Bay Packers",
  "Chicago Bears",
  "Minnesota Vikings",
  "Detroit Lions",
  "Tennessee Titans",
  "Indianapolis Colts",
  "Houston Texans",
  "Jacksonville Jaguars",
  "Buffalo Bills",
  "Miami Dolphins",
  "New England Patriots",
  "New York Jets",
  "Pittsburgh Steelers",
  "Baltimore Ravens",
  "Cleveland Browns",
  "Cincinnati Bengals",
  "Kansas City Chiefs",
  "Las Vegas Raiders",
  "Los Angeles Chargers",
  "Denver Broncos",
];

const geoLocations = {
  "Seattle Seahawks": [47.6038321, -122.3300624], //0
  "Los Angeles Rams": [34.0112, -117.8275], //1
  "Arizona Cardinals": [34.395342, -111.763275], //2
  "San Francisco 49ers": [37.773972, -122.431297], //3
  "New Orleans Saints": [29.9499323, -90.0701156], //4
  "Tampa Bay Buccaneers": [27.9477595, -82.458444], //5
  "Carolina Panthers": [35.782169, -80.793457], //6
  "Atlanta Falcons": [33.7489924, -84.3902644], //7
  "Washington Football Team": [38.8950368, -77.0365427], //8
  "New York Giants": [40.7127281, -74.0060152], //9
  "Dallas Cowboys": [32.7762719, -96.7968559], //10
  "Philadelphia Eagles": [39.9527237, -75.1635262], //11
  "Green Bay Packers": [44.5126379, -88.0125794], //12
  "Chicago Bears": [41.8755616, -87.6244212], //13
  "Minnesota Vikings": [45.9896587, -94.6113288], //14
  "Detroit Lions": [42.3315509, -83.0466403], //15
  "Tennessee Titans": [35.7730076, -86.2820081], //16
  "Indianapolis Colts": [39.7683331, -86.1583502], //17
  "Houston Texans": [29.7589382, -95.3676974], //18
  "Jacksonville Jaguars": [30.3321838, -81.655651], //19
  "Buffalo Bills": [42.8867166, -78.8783922], //20
  "Miami Dolphins": [25.7741728, -80.19362], //21
  "New England Patriots": [44.2057083, -70.7537839], //22
  "New York Jets": [41.5127281, -72.1060152], //23
  "Pittsburgh Steelers": [40.4416941, -79.9900861], //24
  "Baltimore Ravens": [39.2908816, -76.610759], //25
  "Cleveland Browns": [41.5051613, -81.6934446], //26
  "Cincinnati Bengals": [39.1014537, -84.5124602], //27
  "Kansas City Chiefs": [38.27312, -98.5821872], //28
  "Las Vegas Raiders": [36.1672559, -115.1485163], //29
  "Los Angeles Chargers": [38.0112, -115.8275], //30
  "Denver Broncos": [39.7392364, -104.9848623], //31
};

const data = {
  nodes: [
    { name: "Seattle Seahawks" }, //
    { name: "Los Angeles Rams" },
    { name: "Arizona Cardinals" }, //
    { name: "San Francisco 49ers" },
    { name: "New Orleans Saints" }, //
    { name: "Tampa Bay Buccaneers" }, //
    { name: "Carolina Panthers" }, //
    { name: "Atlanta Falcons" }, //
    { name: "Washington Football Team" }, //
    { name: "New York Giants" }, //
    { name: "Dallas Cowboys" }, //
    { name: "Philadelphia Eagles" }, //
    { name: "Green Bay Packers" }, //
    { name: "Chicago Bears" }, //
    { name: "Minnesota Vikings" }, //
    { name: "Detroit Lions" }, //
    { name: "Tennessee Titans" }, //
    { name: "Indianapolis Colts" }, //
    { name: "Houston Texans" }, //
    { name: "Jacksonville Jaguars" }, //
    { name: "Buffalo Bills" }, //
    { name: "Miami Dolphins" }, //
    { name: "New England Patriots" }, //
    { name: "New York Jets" }, //
    { name: "Pittsburgh Steelers" }, //
    { name: "Baltimore Ravens" }, //
    { name: "Cleveland Browns" }, //
    { name: "Cincinnati Bengals" }, //
    { name: "Kansas City Chiefs" }, //
    { name: "Las Vegas Raiders" }, //
    { name: "Los Angeles Chargers" },
    { name: "Denver Broncos" }, //
  ],
  week1: [
    { source: 18, target: 28, sourceScore: 20, targetScore: 34 },
    { source: 0, target: 7, sourceScore: 38, targetScore: 25 },
    { source: 26, target: 25, sourceScore: 6, targetScore: 38 },
    { source: 23, target: 20, sourceScore: 17, targetScore: 27 },
    { source: 29, target: 6, sourceScore: 34, targetScore: 30 },
    { source: 13, target: 15, sourceScore: 27, targetScore: 33 },
    { source: 17, target: 19, sourceScore: 20, targetScore: 27 },
    { source: 12, target: 14, sourceScore: 43, targetScore: 34 },
    { source: 21, target: 22, sourceScore: 11, targetScore: 21 },
    { source: 11, target: 8, sourceScore: 17, targetScore: 27 },
    { source: 30, target: 27, sourceScore: 16, targetScore: 13 },
    { source: 5, target: 4, sourceScore: 23, targetScore: 34 },
    { source: 2, target: 3, sourceScore: 24, targetScore: 20 },
    { source: 10, target: 1, sourceScore: 17, targetScore: 20 },
    { source: 24, target: 9, sourceScore: 26, targetScore: 16 },
    { source: 16, target: 31, sourceScore: 16, targetScore: 14 },
  ],
};
