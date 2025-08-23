"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"
import { TextField } from "../ui/TextField"
import { Button } from "../ui/Button"

export const TabsDemo = () => {
    const [value, setValue] = useState<string>("preview")
    return(
        <Tabs value={value} onValueChange={setValue}>
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="w-[300px] shadow flex flex-col gap-6 bg-background rounded-lg border border-secondary-200 py-3 px-3">
                <header>
                    <span className="text-center text-muted">Make changes to your account here. Click save when you're done.</span>
                </header>
                <section className="flex flex-col gap-2">
                    <TextField label="E-mail" />
                    <TextField label="Username" />
                </section>
                <footer className="flex w-full">
                    <Button className="w-full">Confirm</Button>
                </footer>
            </TabsContent>
            <TabsContent value="code" className="w-[300px] shadow flex flex-col gap-6 bg-background rounded-lg border border-secondary-200 py-3 px-3">
                <header>
                    <span className="text-center text-muted">Change your password here. After saving, you'll be logged out.</span>
                </header>
                <section className="flex flex-col gap-2">
                    <TextField label="Current Pasword" />
                    <TextField label="New Password" />
                    <TextField label="Confirm Password" />
                </section>
                <footer className="flex w-full">
                    <Button className="w-full">Confirm</Button>
                </footer>
            </TabsContent>
        </Tabs>
    )
}

export const TabsDemoString = `"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"
import { TextField } from "../ui/TextField"
import { Button } from "../ui/Button"

export const TabsDemo = () => {
    const [value, setValue] = useState<string>("preview")
    return(
        <Tabs value={value} onValueChange={setValue}>
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="w-[300px] shadow flex flex-col gap-6 bg-background rounded-lg border border-secondary-200 py-3 px-3">
                <header>
                    <span className="text-center text-muted">Make changes to your account here. Click save when you're done.</span>
                </header>
                <section className="flex flex-col gap-2">
                    <TextField label="E-mail" />
                    <TextField label="Username" />
                </section>
                <footer className="flex w-full">
                    <Button className="w-full">Confirm</Button>
                </footer>
            </TabsContent>
            <TabsContent value="code" className="w-[300px] shadow flex flex-col gap-6 bg-background rounded-lg border border-secondary-200 py-3 px-3">
                <header>
                    <span className="text-center text-muted">Change your password here. After saving, you'll be logged out.</span>
                </header>
                <section className="flex flex-col gap-2">
                    <TextField label="Current Pasword" />
                    <TextField label="New Password" />
                    <TextField label="Confirm Password" />
                </section>
                <footer className="flex w-full">
                    <Button className="w-full">Confirm</Button>
                </footer>
            </TabsContent>
        </Tabs>
    )
}`

export default {}