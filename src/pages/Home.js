import React, { useEffect } from 'react'
import { Text, Container, Spacer, Grid, Link, Button } from "@nextui-org/react"
import userData from '../data/UserData'

export default function Home() {
    const aboutMe = userData.aboutMe

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Container xs>
                <Text h1 css={{
                textGradient: "45deg, #009FFF -20%, #ec2F4B 100%",
                }}>Hey there, I'm Rohan</Text>
                {
                    aboutMe.paragraphs.map((paragraph) => {
                        return (
                            <div>
                                <Text size="$lg" >
                                    {paragraph}
                                </Text>
                                <Spacer y={1} />
                            </div>
                        )
                    })
                }
                <Grid.Container gap={1}>
                    <Grid>
                        <Link isExternal>
                            <Button auto color="gradient" onClick={() => { window.location.href = aboutMe.linkedinUrl }}>LinkedIn</Button>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link isExternal>
                            <Button auto color="gradient" onClick={() => { window.location.href = aboutMe.githubUrl }}>Github</Button>
                        </Link>
                    </Grid>
                </Grid.Container>  
                <Spacer y={1} />
                <Text size="$lg">Write to me at: <Link>{aboutMe.email}</Link></Text>
            </Container>
        </div>
    )
}