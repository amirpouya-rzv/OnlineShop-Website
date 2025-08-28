import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

// این باید دقیقا با اسم [productId] یکی باشه
export async function generateStaticParams() {
  return [
    { productId: "1" },
    { productId: "2" },
    { productId: "3" },
    { productId: "4" },
  ];
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { productId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { productId } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  const product: Product = await res.json();
  const sort = searchParams?.sort || 'default';

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="fixed md:right-2 left-2 top-52 md:top-28">
        <Link href="/login">
          <Button className="flex items-center text-xl bg-dark-blue hover:bg-blue-950 cursor-pointer dark:bg-light-blue dark:hover:bg-sky-300">
            <ShoppingCart /> +
          </Button>
        </Link>
      </div>

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
