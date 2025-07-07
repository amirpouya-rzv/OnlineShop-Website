import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import AppButton from "@/components/AppButton";

// تعریف نوع محصول
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function ProductItem() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });
  const products: Product[] = await res.json();


  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="hover:shadow-2xl transition-shadow flex flex-col h-full"
        >
          <CardHeader>
            <CardTitle className="text-base mt-5 font-semibold line-clamp-2">
              {product.title}
            </CardTitle>
          </CardHeader>

          {/* تصویر با ارتفاع ثابت */}
          <div className="flex justify-center items-center h-48 bg-gray-50  rounded-md overflow-hidden p-2">
            <img
              alt={product.title}
              src={product.image}
              className="object-contain h-full p-1"
            />
          </div>

          <CardContent className="flex flex-col gap-2 flex-grow">
            <CardDescription className="text-sm text-gray-500 capitalize">
              {product.category}
            </CardDescription>
            <p className="text-sm text-gray-700 line-clamp-3 text-justify">
              {product.description}
            </p>
          </CardContent>

          <CardFooter className="flex flex-col gap-2 mt-auto mb-5">
            <div className="w-full flex justify-between items-center text-lg font-bold">
              <span>Price:</span>
              <span className="text-green-500">${product.price}</span>
            </div>
          </CardFooter>
          <AppButton type="button" href={`/product/${product.id}`} className="w-10/12
          mx-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mb-5"> more details</AppButton>

        </Card>
      ))}
    </div>
  );
}

export default ProductItem;
