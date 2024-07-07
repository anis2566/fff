import { Category } from "@prisma/client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/empty"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { EllipsisVertical, Eye, Pen, Trash2 } from "lucide-react"
import Link from "next/link"

interface Props {
    categories: Category[]
}

export const CategoryList = ({categories}:Props) => {
    return (
        <>
            {
                categories.length < 1 ? (
                    <Empty title="No Categroy Found" />
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="px-2">Image</TableHead>
                            <TableHead className="px-2">Name</TableHead>
                            <TableHead className="px-2">Courses</TableHead>
                            <TableHead className="px-2">Tags</TableHead>
                            <TableHead className="px-2">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                categories.map(category => (
                                <TableRow key={category.id}>
                                    <TableCell className="px-2 py-2">
                                        <Avatar className="w-9 h-9">
                                            <AvatarImage src={category.imageUrl} />
                                            <AvatarFallback>{category.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="px-2 py-2">{category.name}</TableCell>
                                <TableCell className="px-2 py-2">5</TableCell>
                                <TableCell className="px-2 py-2">
                                    {
                                        category.tags.map((tag, i) => (
                                            <Badge key={i}>{tag}</Badge>
                                        ))
                                    }
                                </TableCell>
                                    <TableCell className="px-2 py-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <EllipsisVertical className="h-4 w-4" />
                                            </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem asChild>
                                                    <Link href={`/dashboard/category/${category.id}`} className="flex items-center gap-x-3">
                                                        <Eye className="w-4 h-4" />
                                                        View Courses
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild>
                                                    <Link href={`/dashboard/category/edit/${category.id}`} className="flex items-center gap-x-3">
                                                        <Pen className="w-4 h-4" />
                                                        Edit
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="w-flex items-center gap-x-3">
                                                    <Trash2 className="text-rose-500 w-4 h-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                )
            }
        </>
    )
}