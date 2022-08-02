import {ReactComponent as UserIcon} from '../.././assets/user-solid.svg'
export default function GifDetails( {gif }) {
    const { rating, import_datetime, username } = gif
    const fixedDatetime = import_datetime.slice(0, 10)
    return (
        <aside>
            <div>
                {gif?.user?.avatar_url ? <img src={gif?.user?.avatar_url} alt={gif?.user?.display_name}/> : <UserIcon className="user-icon"/> }
                <a href={gif?.user?.profile_url} target='_blank' rel='noreferrer' className="gif-name">{gif?.user?.display_name ?? 'Unknown'}</a>
                <span className="verified">{gif?.user?.is_verified ? 'Verified' : 'Unverified'}</span>
            </div>
            <p className='description'>{gif?.user?.description ?? 'Description Not Available'}</p>
            <span className="uploaded-at">Uploaded at {fixedDatetime} by {gif?.user?.profile_url ? <a href={gif?.user?.profile_url} target='_blank' rel="noreferrer" >{username ?? 'Unknown'}</a> : <h4>{username ?? 'Unknown'}</h4>}</span>
            <span className="rating">Rating: {rating.toUpperCase()}</span>
            {gif?.user && <ul>
                <li>
                    <a href={gif.user.website_url} target='_blank' rel='noreferrer'>Go to Website</a>
                </li>
                <li>
                    <a href={gif.user.instagram_url} target='_blank' rel='noreferrer'>Go to Instagram</a>
                </li>
            </ul>}
        </aside>
    )
}
