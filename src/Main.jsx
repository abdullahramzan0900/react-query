import React, { useState } from "react";
import {useMutation, useQuery} from '@tanstack/react-query'
import Axios from 'axios'


function Main()
{ console.log(useQuery);
    const [name,setname]=useState('')
    const deletePost = useMutation((id) => {
      return Axios?.delete(`http://localhost:3000/Contactus/${id}`).then((res)=>{
        console.log(res,"aaaaa")
      });
    });
    const [chngdata,setchnagedata]=useState({
        "name": 'aaaaaa',
        "email": "abdullah22@gmail.com",
        "service": "Cloud Services",
        "message": "aaaa"
    })

    
    const {data,isLoading,isError,refetch}=useQuery(["vs"],()=>{ // here vs is unqiue id
        return Axios?.get("http://localhost:3000/Contactus").then((res)=>res?.data);
        
})

const { isLoadings, isErrors, error, mutate } = useMutation(createdata);
async function createdata()
{  
    const response = await Axios.post('http://localhost:3000/Contactus',chngdata);
}

console.log(chngdata,"aa")
if(isLoading)
{
    return(<>
    <h1>Loading...</h1>
    </>)
}
const onChange = (e) => {
    setname(e.target.value);
    console.log(e.target.value);
     
}
function adddata()
{
    mutate(chngdata);
}


    return(
        <>
             <input type="text"
                    value={name}
                    onChange={onChange} />
                    <button onClick={()=>{
                      adddata()
                    
                    }}>Create</button>
   
    {
       data && data?.length>0 && data?.map((item)=>{
            return(
                <div key={item._id}>
                <h1>{item?.name}</h1>
           <button key={item._id} onClick={()=>{
               deletePost.mutate(item._id)
           }}>delete</button>
                </div>
            )
        })
    }

<button onClick={refetch}>update</button>

        </>
    )
}
export default Main;
