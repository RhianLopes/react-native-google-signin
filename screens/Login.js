import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React from 'react'
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea } from '../components/styles'

export default function Login() {
    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <PageLogo resizeMode='cover' source={{ uri: 'https://picsum.photos/250/200/' }} />
                <PageTitle>Flower Crib</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea></StyledFormArea>}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}

function TextInput() {
    
}