import './error.css'
import { Helmet } from 'react-helmet'
import { Link } from "wouter";
import { ReactComponent as ErrorImg } from '../.././assets/page-error404.svg'
import Home from '../Home/Home'

export default function ErrorPage({ children }) {
    return (
        <>
            <Helmet>
                <title>Error Page | giftastic!</title>
                <meta name="description" content='404 error' />
            </Helmet>
            <div className="error-container">
                <ErrorImg className="error-img"/>
                { children }
                <Link to={'/'} component={ Home }>
                    <button className="button">Go Back To Home</button>
                </Link>
            </div>
        </>
    )
}
