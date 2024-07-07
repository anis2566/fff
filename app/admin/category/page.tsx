import Link from "next/link";
import type { Metadata } from "next";

import { ContentLayout } from "@/components/admin/content-layout"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { db } from "@/lib/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryList } from "@/components/admin/category";

export const metadata: Metadata = {
  title: "E-Learn | Category",
  description: "E-learning Web Application",
};


const Category = async () => {
    const categories = await db.category.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    return (
        <ContentLayout title="Category">
            <Breadcrumb>
                <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link href="/admin">Dashboard</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Category</BreadcrumbPage>
                </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card>
                <CardHeader>
                    <CardTitle>Category List</CardTitle>
                    <CardDescription>A collerction of category.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <CategoryList categories={categories} />
                </CardContent>
            </Card>
        </ContentLayout>
    )
}

export default Category