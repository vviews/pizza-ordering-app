export default function SectionHeader ({SubHeader, MainHeader}) {
    return (
        <>
            <h3 className="uppercase text-gray-500 font-semibold leading-4">{SubHeader}</h3>
            <h2 className="text-primary font-bold text-4xl italic">{MainHeader}</h2>
        </>
    )
}