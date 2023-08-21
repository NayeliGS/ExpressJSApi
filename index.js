const express = require('express')
const app = express()
const port = 3000;

const listEstados = [
  {
  id:1,
  Estado:"Michoacan",
  Capital:"Morelia",
  },

  {
  id:2,
  Estado:"Coahuila",
  Capital:"Saltillo",
  },

  {
  id:3,
  Estado:"Tamaulipas",
  Capital:"Ciudad Victoria",
  },
]

app.get('/Practica_expressJSApi', (req, res) => {
  res.send(listEstados)
})

app.get('/Practica_expressJSApi/:id', (req, res) => {
  const estadoCapital = req.params.id;
  const Estado = listEstados.filter(user => user.id == estadoCapital);
  res.send(Estado);
})

app.listen(port, () => {
  console.log(`Aplicacion escuchada por el puerto ${port}`)
})