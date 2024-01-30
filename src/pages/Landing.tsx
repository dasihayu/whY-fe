import { Button } from '@/components/ui/button'
import home from '@/assets/img/home.png'
import about1 from '@/assets/img/about1.png'
import about2 from '@/assets/img/about2.png'
import about3 from '@/assets/img/about3.png'
import LandingNav from '@/components/LandingNav'

function Landing() {
  return (
    <>
    <LandingNav />
    <div id='landing' className='w-full h-[100vh] px-4 py-4 flex justify-center items-center'>
        <div className='flex justify-center flex-row items-center gap-12'>
          <div className='flex flex-col max-w-lg flex-1'>
            <p className='text-6xl font-semibold text-whyP '>Join Together 'whY' And Find The Answers!</p>
            <div className='mt-4 gap-4 flex'>
              <Button>Login</Button>
              <Button variant='outline'>Sign-Up</Button>
            </div>
          </div>
          <div className='flex-1 flex'>
            <img src={home} alt="home" className='w-[500px] m-auto'/>
          </div>
        </div>
    </div>
    <div id='about' className='px-4 py-4 w-full'>
      <h1 className='text-4xl font-bold text-whyP flex justify-center'>Convenience is here</h1>
      <div className='flex justify-center w-full mt-12 gap-6'>
        <div className="max-w-sm border border-gray-200 rounded-xl shadow-2xl flex flex-col items-center">
          <img className="w-64" src={about1} alt="" />
          <div className="p-5 text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-whyP dark:text-white">Answer</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, libero!</p>
          </div>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-xl shadow-2xl flex flex-col items-center">
          <img className="w-64" src={about2} alt="" />
          <div className="p-5 text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-whyP dark:text-white">Connection</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, libero!</p>
          </div>
        </div>
        <div className="max-w-sm border border-gray-200 rounded-xl shadow-2xl flex flex-col items-center">
          <img className="w-64" src={about3} alt="" />
          <div className="p-5 text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-whyP dark:text-white">Knowledge</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, libero!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing