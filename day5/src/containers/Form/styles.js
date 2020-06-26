import styled from "styled-components"
import { Flex } from "@rebass/grid"

// TODO: Container
export const Container = styled(Flex)`
    display: flex;
    color: ${({theme}) => theme.colors.subBackground};
    flex-direction: column;
`

// TODO: FormContainer
export const FormContainer = styled(Flex)`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
`

// TODO: Button
export const Button = styled.button``
