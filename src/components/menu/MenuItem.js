export default function MenuItem () {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/50 transition-all">
            <div className="text-center">
                <img src="/pizza-hero.png" className="max-h-24 w-auto block mx-auto" alt="pizza"/>
            </div>
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. magna
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2"> Add to cart $12</button>
        </div>
    )
}