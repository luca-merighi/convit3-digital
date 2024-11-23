import Link from 'next/link'
import { Righteous } from 'next/font/google'
import Image from 'next/image'

const righteous = Righteous({ subsets: ['latin'], weight: '400' })

export default function Logo() {
    return (
        <Link
            href="/"
            className={`
                ${righteous.className}
                flex gap-2 items-center`}>
            <Image
                src="/logo.svg" alt="Logo"
                width={50} height={50} />
            <h1 className="
                flex flex-col items-center
                text-lg leading-5 text-white uppercase">
                <div>Convit<span className="text-blue-500">3</span></div>
                <div>Digital</div>
            </h1>
        </Link>
    )
}