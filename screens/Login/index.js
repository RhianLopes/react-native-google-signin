import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { ButtonText, ExtraText, ExtraView, MyTextInput, StyledButton, TextLink, TextLinkContent } from '../../components'
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, Colors, Line, MsgBox } from '../../components'
import { ENV } from '../../environment'
import axios from 'axios'
import * as Google from 'expo-google-app-auth'

export function Login({ navigation }) {
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <PageLogo resizeMode='cover' source={{ uri: 'https://picsum.photos/250/200/' }} />
                <PageTitle>Google Sign In</PageTitle>
                <SubTitle>React Native with Expo</SubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                        const config = {
                            iosClientId: ENV.IOS_CLIENT_ID,
                            androidClientId: ENV.ANDROID_CLIENT_ID,
                            scope: ['profile', 'email']
                        }
                        Google.logInAsync(config)
                            .then((result) => {
                                const { type, user } = result
                                if (type === 'success') {
                                    const { email, name, photoUrl } = user
                                    console.log(user)
                                    setTimeout(() => navigation.navigate('Welcome', { email, name, photoUrl }), 1000)
                                } else {
                                    // Mostrar mensagem
                                    // Sign In Canceled
                                }
                            })
                            .catch(error => {
                                console.log(error)
                            })
                        
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            {/* <MyTextInput 
                                label='Email Address' 
                                icon='mail' 
                                placeholder='andyj@gmail.com' 
                                placeholderTextColor={Colors.darkLight} 
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType='email-address'
                            />
                            <MyTextInput 
                                label='Password' 
                                icon='lock' 
                                placeholder='* * * * * * * * *' 
                                placeholderTextColor={Colors.darkLight} 
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>
                            <Line /> */}
                            <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name='google' color={Colors.primary} size={25}/>
                                <ButtonText google={true} >Sign in with Google</ButtonText>
                            </StyledButton>
                            {/* <ExtraView>
                                <ExtraText>Dont't have an account already?</ExtraText>
                                <TextLink>
                                    <TextLinkContent>Sign Up</TextLinkContent>
                                </TextLink>
                            </ExtraView> */}
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}