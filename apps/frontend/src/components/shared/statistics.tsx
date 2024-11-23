import Image from 'next/image'

interface StatisticsProps {
    text: string,
    value: any,
    image: string
}

export default function Statistics({ text, value, image }: StatisticsProps) {
    return (
        <div className="flex gap-5 items-center bg-zinc-900 px-6 py-2.5 rounded-lg">
            <div className="flex flex-col flex-1">
                <span className="font-light text-zinc-400">{text}</span>
                <span className="text-2xl font-black">{value}</span>
            </div>

            <Image
                src={image} alt="Ícone"
                width={80} height={80} />
        </div>
    )
}