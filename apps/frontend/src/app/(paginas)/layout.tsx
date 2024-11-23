import { ReactNode } from 'react'

import Page from '@/components/template/page'

interface EventoLayoutProps {
    children: ReactNode
}

export default function Layout({ children }: EventoLayoutProps) {
    return (
        <Page>
            {children}
        </Page>
    )
}