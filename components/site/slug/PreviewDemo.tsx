import * as Demos from "@/components/demos/";

export const PreviewDemo = ({children, displayName}: {children: React.ReactNode; displayName: string}) => {
    const fileCode = (Demos as any)[displayName+"String"]
    return(
        <div className="flex items-center justify-center w-full border border-secondary rounded-lg h-96">
        {children}
        </div>
    )
}