import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { useAxios } from "../../Custom-hook/user-api"

export const Home=()=>{
    // const {data,loader}=useAxios()
    // console.log(data)
    return(
        <div>
            <Sidebar/>
            
            {/* Home Page */}
            {/* {loader?<h2>loading....</h2>: data.map(user=><h2 key={user.id}>{user.lastName}</h2>)} */}
        </div>
    )
}