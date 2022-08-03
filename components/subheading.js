import { InfoIcon } from "@chakra-ui/icons"
import { IoLogoGithub } from 'react-icons/io5'
import { Box, Heading, IconButton, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack } from "@chakra-ui/react"

const SubHeading = () => {
    return (
        <Heading as="h2" size="md">
            <Stack
                alignItems="center"
                width="100%"
                justifyContent="space-between"
                spacing={8}
                direction='row'
                style={styles.subHeading}
            >

                <Box>
                    <IconButton
                        isRound={true}
                        aria-label="Setting-Icon"
                        icon={<IoLogoGithub />}
                        size="sm"
                        onClick={() => { window.open('https://github.com/kanitmann/Pomodoro-timer-js') }}
                    />
                </Box>
                <Input
                    placeholder="Coding Timer"
                    fontSize='2vh'
                    border="none"
                    focusBorderColor="transparent"
                    fontWeight='medium'
                    textAlign="center"
                ></Input>
                <Box>
                    <Popover isLazy >
                        <PopoverTrigger>
                            <IconButton
                                isRound={true}
                                aria-label="Info-Icon"
                                icon={<InfoIcon />}
                                size="sm"
                                onClick={() => { console.log("clicked") }}
                            />
                        </PopoverTrigger>
                        <PopoverContent bg="#262626" color="#dadada" fontSize="0.85vw" w='40vh'>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader fontFamily="montserrat" fontWeight='semibold'>What is Pomodoro?</PopoverHeader>
                            <PopoverBody fontFamily="arial" fontWeight='normal'>Using this method, you break your workday into 25-minute chunks separated by five-minute breaks. These intervals are referred to as pomodoros.</PopoverBody>
                        </PopoverContent>


                    </Popover>
                </Box>
            </Stack>
        </Heading >
    )
}

const styles = {
    subHeading: {
        color: "gray",
        paddingTop: 25,
    }
}

export default SubHeading;