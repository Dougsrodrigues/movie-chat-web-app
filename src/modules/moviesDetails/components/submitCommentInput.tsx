"use client"
import { AddIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputProps, InputRightElement } from "@chakra-ui/react"

interface SubmitCommentButtonProps extends InputProps {
  handleClickIcon: () => void
}
export const SubmitCommentButton = ({ handleClickIcon, ...props }: SubmitCommentButtonProps) => {

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'

        {...props}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClickIcon}>
          <AddIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}