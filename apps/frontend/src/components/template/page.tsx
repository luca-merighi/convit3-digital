import { ReactNode } from 'react'

import Logo from './logo'

export interface PageProps {
    className?: string,
    children: ReactNode
}

export default function Page({ className, children }: PageProps) {
    return (
        <div className="
            min-h-screen py-10 bg-black
            bg-[url('/background.png')] bg-no-repeat bg-center
            flex flex-col items-center">
            <Logo />

            <main className={`
                ${className}
                container
                flex flex-1 flex-col justify-center py-10`}>
                {children}
            </main>
        </div>
    )
}