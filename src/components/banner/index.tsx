import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import images1 from './image/images1.jpg'
import images2 from './image/images2.jpg'
import images3 from './image/images3.jpg'
import images4 from './image/images4.jpg'
import images5 from './image/images5.jpg'

import Image from "next/image"

export function Banner() {
    return (
        <Carousel className="w-11/12 md:w-full mx-2.5 md:mx-0">
            <CarouselContent>
                {[images2, images1, images3, images4, images5].map((image, index) => (
                    <CarouselItem key={index}>
                        <div>
                            <Card>
                                <CardContent className="relative h-[300px] flex aspect-square items-center justify-center ">
                                    <Image
                                        alt="banner"
                                        src={image}
                                        fill
                                        quality={100}
                                        className="object-cover rounded-2xl"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}



