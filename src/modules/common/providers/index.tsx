'use client'

import { ChakraProvider } from "./chakraProvider"


export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}