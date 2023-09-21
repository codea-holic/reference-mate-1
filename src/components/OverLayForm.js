import React from "react";
import styled from 'styled-components';
import Button from "./Button";
import Input from "./Input";
import referralImage from '../images/Referral.jpg';
import { color01, color02 } from "../common/colors";
import ReactDropdown from "react-dropdown";

export const FormCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    overflow-y: auto;
    border: 1px solid;
    border-radius: 0.5rem;
    background: rgba(158, 119, 243, 0.5);    
`

export const ImageCon = styled.div`
> img {
    width: 100%;
    height: 300px;
    opacity: 0.8;
}
`

export const Heading = styled.div`
display: flex;
justify-content: center;
padding: 0.5rem;
`
export const CommonTextDiv = styled.div`
font-size: ${(props) => props.size};
font-weight: ${(props) => props.weight};
font-family: cursive;
color: ${(props) => props.color};
display: flex;
align-items: center;
`

export const DetailsCon = styled.div`
display: flex;
flex-direction: column;
`

export const JobWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
gap: 1rem;
`

export const JobInput = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const TextAreaCon = styled.div`
> textarea {
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 border-radius: 4px;
 border: none;
 display: flex;
 align-items: center;
 font-family: cursive;
 font-size: ${(props) => props.placeholderSize || '16px'};
}

textarea::placeholder{
    font-family: cursive;
    font-size: ${(props) => props.placeholderSize || '16px'};
 }

 textarea:focus{
    outline: none;
    border-color: transparent;
 }
`

export const FormButtons = styled.div`
display: flex;
flex-direction: row;
padding: 1rem;
gap: 1rem;
`


const OverlayForm = (props) => {
    return (
        <FormCon>
            <ImageCon>
                <img src={referralImage} alt='referral' />
            </ImageCon>
            <Heading>
                <CommonTextDiv
                    size='24px'
                    weight='600'
                >
                    About the Job
                </CommonTextDiv>
            </Heading>

            <DetailsCon>
                <JobWrapper>
                    <CommonTextDiv
                        size='18px'
                        weight='500'
                    >
                        Job Type:
                    </CommonTextDiv>
                    <JobInput>
                        <Input
                            height='50px'
                            width="100%"
                            placeholder='Enter Job Type'
                        />
                    </JobInput>
                </JobWrapper>

                <JobWrapper>
                    <CommonTextDiv
                        size='18px'
                        weight='500'
                    >
                        Job Description:
                    </CommonTextDiv>
                    <TextAreaCon width='100%' height='200px' placeholderSize='16px'>
                        <textarea placeholder='Enter Job Description' />
                    </TextAreaCon>
                </JobWrapper>

                <JobWrapper>
                    <CommonTextDiv
                        size='18px'
                        weight='500'
                    >
                        Field:
                    </CommonTextDiv>
                    <JobInput>
                        <Input
                            height='50px'
                            width="100%"
                            placeholder='Enter Job Type'
                        />
                    </JobInput>
                </JobWrapper>
                <FormButtons>
                    <Button
                        height='60px'
                        width='100%'
                        buttonText='Back'
                        buttonTextSize='24px'
                        btnTxtFontWeight={500}
                        buttonBg={color01}
                        buttonTextClr={color02}
                    />
                    <Button
                        height='60px'
                        width='100%'
                        buttonText='Post'
                        buttonTextSize='24px'
                        btnTxtFontWeight={500}
                        buttonTextClr={color01}
                    />
                </FormButtons>

            </DetailsCon>
        </FormCon>
    )
}

export default OverlayForm;