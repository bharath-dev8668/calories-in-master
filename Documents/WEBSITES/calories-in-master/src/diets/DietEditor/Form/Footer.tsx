import { Box, HStack, Button, Divider, Text, Link, BoxProps } from '@chakra-ui/react'

type Props = {
  onAbout: () => void
} & BoxProps

function Footer({ onAbout, ...rest }: Props) {
  return (
    <Box {...rest}>
      <Divider />
      <HStack height="50px" spacing={4}>
        <Button
          variant="link"
          color="gray.500"
          fontWeight="thin"
          py={0.5}
          onClick={onAbout}
        >
          About
        </Button>

        {/* Your Professional Branding */}
        <Text color="gray.500" fontSize="sm">
          © 2026 Bharath Thommandru | AI Developer
        </Text>

        {/* This makes the email clickable! */}
        <Link href="mailto:bharathtommandru1@gmail.com" color="gray.500" fontSize="sm">
          bharathtommandru1@gmail.com
        </Link>
      </HStack>
    </Box>
  )
}

export default Footer