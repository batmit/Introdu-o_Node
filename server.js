//utilizando fastify
import {DatabaseMemory} from './database-memory.js'

import { fastify } from 'fastify'

const server = fastify()

// estou chamando o database
const database = new DatabaseabaseMemory()

// o POST significa criar
//Quando eu usar o post para chamar localhost:3333/videos eu estarei criando um novo vídeo

server.post("/videos", (request, reply) => {

    const { title, description, duration } = request.body()

    database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
 })

server.get("/videos", (request, reply) => {

    const search = resquest.Query

    const videos = database.list()

    return videos 

})

//o put publica um novo video específico
// eu enviarei o id 
server.put("/videos/:id", (request, reply) => {

    const videoId = request.params.id

    const { title, description, duration } = request.body()


    database.update(videoId, {
        title, 
        description,
        duration
    })

    return reply.status(204).send()
})

server.delete("/videos/:id", () => {
    return 'Hello Node.Js'
})


server.listen({
    port: 3333,
})

