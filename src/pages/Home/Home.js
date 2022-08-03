import Gifs from '../.././components/gifs/Gifs'
import { Helmet } from 'react-helmet'
export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home | giftastic!</title>
                <meta name="description" content="giftastic is a web to find cool gifs!" />
            </Helmet>
            <Gifs title={'Trending Gifs'}/>
        </>
    )
}
