// function Button()
// { const handleClick=()=>{
//     console.log("Button clicked")
// }
//   return(
//   <button onClick={handleClick}>Click me</button>
//   )
// }
// export default Button;

//

// function Button() {
//   let count = 0;
//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name} clicked me ${count} times`);
//     } else {
//       console.log("Stop clicking me");
//     }
//   };
//   return (
//     <>
//       <button
//         onClick={() => {
//           handleClick("Bro");
//         }}
//       >
//         Click Me
//       </button>
//     </>
//   );
// }

function Button()
{ const handleClick=(e)=>{
  e.target.textContent="U Changed Me";
   
}
  return(
    <>
    <button onClick={(e)=>{handleClick(e)}}> Clicked</button></>
  )
}
export default Button;
