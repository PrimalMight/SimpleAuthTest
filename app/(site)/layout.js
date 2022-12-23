import React from 'react'

export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head />
        <body>
            <nav>this is navbard idk lol</nav>
            <main>{children}</main>
        </body>
      </html>
    )
  }