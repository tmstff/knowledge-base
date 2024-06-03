import { useState } from "react";

export function useLocalStorage<T>(key: string): [T | null, (newValue:T) => void, () => void] {

    console.log("useLocalStorage:", key)
    const [value, setValue]=useState<T | null>(()=>{
        const storedValue = localStorage.getItem(key)
        console.log("store:", storedValue)
        return storedValue ? JSON.parse(storedValue) : null
    })

    const setStoredValue=(newValue:T) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    const removeItem=() => {
        setValue(null)
        localStorage.removeItem(key)
    }

    return [value, setStoredValue, removeItem]
}