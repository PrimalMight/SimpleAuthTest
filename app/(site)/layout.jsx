import React from 'react'
import LoginButton from '../components/auth/login-btn'
import Provider from './provider'

export default function RootLayout({ children }) {
    return (
      <html lang='en'>
        <head />
        <body>
          <Provider>
            <nav>this is navbard idk lol</nav>
            <LoginButton />
            <main>{children}</main>
          </Provider>
        </body>
      </html>
    )
  }