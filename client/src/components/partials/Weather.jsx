import React, { PureComponent } from 'react'
import 'isomorphic-fetch'
import { Flex, Box, TextXs, TextSm, Span, Image, ThemeDefault } from '../ui'

class Weather extends PureComponent {
    /**
     * Component constructor.
     *
     * @param {Object} props
     * @return {void}
     */
    constructor (props) {
        super(props)

        this.state = {
            weatherResponse: null,
        }

        this.fetchTheWeather('London')
    }

    /**
     * Fetches the current weather for a given city.
     *
     * @param {String} city
     * @return {void}
     */
    fetchTheWeather (city) {
        /* eslint-disable-next-line no-undef */
        fetch(`api/weather/${ city }`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    weatherResponse: res,
                })
            })
            .catch(err => {
                this.setState({
                    weatherResponse: null,
                })
                throw err
            })
    }

    /**
     * Renders the component.
     *
     * @return {ReactNode}
     */
    render () {
        const {
            weatherResponse,
        } = this.state

        if (!weatherResponse || !weatherResponse.main) {
            return null
        }

        const location = weatherResponse.name
        const temp_c = weatherResponse.main.temp
        const weather = weatherResponse.weather[0].description
        const londonCurrently = `${ location } currently:`
        const theWeather = `${ weather } and ${ Math.floor(temp_c) }°C`

        const imageIcon = (
            <Image
                src={ require(`../../images/weather-icons/${ weatherResponse.weather[0].icon }@2x.png`) }
                alt={ weather }
                width="40px"
            />
        )

        return (
            <ThemeDefault themeDisplays>
                <div className="only-show-default">
                    <Flex flexDirection="row" alignItems="center" minHeight={ 37 }>
                        { imageIcon }
                        <Box ml={ 2 } flex={ 1 }>
                            <TextSm fontWeight="bold" fontStyle="italic">{ londonCurrently } { theWeather }</TextSm>
                        </Box>
                    </Flex>
                </div>
                <div className="only-show-inverted">
                    <TextXs fontWeight="bold">
                        <Span fontSize={ 26 }><span role="img" aria-label="Ghost">👻</span></Span>
                    </TextXs>
                </div>
            </ThemeDefault>
        )
    }
}

export default Weather
