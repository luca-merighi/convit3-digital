import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
    title: 'Seu Evento começa aqui',
    description: 'Aplicação Fullstack de agendamento de eventos',
    authors: [{ name: 'Luca Merighi' }]
}

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
    children: Readonly<ReactNode>
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-BR" className="antialiased">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}