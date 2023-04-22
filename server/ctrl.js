const houses = require('./db.json')
let id = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const { id } = req.params
        const index = houses.findIndex((e) => e.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const { address, price } = req.body
        const newHouse = {
            id,
            address,
            price,
        }

        houses.push(newHouse)
        id++
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const { type } = req.body
        const { identification } = req.params
        const index = houses.findIndex((e) => e.id === +identification)

        if (type === "plus") {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === "minus" && houses[index].price > 0) {
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
    },
}