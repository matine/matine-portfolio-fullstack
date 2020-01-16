import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { connect } from 'react-redux'
import withLayout from '../components/hoc/withLayout'
import MySkillsLogos from '../components/partials/MySkillsLogos'
import MyInfo from '../components/partials/MyInfo'
import { Box, Container, Contained, TextWrapLg, TextLg } from '../components/ui'
import { PropTypeGatsbyGlobalData } from '../propTypes'

class AboutPage extends PureComponent {
    /**
     * Renders the component.
     *
     * @return {ReactNode}
     */
    render () {
        const {
            data,
        } = this.props

        const globalContent = data.global.edges[0].node.data
        const meImage = globalContent.about_me_image.localFile.childImageSharp.fluid

        if (!globalContent) {
            return null
        }

        const {
            me_intro_text,
        } = globalContent

        const pageName = 'about'

        return (
            <div
                id={ `${ pageName }-page` }
            >
                <Box
                    pb={ 5 }
                >
                    <Container>
                        <Contained
                            maxWidth={ 3 }
                        >
                            <Box
                                mt={ [25, 15, 10] }
                                mb={ 4 }
                            >
                                <Image
                                    fluid={ meImage }
                                />
                            </Box>
                            { me_intro_text &&
                                <TextWrapLg
                                    textSpacing
                                >
                                    <div
                                        dangerouslySetInnerHTML={
                                            {
                                                __html: me_intro_text.html,
                                            }
                                        }
                                    />
                                </TextWrapLg>
                            }
                            <MySkillsLogos />
                            <Box
                                mb={ 5 }
                            >
                                <MyInfo />
                            </Box>
                        </Contained>
                    </Container>
                </Box>
            </div>
        )
    }
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        PropTypeGatsbyGlobalData,
    }).isRequired,
}

export const mapStateToProps = state => ({
    theme: state.theme,
})

export default connect(mapStateToProps)(withLayout(AboutPage))

export const pageQuery = graphql`
    query AboutQuery {
        global: allPrismicGlobal(sort: { fields: [last_publication_date], order: DESC }) {
            edges {
                node {
                    uid
                    data {
                        me_intro_title {
                            text
                        }
                        me_intro_text {
                            html
                        }
                        me_skills_title {
                            text
                        }
                        me_skills_text {
                            html
                        }
                        about_me_image {
                            localFile {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 1000
                                        quality: 90
                                        cropFocus: ENTROPY
                                    ) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
