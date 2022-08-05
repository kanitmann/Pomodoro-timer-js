import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Heading, IconButton, Stack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'




const timer = () => {
    const [time, setTime] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [sec, setSec] = useState(0);
    const [start, setStart] = useState(null);
    // const [int, setInt] = useState(null);
    const id = useRef(null)
    function decFun() {
        time - 5 < 0 ?
            alertOption()
            : setTime(prevCount => prevCount - 5);
    }

    function alertOption() {
        setTime(0);
        setSeconds(0);
        alert("Timer cannot be less than 00:00 Min!");
    }

    useEffect(() => {
        document.title = `${time < 10 ? '0' + time : time} : ${seconds < 10 ? '0' + seconds : seconds - 1} - Pomodoro Timer`;
    }, [sec])


    useEffect(() => {
        if (start) {
            console.log("Now Start")
            startTimer()
        }
        else if (!start) {
            console.log("Now Stop")
            setStart(null)
            stopTimer()
        }
    }, [start])

    const startTimer = () => {
        console.log('kkkk')
        let interval = setInterval(() => {
            setSec(prev => prev + 1);
            console.log('inter')
        }
            , 1000)
        id.current = interval;
    }
    useEffect(() => {
        if (sec != 0 && start) {
            if (seconds == 0 && time == 0) {
                alert("Timer is up!");
                stopTimer();
                setStart(false);
            }
            else if (seconds == 0) {
                setSeconds(59);
                setTime(time => time - 1);
            }
            else {
                setSeconds(seconds => seconds - 1);
            }
        }
    }, [sec])

    const stopTimer = () => {
        console.log(id)
        setSeconds(0); setTime(0)
        clearInterval(id.current)
    }

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
                        aria-label="Minus-Icon"
                        icon={<MinusIcon />}
                        size="md"
                        onClick={() => { decFun(); }}
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
                        aria-label="Add-Icon"
                        icon={<AddIcon />}
                        size="md"
                        onClick={() => { setTime(prevCount => prevCount + 5) }}
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
                    onClick={() => { setTime(1) }}
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
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={() => { setStart(start = !start); console.log('call') }}
                >
                    {start ? 'Stop' : 'Start'}
                </Button>
            </Center>
        </Heading >
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