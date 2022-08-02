import GifsContext from '.././context/GifsContext'
import getGifById from '.././services/getGifById'
import { useState, useEffect, useContext } from 'react'
export default function useGif(id) {
    const { gifs } = useContext(GifsContext)
    const [loading, setLoading] = useState(false)
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)
    const [gif, setGif] = useState(gifFromCache)
    const [error, setError] = useState(false)
    useEffect(() => {
        if (!gif) {
            setLoading(true)
            getGifById(id)
                .then(gif => {
                     setGif(gif)
                     setLoading(false)
                     setError(false)
                }).catch(err => {
                     setError(true)
                })
        }
    }, [gif, id, loading, error])
    return { gif, error }
}
