import { Button, Container, Grid, Row, Navbar, Link, Text } from '@nextui-org/react';
import React from 'react';

export default function NavBar() {
    return (
        <div style={{padding: "15px", paddingTop: "10px"}}>
            <Navbar isBordered>
                <Navbar.Content activeColor="secondary">
                    <Navbar.Link href="/">
                        <Text css={{
                            textGradient: "45deg, #009FFF -20%, #ec2F4B 100%",
                        }}>Home</Text>
                    </Navbar.Link>
                    <Navbar.Link href="/experience">Experience</Navbar.Link>
                    <Navbar.Link href="/projects">Projects</Navbar.Link>
                    <Navbar.Link href="/contact">Contact</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </div>
    )

    // return (
    //     <div style={{marginBottom: "20px", marginTop: "20px"}}>
    //         <Container sm>
    //             <div>
    //                 <Grid.Container gap={1}>
    //                     <Grid>
    //                         <Button color="gradient" bordered auto>
    //                         Home
    //                         </Button>
    //                     </Grid>
    //                     <Grid>
    //                         <Button color="gradient" bordered auto>
    //                         Resume
    //                         </Button>
    //                     </Grid>
    //                     <Grid>
    //                         <Button color="gradient" bordered auto>
    //                         Experience
    //                         </Button>
    //                     </Grid>
    //                     <Grid>
    //                         <Button color="gradient" bordered auto>
    //                         Contact
    //                         </Button>
    //                     </Grid>
    //                 </Grid.Container>
    //             </div>
    //         </Container>
    //     </div>
    // )
}