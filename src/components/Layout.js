import React from "react"
export default function Layout({ children }) {
    return (<>
      <section className="bg-blue-600 w-100 h-32 text-center py-8 mb-5">
      <div className="font-bold text-white text-4xl align-middle">Industry news</div>
    </section>
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
    </>)
  }