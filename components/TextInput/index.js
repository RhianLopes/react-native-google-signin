import React from 'react'
import { View } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import { LeftIcon, StyledInputLabel, StyledTextInput, Colors } from '..'

export function MyTextInput(props) {
    const { label, icon, ...otherProps } = props
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...otherProps} />
        </View>
    )
}