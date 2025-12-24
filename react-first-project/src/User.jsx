function User(props)
{
    const logged = (
      <h1 className="user ml-3 text-2xl m-4 font-bold bg-green-500 p-4">
        Welcome {props.name}
      </h1>
    );

    const notLogged = (
      <h1 className="not ml-3 text-2xl m-4 font-bold bg-red-500 p-4">
        You have no acess
      </h1>
    );

    return props.isUser?logged:notLogged;
  
}
export default User;