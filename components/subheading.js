import { InfoIcon, SettingsIcon } from "@chakra-ui/icons"
import { Box, Heading, IconButton, Stack } from "@chakra-ui/react"

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
                        aria-label="Setting-Icon"
                        icon={<SettingsIcon />}
                        size="sm"
                    />
                </Box>

                <Box fontFamily='montserrat'>
                    Set focus time
                </Box>

                <Box>
                    <IconButton
                        aria-label="Info-Icon"
                        icon={<InfoIcon />}
                        size="sm"
                    />
                </Box>
            </Stack>
        </Heading>
    )
}

const styles = {
    subHeading: {
        color: "gray",
        paddingTop: 25,
    }
}

export default SubHeading;