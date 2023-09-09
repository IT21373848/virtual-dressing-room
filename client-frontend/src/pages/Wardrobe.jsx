import React from 'react'
import WardrobItem from '../components/navbar/WardrobItem'
//import tshirt from '../assets/stylish-tshirt'

const Wardrobe = () => {

    const products = [
        {
            id: 1,
            name: 'Green T shirt',
            href: '#',
            price: '$48',
            imageSrc: 'https://pngimg.com/uploads/tshirt/tshirt_PNG5454.png',
            imageAlt: 'T shirt.',
        },
        {
            id: 2,
            name: 'Blue T shirt',
            href: '#',
            price: '$35',
            imageSrc: 'https://purepng.com/public/uploads/large/purepng.com-mint-green-t-shirtt-shirtfabrict-shapegramnetsmint-green-1421526429357cthld.png',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Pink T shirt',
            href: '#',
            price: '$89',
            imageSrc: 'https://www.pngarts.com/files/5/Plain-Pink-T-Shirt-Transparent-Image.png',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Black T shirt',
            href: '#',
            price: '$35',
            imageSrc: 'https://www.freepnglogos.com/uploads/t-shirt-png/t-shirt-png-tshirt-png-clip-art-best-web-clipart-18.png',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More products...
    ]

    return (
        <div className="bg-white wardrobe ">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="">Wardrobe</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-transparent xl:aspect-h-8 xl:aspect-w-7" style={{height:'340px'}}>
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-contain object-center group-hover:opacity-75"
                                />

                            </div>
                            <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Try On</button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wardrobe