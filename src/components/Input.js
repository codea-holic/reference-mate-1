import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputCon = styled.input`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 border-radius: 4px;
 border: none;
 ${props => props.icon && `padding: 0 48px;`}
 display: flex;
 align-items: center;
 font-family: cursive;
 font-size: ${(props) => props.placeholderSize || '16px' };

 &::placeholder{
    font-family: cursive;
    font-size: ${(props) => props.placeholderSize || '16px' };
 }

 &:focus{
    outline: none;
    border-color: transparent;
 }

`

export const OuterInputCon = styled.div`
 position: relative;
`

export const InputIcon = styled.div`
    padding: 0 6px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 8px;
    position: absolute;
    > svg {
        font-size: 22px;
        opacity: 0.6;
    }
`

const Input = (props) => {
    const {height, width, placeholder, icon, placeholderSize } = props;
    return (
        <OuterInputCon>
            {
                icon &&  <InputIcon>
                <FontAwesomeIcon icon={icon} />
            </InputIcon>
            }
            <InputCon 
            icon = {icon}
            height={height} 
            width={width}
            placeholder={placeholder}
            placeholderSize={placeholderSize}
            />
        </OuterInputCon>
    )
}

export default Input;