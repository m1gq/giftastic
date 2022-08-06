import './detail.css'
import Gif from '../.././components/Gif/Gif'
import Loading from '../.././components/Loading/Loading'
import useGif from '../.././hooks/useGif'
import { Redirect } from 'wouter'
import GifDetails from './GifDetails'
import { Helmet } from 'react-helmet'

export default function Detail({ params }) {
    const { gif, error } = useGif(params.id)
    if (error) return <Redirect to="/404" />
    return (
        <>
        {!gif ? <Loading><h2 className="loading-title">Loading Gif</h2></Loading> :
        <>
            <Helmet>
                <title>{gif.title} || giftastic!</title>
                <meta name='description' content={gif.user?.description ?? 'Gif from Giphy API'} />
            </Helmet>
            <section>
                <Gif gifs={gif}>
                    <img src={gif.images.downsized_medium.url} alt={gif.title} className="gif-img"/>
                </Gif>
                <GifDetails gif={gif} />
            </section>
        </>
        }
        </>
    )
}
