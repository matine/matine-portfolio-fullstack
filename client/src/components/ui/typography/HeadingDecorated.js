import styled from 'styled-components'
import { colors } from '../../ui/theme'
import { HeadingLg } from './Heading'

export const HeadingDecorated = styled(HeadingLg)`
    position: relative;
    padding-bottom: 5px;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 18px;
        height: 6px;
        background-color: ${ colors.highlight };
    }
`

HeadingDecorated.defaultProps = {
    caps: true,
    fontWeight: '100',
    mb: 4,
}

export default HeadingDecorated
