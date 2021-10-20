import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React from 'react'
import { MyTextInput } from '../../components'
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, Colors } from '../../components'
export function Login() {
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
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput 
                                label='Email Address' 
                                icon='mail' 
                                placeholder='andyj@gmail.com' 
                                placeholderTextColor={Colors.darkLight} 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType='email-address'
                            />
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}