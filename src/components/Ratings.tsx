import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar } from '@chakra-ui/react'
import ava1 from '@/assets/img/ava1.jpg'
import ava2 from '@/assets/img/ava2.jpg'
import ava3 from '@/assets/img/ava3.jpg'
import efef from '@/assets/img/avaantuh.jpg'
import Stars from './Stars'


function Ratings() {
  return (
    <div>
        <Carousel>
            <CarouselContent className='max-w-[1200px]'>
                <CarouselItem className='basis-1/3'>
                    <div className='flex justify-center mt-12 gap-6 p-4 border border-whyP rounded-xl'>
                        <article>
                            <div className="flex justify-between items-center mb-4">
                                <div className='flex items-center gap-2'>
                                    <Avatar name='John Doe' src={ava1} />
                                    <h3 className='text-lg font-semibold'>John Doe</h3>
                                </div>
                                <div>
                                    <Stars />
                                </div>
                            </div>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere necessitatibus vel vero perferendis recusandae consequuntur.</p>
                        </article>
                    </div>
                </CarouselItem>
                <CarouselItem className='basis-1/3'>
                    <div className='flex justify-center mt-12 gap-6 p-4 border border-whyP rounded-xl'>
                        <article>
                            <div className="flex justify-between items-center mb-4">
                                <div className='flex items-center gap-2'>
                                    <Avatar name='Agus Setiawan' src={ava2} />
                                    <h3 className='text-lg font-semibold'>Agus Setiawan</h3>
                                </div>
                                <div>
                                    <Stars />
                                </div>
                            </div>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere necessitatibus vel vero perferendis recusandae consequuntur.</p>
                        </article>
                    </div>
                </CarouselItem>
                <CarouselItem className='basis-1/3'>
                    <div className='flex justify-center mt-12 gap-6 p-4 border border-whyP rounded-xl'>
                        <article>
                            <div className="flex justify-between items-center mb-4">
                                <div className='flex items-center gap-2'>
                                    <Avatar name='joko Susanto' src={ava3} />
                                    <h3 className='text-lg font-semibold'>Joko Susanto</h3>
                                </div>
                                <div>
                                    <Stars />
                                </div>
                            </div>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere necessitatibus vel vero perferendis recusandae consequuntur.</p>
                        </article>
                    </div>
                </CarouselItem>
                <CarouselItem className='basis-1/3'>
                    <div className='flex justify-center mt-12 gap-6 p-4 border border-whyP rounded-xl'>
                        <article>
                            <div className="flex justify-between items-center mb-4">
                                <div className='flex items-center gap-2'>
                                    <Avatar name='sumanto' src='https://bit.ly/ryan-florence' />
                                    <h3 className='text-lg font-semibold'>Sumanto</h3>
                                </div>
                                <div>
                                    <Stars />
                                </div>
                            </div>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere necessitatibus vel vero perferendis recusandae consequuntur.</p>
                        </article>
                    </div>
                </CarouselItem>
                <CarouselItem className='basis-1/3'>
                    <div className='flex justify-center mt-12 gap-6 p-4 border border-whyP rounded-xl'>
                        <article>
                            <div className="flex justify-between items-center mb-4">
                                <div className='flex items-center gap-2'>
                                    <Avatar name='hengker_tzy' src='https://bit.ly/code-beast' />
                                    <h3 className='text-lg font-semibold'>hengker_tzy</h3>
                                </div>
                                <div>
                                    <Stars />
                                </div>
                            </div>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere necessitatibus vel vero perferendis recusandae consequuntur.</p>
                        </article>
                    </div>
                </CarouselItem>
                <CarouselItem className='basis-1/3'>
                    <div className='flex justify-center mt-12 gap-6 p-4 border border-whyP rounded-xl'>
                        <article>
                            <div className="flex justify-between items-center mb-4">
                                <div className='flex items-center gap-2'>
                                    <Avatar name='efef' src={efef}/>
                                    <h3 className='text-lg font-semibold'>༒ ᶜᴿᴬᶻᵞkíllє® ™ ༒</h3>
                                </div>
                                <div>
                                    <Stars />
                                </div>
                            </div>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere necessitatibus vel vero perferendis recusandae consequuntur.</p>
                        </article>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    </div>
    )
}

export default Ratings