import React, {useState, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button.js'

const Header = () => {

	const pathname = useLocation();
	const [openMenu, setOpenMenu] = useState(false);

	const Navbar = (props) => {
        return (
        		<nav className={`${props.classes || ''}`}>
					{navigationMenu.map((item) => (
						<a key={item.id} href={item.url}
						className={`p-4 rounded-lg hover:is-active ${item.url === pathname.hash ? 'is-active' : 'text-appskep-secondary'}`}>
							{item.title}
						</a>
					))}

				</nav>
        	);
    };

    const menuButton = useRef(null);
	const openMenuToggle = () => {
		setOpenMenu(!openMenu);
	}
	const navigationMenu = [
		{id:1, title: 'Home', url: '#top'},
		{id:2, title: 'Layanan', url: '#layanan'},
		{id:3, title: 'Harga', url: '#harga'},
		{id:4, title: 'Join Us', url: '#join'},
		{id:5, title: 'Kontak', url: '#contact'},
		]

	return(
		<div className="">

			<div className="fixed top-0 left-0 right-0 z-10 backdrop-blur-3xl shadow-lg shadow-slate-100/50">

				<div className='my-2 flex justify-start items-center max-w-screen-lg items-center py-1 lg:mx-auto sm:ml-5'>
					<a className="block w-[12rem]" href="#hero">
					<img src="/logo-appshomecare.svg" alt="Apps Homecare" height="50px"/>
					</a>

					<Navbar classes="hidden lg:flex flex-row justify-items-center mx-auto space-x-2"/>

					<span className="flex items-center ml-auto mr-5 space-x-5">
						<Button title="Pesan Sekarang" classes="ml-auto hidden md:block"/>
						<h2	className={`lg:hidden sm:block hover:cursor-pointer px-2 rounded-lg hover:is-active  ${openMenu ? 'is-active':'text-appskep-secondary'} `} onClick={openMenuToggle} > = </h2>
					</span>

				</div>

			</div>

			<div className={`${openMenu ? 'block' : 'hidden'} fixed top-0 left-0 z-20 inset-0 bg-transparent lg:hidden transition peer`} 
				>
				<div className={`fixed top-0 left-0 h-screen w-screen bg-black/25 transition ease-out delay-150 ${openMenu ? 'opacity-100' : 'opacity-0'}`}
					onClick={openMenuToggle}
				>
					
				</div>
				<div className={`fixed top-0 w-[250px] min-h-screen bg-white opacity-100 shadow-lg shadow-slate-100/50 transition ease-out delay-150 ${openMenu ? 'translate-x-0': '-translate-x-96'}`}
					onClick={(e) => e.stopPropagation()}
					>
					<Navbar classes="flex flex-col pt-5 px-2 space-y-1"/>
					<Button title="Pesan Sekarang" classes="ml-5 mt-5"/>
				</div>
			</div>

		</div>
		);
}

export default Header