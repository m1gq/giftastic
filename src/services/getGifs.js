import { URL, API_KEY } from './settings'
export default function getGifs({ limit = 15, keyword, page = 0, trending = false}) {
    const SEARCH_URL = `${URL}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&lang=en`
    const TRENDINGS_URL = `${URL}/trending?api_key=${API_KEY}&limit=${limit}&offset=${page * limit}&lang=en`
    const url = keyword === undefined ? TRENDINGS_URL : SEARCH_URL
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            const gifs = data.map(gif => {
                return gif
            })
            return gifs
        })
}
