import React from 'react'
import { Text, Container, Row, Spacer, Button, Grid } from "@nextui-org/react";
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
                {/* <Spacer y={1} /> */}
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
            </Container>
        </div>
    )
}