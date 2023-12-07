import { randomUUID } from 'node:crypto'

export class DatabaseMemory{

    #videos = new Map() // usar o map

    list(search){

        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id, 
                ...data
            }
        })

        .filter(video => {
            
            if(search){
                return video.title.includes(search)
            }

            return true
        })
         
    }

    create(video){

        const videoId = randomUUID()


        // set é igual do python
        this.#videos.set(videoId, video) 
    }


    update(id, video){
        this.#videos.set(id, video)

    }

    delete(id){
        
        const videoId = request.params.id

        database.delete(videoId)

        return reply.status(204).send()

    }

}