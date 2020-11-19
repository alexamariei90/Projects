// x = midterm ; y = final ; z = homework;
const finalGrade = (x, y, z) => {
  if ((x < 0 || x > 100) || (y < 0 || y > 100) || (z < 0 || z > 100)) {
   return  'You have entered an invalid grade.';
  }
  let average = (x + y + z )/ 3;
/*if (average >= 0 && average <= 59 ) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >=80 && average <=89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  } 
  };*/
  switch (true) {
    case (average >= 0 && average <= 59):
    return 'F';
    break;
    case (average >= 70 && average <= 79):
    return 'D';
    break;
    case (average >= 70 && average <= 79):
    return 'C';
    break;
    case (average >=80 && average <=89):
    return 'B';
    break;
    case (average >= 90 && average <= 100):
    return 'A';
    break;
  }
};
  console.log(finalGrade(99, 92, 95))
