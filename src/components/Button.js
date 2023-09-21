import React from "react";
import { styled } from "styled-components";
import { color01, color03 } from "../common/colors";

export const ButtonCon = styled.button`
    min-height: 40px;
    height: ${(props) => props.height || `auto`};
    width: ${(props) => props.width || `auto`};
    background: ${(props) => props.buttonBg || color03};
    padding: ${(props) => props.btnPadding || '0'};
    border: none;
    border-radius:  ${(props) => props.borderRadius || '4px'};
    color: ${(props) => props.buttonTextClr || color01}; 
    font-family: Cursive;
    font-size: ${(props) => props.buttonTextSize || '16px'};
    font-weight: ${(props) => props.buttonTextSize};
`

const Button = (props) => {

    const { onClick, buttonText, height, width, buttonBg, buttonTextClr, buttonTextSize, btnPadding, borderRadius, btnTxtFontWeight, id } = props;

    return (
        <ButtonCon
            onClick={onClick}
            btnPadding={btnPadding}
            buttonText={buttonText}
            height={height}
            width={width}
            buttonBg={buttonBg}
            buttonTextClr={buttonTextClr}
            buttonTextSize={buttonTextSize}
            borderRadius={borderRadius}
            btnTxtFontWeight={btnTxtFontWeight}
            id={id}
        >
            {buttonText}
        </ButtonCon>
    )
}

export default Button;