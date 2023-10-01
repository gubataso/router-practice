import React from 'react'
import { Link, NavLink, Outlet, RouterProvider } from 'react-router-dom'
import router from '../../routes'

const links = [
  {name: 'Dashboard', to: '/'},
  {name: 'Menus', to: '/menus'}
]


function Layout() {
  return (
    <>
    
    <div>
      <div className='h-14 flex items-center bg-slate-800 p-5'>
        <div className='flex gap-2'>
          {links.map(link => 
          <NavLink
          key={link.name}
          to={link.to}
          className={({isActive}) => isActive ? 'bg-slate-600 p-3 rounded-md': 'hover:bg-slate-500 hover:text-white rounded-md p-3'}
          >
            {link.name}
          </NavLink>
           )}
          
        </div>
        
      </div>
     
      <div>
        <Outlet />
      </div>
    </div>
    </>
    
  )
}

export default Layout