import { useState, useEffect, useContext } from 'react'
import getGifs from '.././services/getGifs'
import GifsContext from '.././context/GifsContext'
const INITIAL_PAGE = 0
export function useGifs({ keyword }) {
    const {gifs, setGifs} = useContext(GifsContext)
    const [loading, setLoading] = useState(true)
    const [nextPageLoading, setNextPageLoading] = useState(true)
    const [page, setPage] = useState(INITIAL_PAGE)
    useEffect(() => {
        setLoading(true)
        getGifs({ keyword }).then(gifs => {
            setLoading(false)
            setGifs(gifs)
        })
    },[keyword, setGifs])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        setNextPageLoading(true)
        getGifs({ keyword, page })
            .then(nextPageGifs => {
                setNextPageLoading(false)
                setGifs(prevGifs => prevGifs.concat(nextPageGifs))
        })
    }, [keyword, setNextPageLoading, setGifs, page])

    return {loading, nextPageLoading, gifs, setPage}
}
