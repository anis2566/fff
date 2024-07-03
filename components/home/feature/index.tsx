import { Calendar, FileCheck, MessageCircleQuestion } from "lucide-react"

export const Features = () => {
    return (
        <div className="space-y-8">
            <p className="text-center bg-card max-w-[150px] text-primary py-1 rounded-md mx-auto">Key Features</p>
            <div className="text-center space-y-1">
                <h1 className="font-bold text-3xl">Enrich the potential of your skill</h1>
                <p className="text-muted-foreground text-sm max-w-[800px] mx-auto">Our LMS platform offers a comprehensive suite of tools to streamline your educational experience. From course management to advanced reporting, we havve got you covered.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-x-3">
                    <div className="flex items-center justify-center w-14 h-14 bg-card rounded-full flex-shrink-0">
                        <Calendar />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Course Management</h3>
                        <p className="text-sm text-muted-foreground">Easily create, manage, and deliver engaging courses to your students.</p>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <div className="flex items-center justify-center w-14 h-14 bg-card rounded-full flex-shrink-0">
                        <MessageCircleQuestion />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Question & Answer</h3>
                        <p className="text-sm text-muted-foreground">Give individual chapter question solution quickly.</p>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <div className="flex items-center justify-center w-14 h-14 bg-card rounded-full flex-shrink-0">
                        <FileCheck />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Course Attachments</h3>
                        <p className="text-sm text-muted-foreground">Ensure necessary file for individual course chapter.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}