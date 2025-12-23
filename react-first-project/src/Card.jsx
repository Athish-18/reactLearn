//import Pic from "./assets/Charles.jpg";
function Card()
{
  return(
    <div className="card w-56 border-solid border-2 h-64 bg-white p-5 m-8 flex flex-col  text-center items-center shadow-md hover:scale-110">
      <img  className="img rounded-full h-36 w-36"src="https://picsum.photos/200/200" alt="Charles Oliveira"></img>
      <h2 className="text-2xl mt-3 text-yellow-500">Charles Oliveira</h2>
      <p>UFC LW Champion</p>
    </div>
  )
}
export default Card;          