import { Slider } from "./slider"

export const Reviews = () => {
    return (
        <div className="w-full space-y-8">
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold">What Our Customers Say</h1>
                <p className="text-sm text-muted-foreground">Hear from our satisfied customers about their experience with our learning management system.</p>
            </div>

            <Slider />
        </div>
    )
}