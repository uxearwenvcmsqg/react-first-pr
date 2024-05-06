import React from 'react';
import { ReactComponent as LogoIcon } from '../../remained/img/logo.svg';
import { NavItem } from '../nav-item';
import { NavMenu } from '../nav-menu'
import { PRODUCTS, RESOURSES } from './constants';
import { Button } from '../button';

export 
const Header = () => {
  return (
    <header className='flex items-center'>
        <div className='flex items-center'>
            <LogoIcon/>
            <h2 className='ml-2 text-3xl'>Remote+</h2>
        </div>
        <nav className='flex gap-8 ml-20 items-center text-lg'>
            <NavItem text = "Products">
                <NavMenu items = { PRODUCTS } />
            </NavItem>
            <NavItem text = "Resourses">
                <NavMenu items = { RESOURSES } />
            </NavItem>
            <NavItem text = "Pricing" />
            <NavItem text = "Blog" />
        </nav>
        <div className="flex ml-auto space-x-5 text-lg">
            <Button> Log in </Button>
            <Button hasBorder = { true }> Try For Free </Button>
        </div>
    </header>
  )
}

