/*
Building on the cars example, we will change the data structure in such 
a way that the iterable can be traversed only once while allowing the 
reduce method to yeild an appropriate result.
*/

let cars = [
    {
      "color": "purple",
      "type": "mini",
      "registration": new Date('2017-01-03'),
      "capacity": 4,
        "licensePlate": "HD494DL"
    },
    {
      "color": "blue",
      "type": "SUV",
      "registration": new Date('2021-03-03'),
      "capacity": 9,
        "licensePlate": "HD294DJ"
    }, 
      {
      "color": "black",
      "type": "minivan",
      "registration": new Date('2022-01-03'),
      "capacity": 10,
      "licensePlate": "HD194DF"
    },
    {
      "color": "yellow",
      "type": "station wagon",
      "registration": new Date('2023-03-03'),
      "capacity": 6,
        "licensePlate": "HD894DH"
    }, 
      {
      "color": "silver",
      "type": "truck",
      "registration": new Date('2017-01-03'),
      "capacity": 5,
          "licensePlate": "HD796DN"
    },
    {
      "color": "red",
      "type": "convertable",
      "registration": new Date('2019-03-03'),
      "capacity": 4,
        "licensePlate": "HD724DM"
    }
  ]
  compYears = function (stored, current) {
        ( stored.registration.getFullYear() > current.registration.getFullYear() )
        ? stored.registration.getFullYear() : current.registration.getFullYear() 
    }

  cars.reduce(compYears, {})

  //


  //With an array
  const slices = [
    [1,2,3],
    [2,3,3,3],
    [3,4],
    [5],
    [1,1,1,1,1]
  ]