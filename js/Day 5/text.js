function calculateDaysince(startDatestring) {
  const startDate = new Date(startDatestring);

  const now = new Date();

  const timeDiffrenceMs = now.getTime() - startDate.getTime();

  const millisecondsInday = 1000 * 60 * 60 * 24;

  const daysElapsed = Math.floor(timeDiffrenceMs / millisecondsInday);

  return daysElapsed;
}


const joiningDate = '2025-11-03'
const dayCount = calculateDaysince(joiningDate)


console.log(`if ypu joined in ${joiningDate}, ${dayCount} day have passed untill now.`);




