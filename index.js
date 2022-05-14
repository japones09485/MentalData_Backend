const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const cors = require('cors')
const port = 2000

// Crear el servidor
const app = express()


// body-parser extrae toda la parte del cuerpo de una secuencia de solicitud entrante y la expone en req.body. 
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// habilitar cors
app.use(cors());


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres MentalData ' })
})



app.get('/users', db.getUsers )

app.get('/tables', db.getTables )

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
