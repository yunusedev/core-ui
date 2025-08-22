"use client"
import components from "@/components/json/nav_docs.json"
import { Text } from "@/components/ui/Text"
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
export const AllComponents = () => {
    return(
        <div className="grid grid-col lg:grid-cols-2 gap-3 mb-6">
            {components.find(item => item.name == "Components")?.items.map((item, i) => (
                <Link className="flex justify-between items-center transition hover:bg-background-200 border border-secondary p-5 rounded-lg" href={item.href} key={i}>
                <Text type="semiboldLg">{item.name}</Text>
                <Icon icon={"solar:alt-arrow-right-outline"} />
                </Link>
            ))}
        </div>
    )
}