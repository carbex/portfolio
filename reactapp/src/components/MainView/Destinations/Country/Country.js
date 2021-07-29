import React from 'react'
import * as S from './Country.styles'

function Country(props) {
    const country = props.match.params.country;

    const countries = {
        canada: {
            img: '/images/countries/canada.jpg',
            description: 'Canada is chilly'
        },
        brazil: {
            img: '/images/countries/brazil.jpg',
            description: 'Brazil is chilly'
        },
        india: {
            img: '/images/countries/india.jpg',
            description: 'India is chilly'
        },
        australia: {
            img: '/images/countries/australia.jpg',
            description: 'Australia is chilly'
        },
        kenya: {
            img: '/images/countries/kenya.jpg',
            description: 'Kenya is chilly'
        },
    }

    return (
        <S.CountryContainer>
            <S.CountryImage img={countries[country]['img']}/>
            <S.CountryDescription>{countries[country]['description']}</S.CountryDescription>
        </S.CountryContainer>
    )
}

export default Country
