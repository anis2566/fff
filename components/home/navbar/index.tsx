import { Logo } from "@/components/logo"
import { Navs } from "./navs"
import { NavButtons } from "./nav-buttons"

export const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between py-3 bg-background border-b border-b-1 border-muted sticky inset-0 z-50">
            <Logo callbackUrl="/" />
            <Navs />
            <NavButtons />
        </div>
    )
}