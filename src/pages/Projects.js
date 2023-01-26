import { Container, Text, Spacer, Butto, Link } from '@nextui-org/react'
import React from 'react'
import userData from '../data/UserData'

export default function Projects() {
    const projects = userData.projects;
    const currently = userData.curretly;
    const headingCss = { textGradient: "45deg, #009FFF -20%, #ec2F4B 100%" }

    return (
        <div>
            <Container xs>
                <Text h1 css={headingCss}>Currently</Text>
                <div>
                    {
                        currently.map((project) => {
                            return (
                                <div>
                                    <Link isExternal href={project.githubUrl}>
                                        <Text h2>{project.title}</Text>
                                    </Link>
                                    <Text size="$md" >
                                        {project.description} 
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
                                    <Link isExternal href={project.githubUrl}>
                                        <Text h2>{project.title}</Text>
                                    </Link>
                                    <Text size="$md" >
                                        {project.shortDescription} 
                                    </Text>
                                    <Text size="$md" >
                                        Tech stack used: {project.techStack} 
                                    </Text>
                                    {/* <Button auto >Github</Button> */}
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