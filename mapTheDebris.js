/**Return a new array, that transforms the elements' average altitude into their orbital periods(in seconds).
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt }.
 *
 * The values should be rounden to the nearest whole number. The body being orbited is Earth.
 * The radius of the earth is 63667.4447 kilometers. and the GM values of earth is 398600.4418 km3s-2.
 */

//no idea!

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    function findOrbPeriod(alt){
        let axis = alt + earthRadius;
        let orbPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(axis, 3)/GM));
        return orbPeriod;
    }

    for(let i of arr){
        i.orbitalPeriod = findOrbPeriod(i.avgAlt)
        delete i.avgAlt
    }
    return arr;
  }

  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));