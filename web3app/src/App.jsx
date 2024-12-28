import {Navbar,Welcome,Service,Transtaction,Loader,Footer} from "./components"


const App = ()=> {

  return (
    <>
    <div className="min-h-screen" >
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>

    </div>
  
      
      <Footer/>
      <Service/>
      <Transtaction/>

    </div>
    </>
  )
}

export default App
