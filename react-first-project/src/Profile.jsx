function Profile()
{ const url="./src/assets/cat.jpg";
  const handleClick=(e)=>{
     e.target.style.display="none";
  }
  return(
    <>
      <img  src={url}  onClick={(e)=>{handleClick(e)}}></img>
    </>
  )
}
export default Profile;