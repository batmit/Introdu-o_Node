//utilizando fastify

import { fastify } from 'fastify'

const server = fastify()

server.get("/", () => {
    return 'Hello World'
})

server.get("/hello", () => {
    return 'Hello Rocketseat'
})

server.get("/node", () => {
    return 'Hello Node.Js'
})


server.listen({
    port: 3333,
})

