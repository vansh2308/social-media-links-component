import './App.css'
import profilePic from "./assets/avatar-jessica.jpeg"

function App() {
  
  return (
    <main className='w-screen h-screen bg-black flex justify-center items-center'>
      <div className='w-1/4 h-fit bg-grey rounded-xl p-8 flex flex-col items-center gap-5 max-[950px]:w-[60%] max-[500px]:w-[80%] max-[500px]:p-5 max-[500px]:gap-4'>
        <img src={profilePic} className='w-20 rounded-full aspect-square'/>

        <div className='w-full text-center'>
          <h2 className='text-xl font-semibold'>Jessica Randall</h2>
          <span className='text-xs text-green font-medium'> London, United Kingdom</span>
        </div>

        <p className='text-xs text-center font-light'>"Front-end developer and avid reader"</p>

        {
          ["Github", "Frontend Mentor", "Linkedin", "Twitter", "Instagram"].map((item, key)=>{
            return(
              <Tile linkName={item} key={key} />
            )
          })
        }
      </div>
      
    </main>
  )
}

export default App


function Tile(props){
  return(

    <a href='#' className='w-full bg-lgrey text-center py-3 font-semibold text-xs rounded-md cursor-pointer hover:bg-green hover:text-black'>
      {props.linkName}
    </a>

  )
}