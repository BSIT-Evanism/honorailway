import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/json/:id', (c) => {
  const id = c.req.param('id');
  const page = c.req.query('page');

  return c.json({
    idName: id,
    pageNumber: page
  })
})

export default app
