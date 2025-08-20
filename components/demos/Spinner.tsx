import { Spinner } from "../ui/Spinner"

export const SpinnerDemo = () => {
    return(
        <div className="flex items-center gap-2">
            <Spinner size="sm"/>
            <Spinner size="md"/>
            <Spinner size="lg"/>
        </div>
    )
}

export const SpinnerDemoString = `import { Spinner } from "../ui/Spinner"

export const SpinnerDemo = () => {
    return(
        <div className="flex items-center gap-2">
            <Spinner size="sm"/>
            <Spinner size="md"/>
            <Spinner size="lg"/>
        </div>
    )
}`