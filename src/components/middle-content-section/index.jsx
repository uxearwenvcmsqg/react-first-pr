import React from 'react'
import { Button } from '../button'
import { Card } from '../Card'

export const MiddleContentSection = () => {
  return (
    <div className='flex flex-col items-center gap-3 mt-10'>
        <h1 className='text-7xl'>
            High-perfoming remote teams.
        </h1>
        <h2 className='text-7xl'>
            The future of work.
        </h2>
        <div className='flex items-center flex-col my-5'>
            <h3 className='text-2xl'> Powerfull, self-serve team engagement tools and analytics. Supercharge your</h3>
            <h3 className='text-2xl'> manages & keep employes engaged from anywhere.</h3>
        </div>
        <Button hasBorder = { true }> Try For Free </Button>

        <a href="#" className='text-gray hover:text-red ease-in duration-150 my-10'> 
            Trusted by 4,000+ companies
        </a>

        <div>
            <Card />
        </div>

    </div>
  )
}

