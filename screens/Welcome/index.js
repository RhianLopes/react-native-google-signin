import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyledContainer, PageTitle, PageLogo, SubTitle, Line } from '../../components'

export function Welcome({ route }) {
    const { email, name, photoUrl } = route.params
    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <PageTitle>Bem-vindo</PageTitle>
            <PageLogo source={{ uri: photoUrl }} />
            <Line />
            <SubTitle>{name}</SubTitle>
            <SubTitle>{email}</SubTitle>
        </StyledContainer>
        
    )
}