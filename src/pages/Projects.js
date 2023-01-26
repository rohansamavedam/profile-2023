import { Container, Text, Spacer, Button } from '@nextui-org/react'
import React from 'react'
import userData from '../data/UserData'

export default function Projects() {
    const projects = userData.projects;
    const headingCss = { textGradient: "45deg, #009FFF -20%, #ec2F4B 100%" }

    return (
        <div>
            <Container xs>
                <Text h1 css={headingCss}>Currently</Text>
                <div>
                    {
                        projects.map((project) => {
                            return (
                                <div>
                                    <Text h2>{project.title}</Text>
                                    <Text size="$md" >
                                        {project.shortDescription} 
                                        {project.longDescription}
                                    </Text>
                                    <Spacer y={1} />
                                </div>
                            )
                        })
                    }
                </div>
                <Text h1 css={headingCss}>Projects</Text>
                <div>
                    {
                        projects.map((project) => {
                            return (
                                <div>
                                    <Text h2>{project.title}</Text>
                                    <Text size="$md" >
                                        {project.shortDescription} 
                                        {project.longDescription}
                                    </Text>
                                    <Button auto >Github</Button>
                                    <Spacer y={1} />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}