import { URL, API_KEY } from '../settings'
import { useEffect } from 'react'

export default function getTrendingGifs() {
    const url = `${URL}/trending?api_key=${API_KEY}&limit=10&lang=en`
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            if (Array.isArray(data)) {
                const gifs = data.map(gif => {
                    return gif
                })
                return gifs
            }
        })
}
