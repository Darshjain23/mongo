import React, { useEffect, useState } from 'react'

const Home = () => {
    const[user,setUser]=useState("");
    const [loading,setLoad] = useState(true);

    useEffect(()=>{
        fetch("http://localhost:4000/api")
        .then((data)=>data.json())
        .then((data)=>{
            setUser(data)
            setLoad(false)
        })
        // .then((user)=>{console.log(user)})
    },[])
  return (
    <div>
{(loading)?(<h1>Loading ...</h1>):(<><h1>{user[0]?.name} {user[0]?.surname}</h1></>)}
    </div>
  )
}

export default Home
