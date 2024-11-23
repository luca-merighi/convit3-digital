import Link from 'next/link'

import LogoBigger from '@/components/template/logo-bigger'

export default function Home() {
    return (
        <div className="
            h-screen flex flex-col gap-10 items-center justify-center
            bg-[url('/background-elementos.svg')] bg-cover">
            <div className="flex flex-col gap-4 items-center">
                <LogoBigger />
                <p className="text-zinc-500 font-light text-center w-96 leading-6 select-none">
                    Crie e gerencie o convite do seu evento de forma rápida e fácil, sem complicações!
                </p>
            </div>
            <Link
                href="/evento"
                className="button button-blue text-lg uppercase">
                Crie o seu Evento
            </Link>
        </div>
    )
}