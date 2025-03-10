
type Level = "Low" | "Medium" | "High"

class Airport {

  constructor(
		public name: string,
		public location: string,
		public runway: boolean,
		public trafficLevel: Level
  ) {}

	changeTrafficLevel(newTraffic: Level): void {
    this.trafficLevel = newTraffic;
  }

	emergencyLanding(): void {
		this.runway = false
		this.trafficLevel = "High"
	}

}

	const travel1 = new Airport("Juan Santamaría", "San José", true, "High")
	console.log(travel1)

	travel1.changeTrafficLevel("Low")
	console.log(travel1.trafficLevel)
	console.log(travel1)

	travel1.emergencyLanding()
	console.log(travel1.runway)
	console.log(travel1)


