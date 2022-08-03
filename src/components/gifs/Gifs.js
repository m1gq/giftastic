import './gifs.css'
import Gif from '.././Gif/Gif'
import {useGifs} from '../.././hooks/useGifs'
import Loading from '.././Loading/Loading'
import useNearScreen from '../.././hooks/useNearScreen/useNearScreen'
import { useCallback, useRef, useEffect } from 'react'
import throttle from 'just-throttle';
import { Link } from 'wouter'
import { Helmet } from 'react-helmet'
import SearchInput from '../.././components/SearchInput/SearchInput'
import ErrorPage from '../../pages/Error/Error'

export default function Gifs({ params, title }) {
    const { keyword } = params ?? ''
    const externalRef = useRef()
    const DECODED_KEYWORD = decodeURI(keyword ?? 'Trending')
    const { loading, nextPageLoading, gifs, setPage } = useGifs({ keyword })
    const {isNearScreen} = useNearScreen({ externalRef: loading ? null : externalRef, once: false })
    const descriptionTitle = title ?? `Results for "${DECODED_KEYWORD}" Gifs`

    const handleNextPage = useCallback(throttle(() => {
            setPage(prevPage => prevPage + 1)
    }, 500), [setPage])

    useEffect(() => {
        if (isNearScreen) handleNextPage()
    }, [isNearScreen, handleNextPage])

    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Loading</title>
                </Helmet>
                <Loading><h2 className="loading-title">Looking for "{DECODED_KEYWORD}" Gifs</h2></Loading>
            </>
        )
    }

    if (gifs.length === 0 && !loading) {
        return (
            <ErrorPage>
                <h1 className="error">"{DECODED_KEYWORD}" was not found</h1>
            </ErrorPage>
        )
    }
    return (
        <>
            <Helmet>
                <title>{DECODED_KEYWORD} | giftastic!</title>
                <meta name="description" content={`Results for "${DECODED_KEYWORD}" gifs`} />
            </Helmet>
            <header>
                <SearchInput />
            </header>
            <div>
                <h3 className="description-title">{descriptionTitle}</h3>
                <div className="gifs-container">
                    {
                        gifs.map(gif => {
                            return (
                                <Gif key={gif.id} gifs={gif}>
                                    <Link to={`/giftastic/gif/${gif.id}`} key={gif.id}>
                                        <button >
                                            <img src={gif.images.downsized_medium.url} alt={gif.title} className="gif-img"/>
                                        </button>
                                    </Link>
                                </Gif>
                            )
                        })
                    }
                </div>
                {nextPageLoading && <h3 className="loading-next-page">Loading More Gifs</h3>}
                <div className="visor" ref={externalRef}></div>
            </div>
        </>
    )
}
