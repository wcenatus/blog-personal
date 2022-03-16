import { MDXProvider } from "@mdx-js/react"
import React, { useEffect } from "react"
import Layout from "./Layout"
// import * as DesignSystem from "your-design-system"

export default function MdxLayout({ children,pageContext:{frontmatter} }) {
    useEffect(()=>{
        console.log(frontmatter)
    },[])
    return (
        <Layout>
            <MDXProvider
            components={{
                p: props => <p {...props} className="" />,
            }}
            >
            <h1 className="text-2xl font-semibold mb-5 text-center"> {frontmatter.title}</h1>
            {children}
            </MDXProvider>
        </Layout>
    )
}