import React from 'react'
import { Box, Grid, Col, ReactLogo, ReduxLogo, TypeScriptLogo, JestLogo, SassLogo, Es6Logo, TextLg } from '../ui'

function MySkillsLogos () {
    return (
        <Box
            mt={ 4 }
            mb={ 5 }
        >
            <TextLg mb={ 4 }>Some of my preferred tools:</TextLg>
            <Grid>
                <Col
                    width={[ 1 / 3, 1 / 6 ]}
                    alignSelf="center"
                >
                    <Es6Logo />
                </Col>
                <Col
                    width={[ 1 / 3, 1 / 6 ]}
                    alignSelf="center"
                >
                    <ReactLogo />
                </Col>
                <Col
                    width={[ 1 / 3, 1 / 6 ]}
                    alignSelf="center"
                >
                    <ReduxLogo />
                </Col>
                <Col
                    width={[ 1 / 3, 1 / 6 ]}
                    alignSelf="center"
                >
                    <TypeScriptLogo />
                </Col>
                <Col
                    width={[ 1 / 3, 1 / 6 ]}
                    alignSelf="center"
                >
                    <JestLogo />
                </Col>
                <Col
                    width={[ 1 / 3, 1 / 6 ]}
                    alignSelf="center"
                >
                    <SassLogo />
                </Col>
            </Grid>
        </Box>
    )
}

export default MySkillsLogos
