import Image from 'next/image'
import Link from 'next/link'
import taagaLogo from '@/app/assets/images/sub-brands/taaga-logo.png'
import taagaManLogo from '@/app/assets/images/sub-brands/taaga-man-logo.png'
import herStoryLogo from '@/app/assets/images/sub-brands/herstory-logo.png'
import aarongEarchLogo from '@/app/assets/images/sub-brands/arong-earth-logo.png'
import women from '@/app/assets/images/navbar-dropdown-images/Women.webp'
import { CiHeart, CiLocationOn, CiSearch } from "react-icons/ci";
import { RxAvatar } from 'react-icons/rx'
import { IoBagHandleOutline } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'

export default function Navbar() {
    return (
        <header className='relative z-50'>

            <div className='px-10 py-2 flex items-center gap-16'>

                {/* LOGO */}
                <div>
                    <Image src={'/logo2.png'} alt='Brand Logo' width={90} height={20} />
                </div>

                {/* RIGHT SIDE */}
                <div className='w-full'>

                    {/* TOP ROW */}
                    <div className='flex justify-between items-center '>

                        {/* Sub Brands */}
                        <ul className='flex items-center gap-12'>
                            <li><Link href='/taaga'><Image src={taagaLogo} alt='Taaga Logo' /></Link></li>
                            <li><Link href='/taaga-man'><Image src={taagaManLogo} alt='Taaga Man Logo' /></Link></li>
                            <li><Link href='/herStory'><Image src={herStoryLogo} alt='Her Story Logo' /></Link></li>
                            <li><Link href='/aarong-earth'><Image src={aarongEarchLogo} alt='Aarong Earth Logo' /></Link></li>
                        </ul>

                        {/* Search + Icons */}
                        <div className="flex items-center gap-2">

                            <div className="flex items-center gap-2 border-b focus-within:shadow-md focus-within:border-b-white p-1">
                                <CiSearch size={25} />
                                <input type="search" placeholder="Search products" className="outline-none text-sm w-28" />
                            </div>

                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-1'>
                                    <span className='text-sm'>BGD</span>
                                    <CiLocationOn size={25} />
                                </div>

                                <RxAvatar size={25} />
                                <CiHeart size={25} />
                                <IoBagHandleOutline size={25} />
                                <BsThreeDots size={25} />
                            </div>

                        </div>
                    </div>

                    {/* BOTTOM ROW */}
                    <nav className='mt-3 '>
                        <ul className='flex gap-8'>
                            <li className="group">
                                <Link href="/women" className="">WOMEN</Link>

                                {/* MEGA DROPDOWN */}
                                {/*  invisible group-hover:visible */}
                                <div className="absolute left-0 top-full w-full invisible group-hover:visible  shadow-xl  transition-all">

                                    <div className="px-10 py-6 grid grid-cols-5 gap-12">

                                        {/* COLUMN 1 */}
                                        <div className="space-y-3 border-r border-r-gray-200">
                                            <h4 className="font-semibold hover:text-orange-500">NEW ARRIVALS</h4>

                                            <div className='space-y-2'>
                                                <h4 className="font-semibold hover:text-orange-500">SAREE</h4>
                                                <ul className="space-y-2 text-sm">
                                                    <li><Link href="#" className='hover:text-orange-500'>Cotton</Link></li>
                                                    <li><Link href="#">Muslin</Link></li>
                                                    <li><Link href="#">Silk</Link></li>
                                                    <li><Link href="#">Katan</Link></li>
                                                    <li><Link href="#">Nakshi Kantha</Link></li>
                                                    <li><Link href="#">Jamdani</Link></li>
                                                    <li><Link href="#">Brac Silk</Link></li>
                                                    <li><Link href="#">Nakshi Kantha</Link></li>
                                                </ul>
                                            </div>
                                            <div className='space-y-2'>
                                                <h4 className="font-semibold">SHALWAR KAMEEZ</h4>
                                                <ul className="space-y-2 text-sm">
                                                    <li><Link href="#">Cotton & Blends</Link></li>
                                                    <li><Link href="#">Silk</Link></li>
                                                    <li><Link href="#">Muslin</Link></li>
                                                </ul>
                                            </div>
                                            <h4 className="font-semibold">KURTA</h4>
                                        </div>

                                        {/* COLUMN 2 */}
                                        <div className="space-y-3 border-r border-r-gray-200">
                                            <h4 className="font-semibold">PANJABI</h4>
                                            <h4 className="font-semibold">TOPS</h4>
                                            <h4 className="font-semibold">COATS & JACKETS</h4>
                                            <h4 className="font-semibold">CO-ORDS</h4>
                                            <h4 className="font-semibold">SHRUGS</h4>
                                            <h4 className="font-semibold">SHRUGS</h4>
                                            <h4 className="font-semibold">SKIRTS</h4>
                                            <h4 className="font-semibold">PANTS</h4>
                                            <div className='space-y-2'>
                                                <h4 className="font-semibold">MATERNITY</h4>
                                                <ul className="space-y-2 text-sm">
                                                    <li><Link href="#">Tops</Link></li>
                                                    <li><Link href="#">Tunis</Link></li>
                                                    <li><Link href="#">Dresses</Link></li>
                                                    <li><Link href="#">Pants</Link></li>
                                                    <li><Link href="#">Sleepwears</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* COLUMN 3 */}
                                        <div className="space-y-3 border-r border-r-gray-200">
                                            <h4 className="font-semibold">PANJABI</h4>
                                            <h4 className="font-semibold">TOPS</h4>
                                            <h4 className="font-semibold">COATS & JACKETS</h4>
                                            <h4 className="font-semibold">CO-ORDS</h4>
                                            <h4 className="font-semibold">SHRUGS</h4>
                                            <h4 className="font-semibold">SHRUGS</h4>
                                            <h4 className="font-semibold">SKIRTS</h4>
                                            <h4 className="font-semibold">PANTS</h4>
                                            <div className='space-y-2'>
                                                <h4 className="font-semibold">MATERNITY</h4>
                                                <ul className="space-y-2 text-sm">
                                                    <li><Link href="#">Tops</Link></li>
                                                    <li><Link href="#">Tunis</Link></li>
                                                    <li><Link href="#">Dresses</Link></li>
                                                    <li><Link href="#">Pants</Link></li>
                                                    <li><Link href="#">Sleepwears</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* COLUMN 4 */}
                                        <div className="space-y-3 border-r border-r-gray-200">
                                            <h4 className="font-semibold">PANJABI</h4>
                                            <h4 className="font-semibold">TOPS</h4>
                                            <h4 className="font-semibold">COATS & JACKETS</h4>
                                            <h4 className="font-semibold">CO-ORDS</h4>
                                            <h4 className="font-semibold">SHRUGS</h4>
                                            <h4 className="font-semibold">SHRUGS</h4>
                                            <h4 className="font-semibold">SKIRTS</h4>
                                            <h4 className="font-semibold">PANTS</h4>
                                            <div className='space-y-2'>
                                                <h4 className="font-semibold">MATERNITY</h4>
                                                <ul className="space-y-2 text-sm">
                                                    <li><Link href="#">Tops</Link></li>
                                                    <li><Link href="#">Tunis</Link></li>
                                                    <li><Link href="#">Dresses</Link></li>
                                                    <li><Link href="#">Pants</Link></li>
                                                    <li><Link href="#">Sleepwears</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* IMAGE COLUMN */}
                                        <div className="flex justify-end">
                                            <Image src={women} alt="Women Collection" />
                                        </div>

                                    </div>
                                </div>
                            </li>
                            {/* WOMEN MEGA MENU */}

                            {/* Other Links */}
                            <li><Link href='/men'>MEN</Link></li>
                            <li><Link href='/kids'>KIDS</Link></li>
                            <li><Link href='/home-decor'>HOME DECOR</Link></li>
                            <li><Link href='/jewellery'>JEWELLERY</Link></li>
                            <li><Link href='/skin-and-hair'>SKIN & HAIR</Link></li>
                            <li><Link href='/gifts-and-crafts'>GIFTS & CRAFTS</Link></li>
                            <li><Link href='/wedding'>WEDDING</Link></li>
                            <li><Link href='/brands'>BRANDS</Link></li>
                            <li><Link href='/eid-26'>EID 26</Link></li>

                        </ul>
                    </nav>

                </div>
            </div>
        </header >
    )
}