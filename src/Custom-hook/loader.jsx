import { useState } from "react"

export const useLoader=()=>{
    const [loader,setLoader]=useState(false)
    return {loader,setLoader}
}

