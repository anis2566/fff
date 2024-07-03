import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoveRight, SquarePlay } from "lucide-react"
import Image from "next/image"

export const PopularCourses = () => {
    return (
        <div className="w-full space-y-8">
            <div className="flex justify-between items-center">
                <div className="space-y-1">
                    <h4 className="text-2xl md:text-3xl font-bold">Popular Courses</h4>
                    <p className="text-sm text-muted-foreground">Most trending and popular courses.</p>
                </div>
                <Button variant="outline" className="flex items-center gap-x-2 group">
                    See More
                    <MoveRight className="transition ease-in-out duration-300 group-hover:translate-x-2" />
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm space-y-2">
                    <div className="w-full aspect-video relative max-h-[200px]">
                        <Image
                            src="/course.jpeg"
                            alt="Event"
                            fill
                            className="rounded-md object-cover"
                        />
                    </div>
                    <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                    <Badge className="bg-indigo-500">Web Development</Badge>
                    <div className="flex items-center gap-x-2">
                        <p className="font-semibold text-lg">&#2547;2000</p>
                        <p className="line-through text-rose-500">&#2547;3000</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <Button variant="outline" className="flex items-center gap-x-1">
                            <SquarePlay className="w-6 h-5" />
                            Watch Intro
                        </Button>
                        <Button>Enroll</Button>
                    </div>
                </div>
                <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm space-y-2">
                    <div className="w-full aspect-video relative max-h-[200px]">
                        <Image
                            src="/course.jpeg"
                            alt="Event"
                            fill
                            className="rounded-md object-cover"
                        />
                    </div>
                    <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                    <Badge className="bg-indigo-500">Web Development</Badge>
                    <div className="flex items-center gap-x-2">
                        <p className="font-semibold text-lg">&#2547;2000</p>
                        <p className="line-through text-rose-500">&#2547;3000</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <Button variant="outline" className="flex items-center gap-x-1">
                            <SquarePlay className="w-6 h-5" />
                            Watch Intro
                        </Button>
                        <Button>Enroll</Button>
                    </div>
                </div>
                <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm space-y-2">
                    <div className="w-full aspect-video relative max-h-[200px]">
                        <Image
                            src="/course.jpeg"
                            alt="Event"
                            fill
                            className="rounded-md object-cover"
                        />
                    </div>
                    <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                    <Badge className="bg-indigo-500">Web Development</Badge>
                    <div className="flex items-center gap-x-2">
                        <p className="font-semibold text-lg">&#2547;2000</p>
                        <p className="line-through text-rose-500">&#2547;3000</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <Button variant="outline" className="flex items-center gap-x-1">
                            <SquarePlay className="w-6 h-5" />
                            Watch Intro
                        </Button>
                        <Button>Enroll</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}