import Link from "next/link"

import { Rating } from "./rating"

export const Hero = () => {
    return (
        <div className="py-4 md:py-8">
            <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-[30px]">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-[45px] text-center max-w-[600px] mx-auto">
                        Unlock the Power of Learning with Our {" "}
                        <span className="inline-block relative text-primary">
                            LMS
                            <img
                                src="/curve.png"
                                className="absolute top-full left-0 w-full xl:mt-1"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                </h1>
                <p className="text-normal text-muted-foreground text-center max-w-[600px]">
                    Streamline your training and development with our cutting-edge learning management system. Engage your
                    learners, track progress, and deliver exceptional educational experiences.
                </p>
                <Rating />
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                    <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    >
                    Get Started
                    </Link>
                    <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    >
                    Courses
                    </Link>
                </div>
            </div>
        </div>
    )
}