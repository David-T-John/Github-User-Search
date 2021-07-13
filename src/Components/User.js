import React, { useEffect, useState } from 'react';

const User = props => {
    const [userData, setUserData] = useState({})
    const userInfo = async (url)=> {
        await fetch(url)
        .then(res=> res.json())
        .then(user => {
          setUserData(user)
        })
        .catch(err=>console.log(err))
      } 
    useEffect(()=>{
        userInfo(props.url);
    }, [])
    console.log(userData)

      
      
      

    return(
    <div className="user">
        <div className="col col-avatar">
            <a href={props.html_url}><h5>{props.login}</h5></a>
            <img src={props.avatar_url} alt="avatar"></img>
        </div>
        <div className="col">
            <p>Name: <strong>{userData.name}</strong></p>
            <p>Email: <strong>{userData.email}</strong></p>
            <p>Location: <strong>{userData.location}</strong></p>
            <p>Public Repositories: <strong>{userData.public_repos}</strong></p>
            <p>Account Created At: <br /><br /><strong>{userData.created_at}</strong></p>
            <p>Account Updated At: <br /><br /><strong>{userData.updated_at}</strong></p>
        </div>
    </div>
    )
    
}
export default User;
