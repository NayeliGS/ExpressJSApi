import { Router } from "express"
const router = Router()

const listEstados = [
    { id:1, Estado:"Michoacan", Capital:"Morelia", Poblacion: 300000,},
    { id:2, Estado:"Coahuila", Capital:"Saltillo", Poblacion: 200000,},
    { id:3, Estado:"Tamaulipas", Capital:"Ciudad Victoria", Poblacion: 300000,},
  ]

  router.get('/v2/estados/:id', (req, res) => {
    const estadoByID = req.params.id;
    const estado = listEstados.find((user) => user.id == estadoByID);
  
    if (!estado){
      res.send({Error: `Estado con numero de ID ${estadoByID}, no existe`})
    }
    res.send(estado);
  })

  export default router