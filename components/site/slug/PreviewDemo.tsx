import * as Demos from "@/components/demos/";

export const PreviewDemo = ({children, displayName}: {children: React.ReactNode; displayName: string}) => {
    const fileCode = (Demos as any)[displayName+"String"]
    return(
        <div className="flex items-center px-4 justify-center w-full border border-secondary rounded-lg h-96 mb-6">
        {children}
        </div>
    )
}