// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider as ChakraP } from '@chakra-ui/react'
import { theme } from '../styles/theme'

export function ChakraProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraP theme={theme}>
        {children}
      </ChakraP>
    </CacheProvider>
  )
}