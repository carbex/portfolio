import React from 'react'
import * as S from './Contact.styles'
import Form from './Form/Form'
import Map from './Map/Map'
import Informations from './Informations/Informations'


function Contacts() {

    return (
        <>
            {/* <div className='container' style={{maxWidth: '1024px'}}>
            <div className="row">
                <S.PageTitle>CONTACT</S.PageTitle>
            </div>
            <div className="row">
                <div className='col col-12 col-md-6'>
                    <Map/>
                </div>
                <div className='col col-12 col-md-6'>
                    <Informations/>
                </div>
            </div>
            <div className="row">
                <div className="col col-12">
                    <Form /> 
                </div>
            </div>
        </div> */}

            <S.Container>
                <S.Row>
                    <S.PageTitle>CONTACT</S.PageTitle>
                </S.Row>
                <S.Row>
                    <S.Map>
                        <Map />
                    </S.Map>
                    <S.Info>
                        <Informations />
                    </S.Info>
                </S.Row>
                <S.Row>
                    <S.Form>
                        <Form />
                    </S.Form>
                </S.Row>
            </S.Container>
        </>
    )
}

export default Contacts