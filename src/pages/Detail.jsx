import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";


const Detail = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(({data}) => setUser(user));
    }, [])
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.phone}</h1>
        <h1>{user.username}</h1>
    </div>
  )
}

export default Detail