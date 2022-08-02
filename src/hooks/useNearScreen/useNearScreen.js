import { useState, useEffect, useRef } from 'react'

export default function useNearScreen({ externalRef, once } = {}) {
    const fromRef = useRef()
    const [isNearScreen, setShow] = useState(false)

    useEffect(() => {
        const element = externalRef ? externalRef.current : fromRef.current
        const onChange = (entries) => {
        const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
           } else {
               !once && setShow(false)
           }
       }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '150px'
        })

        if (element) observer.observe(element)

        return () => observer && observer.disconnect()
    })

    return {isNearScreen}
}
