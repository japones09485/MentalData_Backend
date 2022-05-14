const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api1',
  password: '12345',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM satisfaccionsalud;', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTables = (request, response) => {
  pool.query("select localidad,sum(casos)  from suicidio_menores_18 group by localidad  ;", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}




// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

module.exports = {
  getUsers,
  getTables
  // getUserById,
}
