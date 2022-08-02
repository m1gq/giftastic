import { useEffect } from 'react'

export default function useAsPageTitle(pageTitle) {
    useEffect(() => {
        document.title = `${pageTitle} | gifstatic!`
    }, [pageTitle])
}
