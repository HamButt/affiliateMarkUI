import { Link } from "react-router-dom";
import React from 'react'
// import { Menubar } from 'primereact/menubar';
import {motion} from 'framer-motion';

// const items = [
    
//     {
//         label: 'Baby',
//         className: " bg-none pt-2",
//         items: [
//             {
//                 label: 'Feeders',
//                 url:'/baby-feeders',
//             },
//             {
//                 label: 'Rompers',
//                 url:'/baby-rompers',
//             },
//             {
//                 label: '11 pieces',
//                 url:'/baby-11-pieces',
//             },
//             {
//                 label: '7 pieces',
//                 url:'/baby-7-pieces',
//             },
//             {
//                 label: 'Templates',
//                 icon: 'pi pi-palette',
//                 items: [
//                     {
//                         label: 'Apollo',
//                         icon: 'pi pi-palette'
//                     },
//                     {
//                         label: 'Ultima',
//                         icon: 'pi pi-palette'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label: 'Projects',
//         icon: 'pi pi-search',
//         items: [
//             {
//                 label: 'Components',
//                 icon: 'pi pi-bolt'
//             },
//             {
//                 label: 'Blocks',
//                 icon: 'pi pi-server'
//             },
//             {
//                 label: 'UI Kit',
//                 icon: 'pi pi-pencil'
//             },
//             {
//                 label: 'Templates',
//                 icon: 'pi pi-palette',
//                 items: [
//                     {
//                         label: 'Apollo',
//                         icon: 'pi pi-palette'
//                     },
//                     {
//                         label: 'Ultima',
//                         icon: 'pi pi-palette'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label: 'Contact',
//         icon: 'pi pi-envelope'
//     }
// ];

const Header = () => {
    // const [pathName, setPathName] = useState(false)

    // useEffect(()=>{
    //     const path = window.location.pathname.split('/').reverse()[0]
        
    //     if(path === 'hoodies'){
    //         setPathName(true)
    //     }else{
    //         setPathName(false)
    //     }
        
    // }, [])

    return (

    <header className="transition-all fixed top-0 right-0 left-0 z-50 bg-white dark:bg-white py-2 shadow">
        <div className="flex items-center justify-between ps-5 pe-2 sm:ps-10 sm:pe-4">

            <div className="flex-1">
                <Link to={'/'} className="text-2xl font-semibold text-black">Affiliate guy</Link>
            </div>

            <div className="flex items-end sm:items-center justify-center space-x-2">
                    <Link className="text-lg font-semibold transition-all text-black sm:hover:bg-gray-100 p-2 rounded-md" to={'/baby-collection'} >
                        <motion.button> Baby collection </motion.button>
                        <p className='relative left-0 right-0 top-[16px] sm:top-4 h-[4px] rounded-tl-full rounded-tr-full bg-[#000]'></p>
                    </Link>
                    {/* <Link className="text-lg font-semibold transition-all sm:hover:bg-gray-100 sm:p-2 rounded-md" to={pathName ? `/` : "/hoodies"} >
                        <motion.button> Hoodies </motion.button>
                        {pathName && <p className='relative left-0 right-0 top-[14px] sm:top-4 h-[4px] rounded-tl-full rounded-tr-full bg-[#2a9d8f]'></p>}
                    </Link> */}
            </div>
        </div>

    </header>
    )
}

export default Header