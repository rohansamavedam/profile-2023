import React, { useEffect } from 'react'
import { Container, Text, Spacer, Link } from '@nextui-org/react'
import userData from '../data/UserData'

export default function Experience() {
    const  experiences  = userData.experience
    const education = userData.education
    const reads = userData.reads
    const headingCss = { textGradient: "45deg, #009FFF -20%, #ec2F4B 100%" }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Container xs>
                <Text h1  css={headingCss}>Experience</Text>
                {
                    experiences.map((experience) => {
                        return (
                            <div>
                                <Text h2>{experience.position} at {experience.company}</Text>
                                <Text size="$md">
                                    {
                                        experience.workDescp.map((point) => {
                                            return (
                                                <div>
                                                    {point}
                                                    <Spacer y={1} />
                                                </div>
                                            )
                                        })
                                    }
                                    { experience.tools.length > 0 && 
                                        <div>
                                            <Text size="$md">Tools & tech that I was using frequently: </Text>
                                            <ol>
                                            {
                                                experience.tools.map((tool) => {
                                                    return (
                                                        <li>
                                                            {tool}
                                                        </li>
                                                    )
                                                })
                                            }
                                            </ol>
                                        </div>
                                    }
                                </Text>
                                <Spacer y={1} />
                            </div>
                        )
                    })
                }
                <Text h1  css={headingCss}>Education</Text>
                {
                    education.map((education) => {
                        return (
                            <div>
                                <Text h2>{education.degree} from {education.college}</Text>
                                <Text size="$md" >
                                    {education.description}
                                </Text>
                                <Spacer y={1}/>
                                <Text size="$md">Coursework where I had maxium learning from: </Text>
                                <Text size="$md">
                                    <ol>
                                    {
                                        education.coursework.map((course) => {
                                            return (
                                                <li>
                                                    {course}
                                                </li>
                                            )
                                        })
                                    }
                                    </ol>
                                </Text>
                                <Spacer y={1} />
                            </div>
                        )
                    })
                }
                 <Text h1 css={headingCss}>Learnings & Reads</Text>
                {
                    reads.map((read) => {
                        return (
                            <div>
                                <Link href={read.url} target="_blank" isExternal>
                                    <Text h2>{read.title}</Text>
                                </Link>
                                <Text size="$md">{read.description}</Text>
                                <Spacer y={1} />
                            </div>
                        )
                    })
                }
                <Spacer y={1} />
            </Container>
        </div>
    )
}