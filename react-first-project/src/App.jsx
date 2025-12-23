import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Food from "./Food.jsx"
/*  Components --- A component is a small section of code that can include a JavaScript and HTML. Your function will return that code and make it reusable.
    JSX -- JS XML -- to combines java script and html
    {}  inside write js variables see Food.jsx file*/ 
function App()
{
  return(
    <>
      <Header/>
      <Food/>
      <Food/>
      <Footer/>
    </>
  )
}
export default App