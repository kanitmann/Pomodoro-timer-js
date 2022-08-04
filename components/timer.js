import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Heading, IconButton, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'




const timer = () => {
    const [time, setTime] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [sec, setSec] = useState(0);
    function alertOption() {
        setTime(0);
        alert("Timer cannot be less than 00!");

    }

    useEffect(() => {
        time < 0 ?
            alertOption()
            : {};
        document.title = `${time} : ${seconds} - Pomodoro Timer`;

    }, [sec])

    const startTimer = () => {
        var interval = setInterval(() => {
            setSec(prev => prev + 1);
        }
            , 1000)
    }
    useEffect(() => {
        if (sec != 0) {
            console.log(time, seconds)
            if (seconds == 0) {
                setSeconds(59);
                console.log(seconds);
                setTime(time => time - 1);
            }
            else if (seconds == 0 && time == 0) {
                alert("Timer is up!");
                clearInterval(interval);
            }
            else {
                setSeconds(seconds => seconds - 1);
            }
        }
    }, [sec])

    return (
        <Heading style={styles.timerHeading}>
            <Stack
                alignItems="center"
                direction='row'
                justifyContent="space-between"
                spacing={12}
                style={styles.timerContainer}
            >
                <Box>
                    <IconButton
                        aria-label="Setting-Icon"
                        icon={<MinusIcon />}
                        size="md"
                        onClick={() => { setTime(time - 5) }}
                    />
                </Box>
                <Box>
                    {time < 10 ? '0' + time : time}
                </Box>
                <Box>
                    :
                </Box>
                <Box>
                    {seconds < 10 ? '0' + seconds : seconds}
                </Box>

                <Box>
                    <IconButton
                        aria-label="Setting-Icon"
                        icon={<AddIcon />}
                        size="md"
                        onClick={() => { setTime(time + 5) }}
                    />
                </Box>
            </Stack>
            <Stack
                alignItems="center"
                direction={["column-reverse", null, "row"]}
                justifyContent="space-between"
                spacing={[4, null, 12]}
                style={styles.timerContainer}
            >
                <Button size="md"
                    colorScheme='blue'
                    variant='outline'
                    onClick={() => { setSeconds(1) }}
                >
                    1 min
                </Button>
                <Button
                    size="md"
                    colorScheme='yellow'
                    variant='outline'
                    onClick={() => { setTime(15) }}
                >
                    15 min
                </Button>
                <Button
                    size="md"
                    colorScheme='orange'
                    variant='outline'
                    onClick={() => { setTime(25) }}
                >
                    25 min
                </Button>
                <Button
                    size="md"
                    colorScheme='pink'
                    variant='outline'
                    onClick={() => { setTime(35) }}
                >
                    35 min
                </Button>
            </Stack>
            <Center style={styles.buttonStyle}>
                <Button variantColor="teal" size="lg" onClick={startTimer}>Start</Button>
            </Center>
        </Heading>
    )
}

const styles = {
    timerContainer: {
        paddingTop: 45,
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