import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyledContainer, PageTitle } from '../../components'

export function Welcome() {

    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <PageTitle>Bem-vindo</PageTitle>
        </StyledContainer>
    )
}