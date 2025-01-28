const gymName = "Elite Fitness"

console.log(gymName)

const ubication = "Palo Alto, California"

console.log(ubication)

const membership = "$"
const cost = 150

console.log(membership, cost)

const scheduleOpen = 6
const scheduleClose = 22

const schedule = scheduleOpen + " - " + scheduleClose

console.log(schedule)

const team = 10

console.log(team)

const amenity1 = "sauna"
const amenity2 = "piscina"
const amenity3 = "clases grupales"
const amenities = "Amenities:"

console.log(amenities,amenity1,amenity2,amenity3)

console.log(`
    Gym: ${gymName}\n
    Location: ${ubication}\n
    Price: ${membership}${cost}\n
    Time: ${scheduleOpen}:00AM-${scheduleClose-12}:00PM\n
    Team: ${team} certified trainers\n
    Amenities: ${amenity1},${amenity2},${amenity3}
    `)