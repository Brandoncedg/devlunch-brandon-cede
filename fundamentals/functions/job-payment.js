

const prompt = require("prompt-sync")()

const WORK_DAY_HOURS = 8
const EXTRA_HOURS_MULTIPLIER =1.5

const calculateSalary = (hourlyRate, starTime, endTime) => {
  const [starHour] = starTime.split(":")
  const [endHour] = endTime.split(":")
  
  const workedHours = endHour - starHour

  let salary = 0

  if (workedHours <= WORK_DAY_HOURS){
    salary = hourlyRate * workedHours
  } else {
    const extraHours = workedHours - WORK_DAY_HOURS
    salary = (hourlyRate * WORK_DAY_HOURS) + ((extraHours * hourlyRate) * EXTRA_HOURS_MULTIPLIER)
    
  }

  return salary
}

const main = () => {
  const hourlyRate = parseFloat(prompt("HOURLY RATE: "))
  const starTime = prompt("STAR AT: ")
  const endTime = prompt("END AT: ")

  const salary = calculateSalary(hourlyRate, starTime, endTime)

  console.log(`Salary: $${salary}`)

}

main()