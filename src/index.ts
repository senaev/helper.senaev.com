import Fastify from 'fastify'
import { sendTelegramMessage } from './utils/sendTelegramMessage'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
    reply.send('Hello, this is helper.senaev.com service')
})

// curl -X POST http://localhost:3000/tg -H "Content-Type: text/plain" -d 'Hello, world!'
fastify.post('/tg', async (request, reply) => {
    const message = request.body as string

    if (!message) {
        throw new Error('Message is required')
    }

    await sendTelegramMessage(message)

    reply.send({ status: 'ok' })
})

const PORT = 3000
fastify.listen({ port: PORT }, async (err, address) => {
  if (err) {
    throw err
  }

  console.log(`🚀 Server is running on port=[${PORT}]`)
})

