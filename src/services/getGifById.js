import { URL, API_KEY } from '../settings'
export default function getGifById(id) {
    const FIND_GIF_BY_ID_URL = `${URL}/${id}?api_key=${API_KEY}`
    return fetch(FIND_GIF_BY_ID_URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(response => {
                const { data } = response
                return data
            })
}
