import { useState } from 'react'
import { useLocation } from 'wouter'
import './searchinput.css'
export default function SearchInput() {
    const [keyword, setKeyword] = useState('')
    const [path, pushPath] = useLocation()

    function handleChange(evt) {
        setKeyword(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        pushPath(`/giftastic/search/${keyword}`)
    }

    return (
        <form autoComplete='off' onSubmit={handleSubmit}>
            <input placeholder="Search a Gif..." value={keyword} onChange={handleChange}/>
            <button type='submit'>Search</button>
        </form>
    )
}
