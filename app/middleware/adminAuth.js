'use client'
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const adminAuth = () =>{
    const router = useRouter()

    useEffect(()=>{
        const token = Cookies.get("tokenKey")

        if(!token){
            router.push('/login')
        }else(
            router.push('/admin')
        )
    },[])
}