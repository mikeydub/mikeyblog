import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <div className="container flex max-w-xl my-6 px-10 md:px-20 justify-between">
                <div className="flex-none underline text-gray-400 hover:text-black">
                    <Link href='/'>
                        <a>home</a>
                    </Link>
                </div>
                <div className='text-gray-500'>
                    /
                </div>
                <div className="flex-none underline text-gray-400 hover:text-black">
                    <Link href='/mikeydata'>
                        <a>mikeydata</a>
                    </Link>
                </div>
                <div className='text-gray-500'>
                    /
                </div>
                {/* <div className="flex-none underline text-gray-400 hover:text-black">
                        <Link href='/thoughts'>
                            <a>thoughts</a>
                        </Link>
                </div>
                <div>
                    ·
                </div>
                <div className="flex-none underline text-gray-400 hover:text-black">
                        <Link href='/projects'>
                            <a>projects</a>
                        </Link>
                </div>
                <div>
                    ·
                </div> */}
                <div className="flex-none underline text-gray-400 hover:text-black">
                        <Link href='/about'>
                            <a>about</a>
                        </Link>
                </div>
            </div>
        </nav>
    )
}