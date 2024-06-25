import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";


const Page1 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => setUsers(data));
    }, [])

    return (
        <div>
            <h1>Page1</h1>
           

            {
                users.map(item => {
                    return <h2 key={item.id}> <Link to={`/user/${item.id}`}>{item.name}</Link></h2>
                })

            }

        </div>
    );
};
export default Page1