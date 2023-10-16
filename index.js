
const { request, response } = require('express')
const express = require("express")
const cors = require("cors")
const uuid = require("uuid")
const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())


const pedidos = []
const check_id = (request, response, next) => {

    const { id } = request.params

    const index = pedidos.findIndex(client => client.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "client not Found" })
    }
    request.client_index = index
    request.user_id = id

    next()
}



app.get('/orders/', (request, response) => {
    return response.json(pedidos)
})

app.post('/orders', (request, response) => {
    const { name, order } = request.body

    const client = { id: uuid.v4(), name, order }

    pedidos.push(client)

    return response.status(201).json(client)

})

app.put('/orders/:id', check_id, (request, response) => {
    const { name, order } = request.body

    const index = request.client_index

    const id = request.user_id

    const up_date_orders = { id, name, order }

    pedidos[index] = up_date_orders

    return response.json(up_date_orders)

})

app.delete('/orders/:id', check_id, (request, response) => {
    const index = request.client_index

    pedidos.splice(index, 1)

    return response.status(201).json({ message: "order deleted" })
})

app.patch('/orders/:id', check_id, (request, response) => {
    const index = request.client_index

    pedidos[index].status = 'pronto'

    return response.json(pedidos[index])
})








app.listen(port, () => {
    console.log(`💻servidor on ${port}`)
})