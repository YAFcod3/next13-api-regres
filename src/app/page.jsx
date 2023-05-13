import Users from "@component/components/Users";
import React from "react";

async function fetchGetUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data.data);
  return data.data;
}

async function IndexPage() {
  const users = await fetchGetUsers();

  return (
   
     <Users users={users}/>
    
  );
}

export default IndexPage;
