import './loading.css'
export default function Loading({ children }) {
    return (
        <>
            <div className="loading">
                <div className="circle-container">
                    <div className="circle" />
                    <div className="circle" />
                    { children }
                </div>
            </div>
        </>
    )
}
