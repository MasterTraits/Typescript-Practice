import Example from './components/Example.tsx'
import heroImage from './assets/hero-image-github-profile.png'

function App() {


  return (
    <>
    <header className='flex justify-center'>
      <img src={heroImage} className='h-auto w-full'/>
      <div>
      <input type="text" className='h-16 absolute min-w-[550px] bg-[#364153] top-7' placeholder='hello'/>
      </div>
    </header> 

    <div className='h-40 bg-[#364153]'>
      <div className='flex'></div>
    </div>
    <body className=''></body>
    <footer></footer>
    </>
  )
}

export default App
