import { Router } from "express"
const router = Router()

const listEstados = [
    { id:1, Estado:"Michoacan", Capital:"Morelia"},
    { id:2, Estado:"Coahuila", Capital:"Saltillo"},
    { id:3, Estado:"Tamaulipas", Capital:"Ciudad Victoria"},
  ]

  router.get('/v1/estados', (req, res) => {
    res.send(listEstados)
  })

  export default router