import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Heading, IconButton, Stack } from '@chakra-ui/react'
import React from 'react'

const timer = () => {
    return (
        <Heading style={styles.timerHeading}>
            <Stack
                alignItems="center"
                direction='row'
                width="50%"
                justifyContent="space-between"
                spacing={12}
                style={styles.timerContainer}
            >
                <Box>
                    <IconButton
                        aria-label="Setting-Icon"
                        icon={<MinusIcon />}
                        size="md"
                    />
                </Box>

                <Box >
                    12:00
                </Box>
                <Box>
                    <IconButton
                        aria-label="Setting-Icon"
                        icon={<AddIcon />}
                        size="md"
                    />
                </Box>
            </Stack>
            <Center style={styles.buttonStyle}>
                <Button variantColor="teal" size="lg" >Start</Button>
            </Center>
        </Heading>
    )
}

const styles = {
    timerContainer: {
        paddingTop: 45,
        display: "flex",
    },
    timerHeading: {
        FontFace: 'arial',
        fontSize: '8vw',
        color: "#dadada"
    },
    buttonStyle: {
        paddingTop: 40,
    }
}

export default timer