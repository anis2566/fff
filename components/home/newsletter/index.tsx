import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Newsletter = () => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Newsletter</div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-3xl">
                Stay Up-to-Date with Our Newsletter
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-center">
                Subscribe to our newsletter to receive the latest updates, exclusive offers, and valuable insights
                from our team.
            </p>
            <form className="flex gap-2 w-full max-w-md">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
            </form>
        </div>
    )
}