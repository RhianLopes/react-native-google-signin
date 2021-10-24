import React from 'react'
import { View } from 'react-native'
import { Octicons, Ionicons } from '@expo/vector-icons'
import { LeftIcon, StyledInputLabel, StyledTextInput, Colors, RightIcon } from '..'

export function MyTextInput(props) {
    const { label, icon, isPassword, hidePassword, setHidePassword, ...otherProps } = props
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...otherProps} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={Colors.darkLight} />
                </RightIcon>
            )}
        </View>
    )
}