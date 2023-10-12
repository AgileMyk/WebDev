/*
Imagine you have an array of objects that you would like to reorganize
such that you could lay out this group of objects and access each one 
inidivually from among the rest by a given value. You would take the 
array of objects and create a new map of the same objects, organizing 
each by an organizing key - one of the values that exists in each object.
*/

//Here is an array of cars
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
      "capacity": 1,
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
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7,
          "licensePlate": "HD794DN"
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2019-03-03'),
      "capacity": 5,
        "licensePlate": "HD724DM"
    }
  ]

  //We are going to map out this array of car objects using reduce and 
  //organizing the new map by the licencePlate value

  cars.reduce(plater, {}); // plater is the function, an empty object
                           // is the starting 'value'

plater = function(stored, current) {   //begin with an empty object
    stored = { ...stored,              //spread whatever stored exists
             [current.licensePlate]:   //target the mapping identifier value
             current}                  //lay out the remaing object data   
}                                      //associated with the current plate 

console.log(plater);