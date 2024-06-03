import { useEffect, useState } from "react";

export function useFetch<T>(url: string, initialValue: T): [T, any, boolean]  {

    const [data, setData] = useState<T>(initialValue)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    
    async function fetchData(url: string) {
        try {
            setLoading(true)
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("request not successful")
            }
            const json = await response.json()
            setData(json)
            setLoading(false)
    
        } catch(err) {
            setError(err)
        }
    }

    useEffect(
        () => {
            fetchData(url)
        }, []
    )

    return [data, error, loading]
}