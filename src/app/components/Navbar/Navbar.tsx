import Image from 'next/image'
import Link from 'next/link'
import taagaLogo from '@/app/assets/images/sub-brands/taaga-logo.png'
import taagaManLogo from '@/app/assets/images/sub-brands/taaga-man-logo.png'
import herStoryLogo from '@/app/assets/images/sub-brands/herstory-logo.png'
import aarongEarchLogo from '@/app/assets/images/sub-brands/arong-earth-logo.png'
import { CiHeart, CiLocationOn, CiSearch } from "react-icons/ci";
import { RxAvatar } from 'react-icons/rx'
import { IoBagHandleOutline } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'


export default function Navbar() {
    return (
        <div className='px-10 py-2 flex items-center gap-16'>

            {/* right side */}
            <div className=''>
                <Image src={'/logo2.png'} alt='Brand Logo' width={90} height={20} ></Image>
            </div>

            {/* left side */}
            <div className='w-full'>
                <div className='flex justify-between space-y-4'>

                    {/* left side - top left */}
                    <div>
                        <ul className='flex items-center gap-10'>
                            <li><Link href={'/taaga'}><Image src={taagaLogo} alt='Taaga Logo'></Image></Link></li>
                            <li><Link href={'/taaga-man'}><Image src={taagaManLogo} alt='Taaga Man Logo'></Image></Link></li>
                            <li><Link href={'/herStory'}><Image src={herStoryLogo} alt='Her Story Logo'></Image></Link></li>
                            <li><Link href={'/aarong-earth'}><Image src={aarongEarchLogo} alt='Aarong Earth Logo'></Image></Link></li>
                        </ul>
                    </div>
                    {/* left side - top right */}

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 border-b focus-within:border  focus-within:shadow-md p-1">
                            <CiSearch size={25} className='text-black' />
                            <input type="search" placeholder="Search products" className="outline-none text-sm w-30" />
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-1'>
                                <span className='text-lg'>BGD</span>
                                <span><CiLocationOn size={25} className='text-black' /></span>
                            </div>
                            <p><RxAvatar size={25} className='text-black' /></p>
                            <p><CiHeart size={25} className='text-black' /></p>
                            <p><IoBagHandleOutline size={25} className='text-black' /></p>
                            <p><BsThreeDots size={25} className='text-black' /></p>
                        </div>
                    </div>

                </div>

                {/* left side - bottom */}
                <div>
                    <ul className='flex gap-5'>
                        <li><Link href={'/women'}>WOMEN</Link></li>
                        <li><Link href={'/men'}>MEN</Link></li>
                        <li><Link href={'/kids'}>KIDS</Link></li>
                        <li><Link href={'/home-decor'}>HOME DECOR</Link></li>
                        <li><Link href={'/jewellery'}>JEWELLERY</Link></li>
                        <li><Link href={'/skin-and-hair'}>SKIN & HAIR</Link></li>
                        <li><Link href={'/gifts-and-crafts'}>GIFTS & CRAFTS</Link></li>
                        <li><Link href={'/wedding'}>WEDDING</Link></li>
                        <li><Link href={'/brands'}>BRANDS</Link></li>
                        <li><Link href={'/eid-26'}>EID 26</Link></li>
                    </ul>
                </div>

            </div>
        </div >
    )
}
