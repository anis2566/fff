import Link from "next/link"

import { MovingBorderButton } from "@/components/aceternity/moving-border-button"

export const NavButtons = () => {
    return (
        <div className="flex items-center gap-x-2">
            <MovingBorderButton href="/sign-in">Get Started</MovingBorderButton>
        </div>
    )
}