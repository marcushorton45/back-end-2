const express = require('express')
const cors = require('cors')
const ctrl = require('./ctrl.js')

const { getHouses, deleteHouse, createHouse, updateHouse } = ctrl

const app = express()

app.use(express.json())
app.use(cors())

const SERVER_PORT = 4004

const baseURL = "/api/houses"

app.get(baseURL, getHouses)
app.delete(`${baseURL}/:id`, deleteHouse)
app.post(baseURL, createHouse)
app.put(`${baseURL}/:identification`, updateHouse)

app.listen(SERVER_PORT, () => console.log(`Server running on server port ${SERVER_PORT}`))