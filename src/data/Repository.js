import housings from "./logements"

class Repository {
  getHousings() {
    return housings
  }

  getHousingById(id) {
    return housings.filter((housing) => housing.id === id)[0]
  }
}

export default Repository
