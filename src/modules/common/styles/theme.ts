import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        display: 'flex',
        w: "100vw",
        justifyContent: 'center'
      },
    },
  },
})

