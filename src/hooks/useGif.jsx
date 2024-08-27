import { useState } from "react"
export const useGif = () =>{
    const [gif, setGif] = useState('')
 
    const reqGif = async() =>{
        await fetch('https://api.giphy.com/v1/gifs/random?api_key=fhCYHqkQgTI1sk1qoO1ZOc9rQUUK3OaL').then(async(resp) =>{
            await resp.json().then(({data})=>{
                setGif(data.images.original.url)
                console.log(data)
            })
        }).catch(console.error)
    }
  
    const handleGetGif = () => {
        reqGif()
    }
    // retorno de hook
    return{
        handleGetGif,
        gif
    }
}