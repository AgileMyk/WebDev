/*
You have been employed by the Japanese government to write a function that tests 
whether or not a building is strong enough to withstand a simulated earthquake.

A building will fall if the magnitude of the earthquake is greater than the strength 
of the building.

An earthquake takes the form of a 2D-Array. Each element within the Outer-Array 
represents a shockwave, and each element within the Inner-Arrays represents a tremor. 
The magnitude of the earthquake is determined by the product of the values of its 
shockwaves. A shockwave is equal to the sum of the values of its tremors.

Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735

A building begins with a strength value of 1000 when first built, but this value is 
subject to exponential decay of 1% per year. For more info on exponential decay, follow 
this link - https://en.wikipedia.org/wiki/Exponential_decay

Given an earthquake and the age of a building, write a function that returns "Safe!" 
if the building is strong enough, or "Needs Reinforcement!" if it falls.
*/

function strongEnough(earthquake, age) {
    magnitude = 1;
    strength = 1000 * (1 - .01) ** age;
  
    
    for (let i = 0; i < earthquake.length; i++) {
      magnitude *= earthquake[i].reduce( (x,y) => x + y);
    }

    if (strength > magnitude) {
      return 'Safe!'
    } else {
      return 'Needs Reinforcement!';
    }
  }

  //more compact version

  function strongEnough(earthquake, age){
    earthquake = earthquake.reduce((s, v) => s * v.reduce((x, s) => x + s, 0), 1);
    var strength = 1000 * Math.pow(.99, age);
    return strength > earthquake ? 'Safe!' : 'Needs Reinforcement!';
  }


//modular && value-check

function product(arr) {
	if (arr.length == 0) { return 0; }
  return arr.reduce(function (x, y) { return x * y });
}

function sum(arr) {
	if (arr.length == 0) { return 0; }
  return arr.reduce(function (x, y) { return x + y });
}

function strength(years, decPerYear, initStrength) {
	if (decPerYear == undefined) { decPerYear = 1 };
  if (initStrength == undefined) { initStrength = 1000 };
  for (var i = 0; i < years; i++) {
 		initStrength *= 0.99;
  }
  return initStrength;
}

function strongEnough(earthquake, age) {
	if(strength(age) >= product(earthquake.map(sum))){
  	return "Safe!";
  } else {
  	return "Needs Reinforcement!";
  }
}