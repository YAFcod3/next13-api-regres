"use client"
import { useRouter } from "next/navigation";
import React from "react";

function Users({ users }) {

  const router=useRouter()


  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={user.id} onClick={()=>router.push(`/users/${user.id}`)}>
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img style={{borderRadius:'50%'}} src={user.avatar} alt={user.email} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
