import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";

interface Props {
    children: React.ReactNode;
}

const HomeLayout = ({children}:Props) => {
    return (
        <main className="w-full max-w-screen-xl mx-auto px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default HomeLayout