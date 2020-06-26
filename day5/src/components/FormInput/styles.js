import styled from "styled-components"
import { Flex } from "@rebass/grid"

// TODO: Create a styled component for input
export const Input = styled.input`
    font-size: 150%;
    color: ${({theme}) => theme.colors.inputText};
`

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.primaryText};
`