
import styled from 'styled-components'
import { colors, breakpoints } from '../../ui/theme'

const NavWrap = styled.nav`
    li {
        a {
            position: relative;

            &:hover {
                color: inherit;
            }

            &::before {
                position: absolute;
                right: 50%;
                top: 20px;
                content: '';
                margin-right: -9px;
                display: block;
                width: 18px;
                height: 6px;
                background-color: ${ colors.highlight };
                opacity: 0;

                @media (min-width: ${ breakpoints[1] }) {
                    top: 22px;
                }
            }

            &:hover,
            &.active {
                &::before {
                    opacity: 1;
                }
            }
        }
    }
`

export default NavWrap
