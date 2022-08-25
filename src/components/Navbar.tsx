import React from 'react'
import Styles from '../Style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className={`${Styles.navContainer}`}>
			<div id='brand' className={`flex ${Styles.padding}`}>
				<a href='#' className='hover:text-slate-400'>
					MakanAja
					<div className='flex justify-end w-full sm:hidden'>
						<FontAwesomeIcon icon={faBars} />
					</div>
				</a>
			</div>
			<div id='menu' className='md:flex justify-center'>
				<a href='#' className={`${Styles.menuPadding}`}>
					Home
				</a>
				<a href='#' className={`${Styles.menuPadding} min-w-fit`}>
					Daftar Menu
				</a>
				<a href='#' className={`${Styles.menuPadding}`}>
					About
				</a>
			</div>
			<div id='button' className={`${Styles.padding} md:flex justify-end`}>
				<a href='#' className='hover:text-slate-400'>Sign Up</a>
			</div>
    </div>
  )
}

export default Navbar