import React from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

async function ProductId({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  const product: Product = await res.json();

  console.log('searchParams:', searchParams); // برای تست

  const sort = searchParams.sort || 'default'; // مثلا sort=desc

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-cover mb-4"
      />
      <p className="mb-2 text-center">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
      <p className="mt-4 text-blue-500">Sort Query Param: {sort}</p>
    </div>
  );
}

export default ProductId;
