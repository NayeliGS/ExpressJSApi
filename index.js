import express from "express"
import routerv1 from "./router/v1/estados"
import routerv2 from "./router/v2/estados"

const app = express()
const port = 3000;

app.use(routerv1,routerv2)

app.listen(port, () => {
  console.log(`Aplicacion escuchada por el puerto ${port}`)
})