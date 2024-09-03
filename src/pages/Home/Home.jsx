import React from 'react'
import { NavLink } from 'react-router-dom'
import { Testimonial } from './Testimonial'
import { Price } from './Price'
import { State } from './State'
export const Home = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-green-50 to-green-100">
    

    <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Find Your Dream Place 
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl"> RealStates.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <NavLink to="/login" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button">Login in</NavLink>

                    </div>
                </div>

                <div classNameName='rounded-lg'>
                    <img className="w-full rounded-lg" src="./app.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>
<State/>
<Price/>
<Testimonial/>
    </>


  )
}
