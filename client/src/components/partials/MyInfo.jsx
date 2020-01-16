import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { TextWrapLg } from '../ui'

function MyInfo () {
    return (
        <Fragment>
            <TextWrapLg
                textSpacing
                linkStyle="default"
            >
                <p>
                    View my full&nbsp;
                    <Link
                        to={ `/cv` }
                    >
                        CV
                    </Link>
                </p>
                <p>
                    Mail me&nbsp;
                    <a
                        href="mailto:matine.chabrier@gmail.com"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        matine.chabrier@gmail.com
                    </a>
                </p>
                <p>
                    Peak at my code on&nbsp;
                    <a
                        href="https://github.com/matine/matine.co.uk"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </p>
            </TextWrapLg>
        </Fragment>
    )
}

export default MyInfo
