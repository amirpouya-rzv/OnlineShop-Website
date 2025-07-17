import React from 'react'

async function NewProduct() {

    type singleProduct = {
        id: number,
        title: string,
        price: number
        description: string,
        category: string,
        image: string
    }

    const res = await fetch('https://fakestoreapi.com/products?limit=4', {
        next: {
            revalidate: 10
        }
    })
    const data = await res.json()
    return (
        <div>
            <span className="flex justify-start text-xl font-bold dark
            dark:text-white text-dark-blue mb-4">
                Why Shop With Us?
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 mt-10">
                {data.map((item: singleProduct) => (
                    <div
                        className="border rounded-lg p-4 flex flex-col  dark:text-white bg-background-color dark:bg-dark-card shadow hover:shadow-lg transition"
                        key={item.id}
                    >
                        <div className='text-left text-green-400 text-xl'> New </div>
                        <img src={item.image} alt={item.title} className="bg-cover h-36 object-contain mb-2" />
                        <h1 className="text-center font-semibold dark:text-white text-sm">{item.title}</h1>
                        <h1 className="text-green-500 mt-1 text-center">${item.price}</h1>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default NewProduct