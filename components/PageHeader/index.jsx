export default function PageHeader({ title, subtitle }) {
    return (
        <>
            <h1 className='text-6xl md:text-8xl font-medium tracking-tighter break-words'>{title}</h1>
            <p className='ml-1 mt-4 text-xl text-gray-400 break-words'>{subtitle}</p>
        </>
    )
}