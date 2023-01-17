import React from 'react'
import { Text, Container, Row } from "@nextui-org/react";

export default function Home() {
    return (
        <div>
            <Container sm>
                <Row>
                    <Text h1 css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}>Hey there .... I'm Rohan</Text>
                </Row>
                <Text h4>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's sta
                    ndard dummy text ever since the 1500s, when an unknown printer to
                    ok a galley of type and scrambled it to make a type specimen bo
                    ok. It has survived not only five centuries, but also the leap i
                    nto electronic typesetting, remaining essentially unchanged. It wa
                    s popularised in the 1960s with the release of Letraset sheets co
                    ntaining Lorem Ipsum passages, and more recently with desktop p
                    ublishing software like Aldus PageMaker including versions of Lor
                    em Ipsum.
                 </Text>
            </Container>
        </div>
    )
}