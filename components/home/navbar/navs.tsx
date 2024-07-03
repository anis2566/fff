import { Tabs } from "@/components/aceternity/tabs"

const tabs = [
    {
        title: "Home",
        value: "home",
        href: "/"
    },
    {
        title: "Courses",
        value: "courses",
        href: "/courses"
    },
    {
        title: "About",
        value: "about",
        href: "/about"
    },
    {
        title: "Contact",
        value: "contact",
        href: "/contact"
    },
  ];

export const Navs = () => {
    return (
        <Tabs
            tabs={tabs}
            containerClassName="hidden md:flex"
        />
    )
}