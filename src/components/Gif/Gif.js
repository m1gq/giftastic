import './Gif.css'
import { ReactComponent as LinkIcon } from '../.././assets/link-solid.svg'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react'
export default function Gif({ gifs, children }) {
    const { images, title } = gifs
    const { downsized_medium } = images
    const { url } = downsized_medium
    const [copied, setCopied] = useState(false)

    function handleCopy() {
        setCopied(true)
        setTimeout(() => setCopied(false), 1200)
    }

    return (
        <div className="gif">
            <CopyToClipboard text={url} onCopy={handleCopy} title='Copy URL' role='button'>
                <LinkIcon className="icon" />
            </CopyToClipboard>
            <div className="bg">
                <h4>{title}</h4>
            </div>
            { children }
            <span className={`modal ${copied && 'enter'}`}>Gif copied to Clipboard!</span>
        </div>
    )

}
