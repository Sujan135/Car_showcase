"use client"


import { useState, Fragment } from 'react'
import Image from 'next/image'
import { Combobox, Transition } from '@headlessui/react'

import { SearchManufacturerProps } from '@/types'
import React from 'react'

const SearchManufacturer = ({manufacturer ,
setManufacturer}: SearchManufacturerProps ) => {
    const [query, setQuery] = useState("")


  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    className="ml-4"
                    alt="Car Logo"
                     />
                </Combobox.Button>

                 {/* Input field for searching */}
            <input
                className='search-manufacturer__input'
                // displayValue={() => manufacturer}
                onChange={(e) => setManufacturer(e.target.value)} // Update the search query when the input changes
                placeholder='Volkswagen...'
                value={manufacturer}
            />

             {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            // afterLeave={() => setQuery("")} // Reset the search query after the transition completes
            >

             <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            ></Combobox.Options>

            </Transition>


            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer