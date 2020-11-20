const howOld = (age, year) => {
// so that the function always knows the current year.
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();

  
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}
console.log(howOld(30,1995)); //prints: You were 5 in the year 1995
console.log(howOld(-1,1995)); //prints: The year 1995 was 26 years before you were born
