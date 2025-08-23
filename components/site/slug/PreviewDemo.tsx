import * as Demos from "@/components/demos/";

export const PreviewDemo = ({children, displayName}: {children: React.ReactNode; displayName: string}) => {
    const fileCode = (Demos as any)[displayName+"String"]
    return(
        <div className="flex items-center px-4 justify-center w-full border border-secondary rounded-lg min-h-96 py-4 mb-6">
        {children}
        </div>
    )
}