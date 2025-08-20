"use client"
import { Label } from "../ui/Label"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../libs/utils"
import { allDocs } from "@/.contentlayer/generated"

export const Navbar = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    return(
        <>
        <nav className="centerBoxMx hidden lg:flex pt-top flex flex-col overflow-y-auto max-h-[85vh] fixed gap-6 w-80">
            <div className="flex flex-col gap-px">
                {Object.entries(allDocs).map(([key, value], i) => (
                    <div key={key} className="flex flex-col gap-px">
                            <Link className={cn("p-2 px-3 font-medium text-muted hover:text-foreground hover:bg-secondary transition rounded-lg", {
                                "bg-secondary text-foreground hover:bg-secondary-100":  pathname.split("/")[2] == value._raw.flattenedPath.split("/")[1]
                            })} key={value.title} href={"/docs/"+value._raw.flattenedPath.split("/")[1]}>
                                <span>{value.title}</span>
                            </Link>
                    </div>
            ))}
            </div>
        </nav>

        <main className="lg:ml-[425px] 2xl:ml-[500px] ml-container-mobile mr-container-mobile 2xl:mr-container mt-12">
            {children}
        </main>
        </>
    )
}