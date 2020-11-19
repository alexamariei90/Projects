const calculateWeight = (earthWeight, planet) => {
  if (typeof earthWeight === 'number' && typeof planet === 'string') {
    if (planet == 'Mercury') {
      return  earthWeight * 0.378;
         } 
    else if (planet == 'Venus') {
      return earthWeight * 0.907;     
         }
    else if (planet == 'Mars') {
     return earthWeight * 0.377;     
         }
    else if (planet == 'Jupiter') {
      return earthWeight * 2.36;     
         }
    else if (planet == 'Saturn') {
      return earthWeight * 0.916;     
         }
    else {
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
  }
};
console.log(calculateWeight(100, 'Jupiter'))
