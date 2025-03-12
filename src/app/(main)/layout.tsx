import React from 'react'
import Footer from '../components/Footer/Footer'

export default async function layout({children}:{children: React.ReactNode}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
