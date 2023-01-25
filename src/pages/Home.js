import React from 'react'
import { Text, Container, Row, Spacer, Button, Grid, Link } from "@nextui-org/react";
import userData from '../data/UserData';

export default function Home() {
    const aboutMe = userData.aboutMe

    return (
        <div>
            <Container xs>
                <Row>
                    <Text h1 css={{
                    textGradient: "45deg, #009FFF -20%, #ec2F4B 100%",
                    }}>Hey there, I'm Rohan</Text>
                </Row>
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
                            <Text h3>Linkedin</Text>
                        </Link>
                    </Grid>
                    <Grid>
                        <Link isExternal>
                            <Text h3>Github</Text>
                        </Link>
                    </Grid>
                </Grid.Container>   
            </Container>
        </div>
    )
}