import { Button } from '@/components/ui/button'
import home from '@/assets/img/home.png'
import about1 from '@/assets/img/about1.png'
import about2 from '@/assets/img/about2.png'
import about3 from '@/assets/img/about3.png'
import LandingNav from '@/components/LandingNav'
import Ratings from '@/components/Ratings'
import laptop from '@/assets/img/laptop.png'
import google from '@/assets/img/google.png'
import whY from '@/assets/img/whY.png'

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
    <div id='about' className='px-4 py-4 mb-4 w-full'>
      <h1 className='text-4xl font-bold text-whyP flex justify-center' >Convenience is here</h1>
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
    <section className="bg-center bg-no-repeat bg-[url(@/assets/img/earth.jpg)] bg-gray-700 bg-blend-multiply max-w-[1200px] mx-auto h-96 rounded-xl flex justify-center flex-col mb-4">
        <div className='text-white max-w-lg ml-12'>
          <p className='text-5xl font-medium'>Reach all the convenience just by</p>
          <h1 className='text-7xl font-bold'>whY</h1>
        </div>
        <Button variant='secondary' size='secondary' className='ml-12 mt-4'>Sign Up</Button>
    </section>
    <div id='testi' className='px-4 py-4 mt-16 w-full mx-auto'>
      <h1 className='text-4xl font-bold text-whyP flex justify-center'>User Terstionial</h1>
      <div className='flex justify-center w-full mt-2 gap-6 p-4'>
        <Ratings />
      </div>
    </div>
    <div className='w-full mt-28 px-4 py-4 flex justify-center items-center'>
        <div className='flex justify-center flex-row items-center gap-12'>
          <div className='flex flex-col max-w-lg flex-1'>
            <p className='text-4xl text-whyP '>Discuss with everyone around the world!</p>
            <h1 className='text-5xl font-bold text-whyP'>Find Your Answer</h1>
            <div className='mt-10 gap-4 flex flex-col'>
              <h1 className='text-3xl text-whyP'>Join your first community!</h1>
              <div className='flex gap-4'>
                <Button>Login</Button>
                <Button variant='outline'><img src={google} alt="" className='mr-2'/>Sign-Up</Button>
              </div>
            </div>
          </div>
          <div className='flex-1 flex'>
            <img src={laptop} alt="home" className='w-[500px] m-auto'/>
          </div>
        </div>
    </div>
    <footer className="w-full bg-whyT">
        <div className="w-full max-w-screen-xl mx-auto p-4 my-4">
            <div className="flex items-center justify-between">
              <div className='flex flex-col sm:mb-0 space-x-3'>
                <a href="#" className="flex">
                    <img src={whY} className="h-10" alt="Flowbite Logo" />
                    <span className="self-center text-3xl font-bold whitespace-nowrap text-white">whY</span>
                </a>
                <p className="text-white max-w-[381px] mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus doloremque quisquam porro earum vel amet officia ipsam, voluptas eius.</p>
              </div>
                
                <ul className="flex flex-wrap items-center text-xl font-medium text-white">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Testimoni</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='w-full bg-[#12253F] mx-auto py-8'>
            <span className="block text-xl text-white font-semibold text-center">All Rights Reserved &copy; 2024 <a href="#" className="hover:underline">whY</a></span>
        </div>
    </footer>
    </>
  )
}

export default Landing