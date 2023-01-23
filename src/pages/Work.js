import { Container, Text, Spacer } from '@nextui-org/react'
import userData from '../data/UserData';
import React from 'react'

export default function Experience() {
    const  experiences  = userData.experience;
    const education = userData.education;
    return (
        <div>
            <Container xs>
                <Text h1  css={{
                    textGradient: "45deg, #009FFF -20%, #ec2F4B 100%",
                    }}>
                    Experience
                </Text>
                {
                    experiences.map((experience) => {
                        return (
                            <div>
                                <Text h2>{experience.position} at {experience.company}</Text>
                                {
                                    // experience.workDescp.map((point) => {
                                    //     return (
                                    //         <Text size="$md" >
                                    //             {point}
                                    //         </Text>
                                    //     )
                                    // })
                                }
                                <Text size="$md">{experience.workDescp}</Text>
                                <Spacer y={1} />
                            </div>
                        )
                    })
                }
                 <Text h1  css={{
                    textGradient: "45deg, #009FFF -20%, #ec2F4B 100%",
                    }}>
                    Education
                </Text>
                {
                    education.map((education) => {
                        return (
                            <div>
                                <Text h2>{education.degree} from {education.college}</Text>
                                <Text size="$md" >
                                    {education.description}
                                </Text>
                                <Spacer y={1} />
                            </div>
                        )
                    })
                }
                <Text h1  css={{
                    textGradient: "45deg, #009FFF -20%, #ec2F4B 100%",
                    }}>
                    Learnings & Reads
                </Text>
                <Text h1  css={{
                    textGradient: "45deg, #009FFF -20%, #ec2F4B 100%",
                    }}>
                    Skills
                </Text>
            </Container>
        </div>
    )
}