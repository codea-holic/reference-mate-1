import React from "react";
import { useState, useEffect } from "react";
import { color01, color02, color06 } from "../common/colors";
import { styled } from "styled-components";

export const DropBoxCon = styled.div`
width: 150px;
height: ${props => props.height || `200px`};
background-color: ${color06};
border: 0.5rem solid ${color06};
border-radius: 1rem;
overflow-y: auto;
display: flex;
flex-direction: column;
gap: 0.2rem;
`

export const ItemsCon = styled.div`
text-align: center;
border-bottom: 1px solid ${color02};
padding: 0.5rem;
background: ${color01};
border-radius: 0.5rem;

`

export const DropBoxOuterCon = styled.div`
position: absolute;
`

export const CommonTextDiv = styled.div`
font-size: ${(props) => props.size};
font-weight: ${(props) => props.weight};
font-family: cursive;
color: ${(props) => props.color};
display: flex;
align-items: center;
`

export const Triangle = styled.div`
position: relative;
left: 100px;
top: 2px;
width: 0; 
height: 0; 
border-left: 20px solid transparent;
border-right: 20px solid transparent;
border-bottom: 20px solid ${color06};
`

const DropBox = (props) => {
    const { options } = props;
    return (
        <DropBoxOuterCon>
            <Triangle />
            <DropBoxCon className="cell">
                {
                    options.map((item, key) => {
                        return (
                            <ItemsCon id={key}>
                                <CommonTextDiv size='18px'>
                                    {item}
                                </CommonTextDiv>
                            </ItemsCon>
                        )
                    })
                }
            </DropBoxCon>
        </DropBoxOuterCon>
    )
}

export default DropBox;