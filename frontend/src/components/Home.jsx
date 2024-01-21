import React from 'react';
import Form from './Form';

const Home = () => {
  return (
    <section className='w-full items-center  flex-col '>
    {/* <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p> */}
  <div className='w-[55%]  mt-[4rem]  h-full flex justify-center  items-center '>
   <div class="w-[30rem] p-1 rounded  items-center overflow-hidden shadow-lg  ">
     <div className='relative'>
     <img class="w-full " src="/assets/images/bottle.jpg" alt="Sunset in the mountains"/>
     <div className='absolute bottom-0 left-[40%] '>
     <img className="w-[6rem] h-[6rem] rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sunset in the mountains"/>
     </div>
     </div>
   
    <div class="flex flex-col justify-center items-center text-center px-6 py-4">
    <div class="text-xl mb-2 text-center head_text ">Samar Qaddour</div>
    <div className='font-500 leading-[1.15] text-black sm:text-xl flex flex-row gap-16 p-3 left-[2rem] text-center items-center '>
         <div className='p-2 border-gray-300 border-l-2 border-r-2'>
         <button className='flex flex-col   items-center'>
        <span>
          Messages
        </span>
        <span className='font-bold'>
          0
        </span>
       </button>
         </div>
         <div className='p-2 border-gray-300 border-l-2 border-r-2'>
          <button>
            <span>Twiiter</span>

          </button>
         </div>
         <div className='p-2 border-gray-300 border-l-2 border-r-2'>
         <button>
            <span>Facebook</span>    
          </button>
         </div>
        </div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  </div>
    <div className='absoulate w-[45%]'>

    </div>
  </section>
  )
}

export default Home
