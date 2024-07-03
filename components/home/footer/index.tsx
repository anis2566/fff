import { Button } from "@/components/ui/button"
import { Copyright } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="border-t border-1 border-muted py-3 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-x-2">
                <Copyright className="w-5 h-5 text-muted-foreground" />
                <p className="text-muted-foreground">{new Date().getFullYear()} E-Learn | All right reserved.</p>
            </div>
            <div className="flex items-center">
                <Button variant="link" asChild className="text-muted-foreground">
                    <Link href="/terms">Terms of Servie</Link>
                </Button>
                <Button variant="link" asChild className="text-muted-foreground">
                    <Link href="/about">About</Link>
                </Button>
                <Button variant="link" asChild className="text-muted-foreground">
                    <Link href="/contact">Contact</Link>
                </Button>
            </div>
        </div>
    )
}