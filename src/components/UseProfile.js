import { useEffect } from "react"
import { useState } from "react"

export function useProfile(){
    const [data, setData] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        fetch('/api/profile')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLoading(false)
            setData(data)
        })
    },[])

    return {loading, data}
}