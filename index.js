/*
 * Maintained by jemo from 2020.2.1 to now
 * Created by jemo on 2020.2.1 15:38:29
 * index
 */

const Koa = require('koa')
const axios = require('axios')
const cors = require('@koa/cors')
const serve = require('koa-static')
const route = require('koa-route')

const app = new Koa()
app.use(cors())
app.use(serve('build'))
app.use(route.get('/data', async ctx => {
  try {
    const response = await axios.get(
      'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5'
    )
    const {data} = response.data
    ctx.body = data
  }
  catch(error) {
    console.error('indexAppCatchError: ', error)
  }
}))
console.log('app listen at 7000')
app.listen(7000)
