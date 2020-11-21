// Write your function here:
const tipCalculator = (quality, total) => {
  if (typeof quality === 'string' && typeof total === 'number'){
  /* if (quality === 'bad' ) {
      return (total * 5 /100);
    } else if (quality === 'ok') {
      return (total * 15 / 100);
    } else if (quality === 'good') {
      return (total * 20 / 100);
    } else if (quality === 'excellent') {
      return (total * 30 / 100);
    } else {
      return (quality * 18 / 100);
    }
  } */
  switch (quality) {
    case 'bad':
    return (total * 5 /100);
    break;
    case 'ok':
    return (total * 15 / 100);
    break;
    case 'good':
    return (total * 20 / 100);
    break;
    case 'excellent':
    return (total * 30 / 100);
    break;
    default :
    return (total * 18 /100);
    break;
  }
  }
};
console.log(tipCalculator('good', 100)) //prints 20
