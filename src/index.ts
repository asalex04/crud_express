import express from 'express'
import router from "./routers";

const PORT = process.env.PORT || 4000
console.log(process.env.PORT)
const app = express()
app.use(express.json())
app.use('/api', router)

const startApp = () => {

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startApp()