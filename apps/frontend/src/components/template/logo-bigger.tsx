import Link from 'next/link'
import { Righteous } from 'next/font/google'
import Image from 'next/image'

const righteous = Righteous({ subsets: ['latin'], weight: '400' })

export default function LogoBigger() {
    return (
        <Link
            href="/"
            className={`
                ${righteous.className}
                flex flex-col gap-2 items-center`}>
            <Image
                src="/logo.svg" alt="Logo"
                width={100} height={100} />
            <h1 className="
                text-5xl text-white uppercase">
                Convit<span className="text-blue-500">3</span> Digital
            </h1>
        </Link>
    )
}