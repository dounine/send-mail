const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const mailRouter = require('./src/router/mailRouter')
const router = new Router()
const app = new Koa({proxy: true})
// app.context.db = db

app.use(cors())
app.use(bodyParser())
app.use(mailRouter.routes())
app.use(router.routes())

app.use(router.allowedMethods())
app.listen(50000, () => {
    console.log('应用已经启动，http://localhost:50000')
})
