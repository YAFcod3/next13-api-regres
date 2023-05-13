async function getUser(id) {
  // console.log(id)
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  // console.log(data.data)

  return data.data;
}

async function UserDetail({ params }) {
  console.log(params);

  const user = await getUser(params.id);
  console.log(user);

  return (
    <div className="row">
      {/* <h1>User Detaails</h1> */}

      <div col-md-6 offset md-3>
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt={user.email} />
          </div>
          <div className="card-body text-center">
            <h3>
              {/* {user.id} */}
              {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
