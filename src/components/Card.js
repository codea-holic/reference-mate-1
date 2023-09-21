import React from "react";
import { styled } from "styled-components";
import { color01, color03, color08 } from "../common/colors";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faComment, faStar, faFile, faVideo, faTv, faPrint } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
export const CardCon = styled.div`
 display: flex;
 flex-direction: column;
 border-radius: 8px;
 background: ${(props) => props.cardBg || `linear-gradient(to left, ${color03}, ${color08})`};
`

export const CardInnerCon = styled.div`
 padding: 0 16px;
`

export const CardContentCon = styled.div`
 display: flex;
 flex-direction: column;
`

export const FirstBlock = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 padding: 24px 0;
`

export const IconWrapper = styled.div`
    padding: 0 6px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 16px;

    > svg {
        font-size: 24px;
        opacity: 0.6;
    }
`

export const BoxCon = styled.div`
 min-height: 88px;
`

export const TextCon = styled.div`
font-family: Cursive;
color: ${(props) => props.textClr};
font-weight: ${(props) => props.fontWgt};
font-size: ${(props) => props.fontSize};
`

export const SecondBlock = styled.div`
padding-bottom: 14px;
display: flex;
justify-content: center;
`

export const ThirdBlock = styled.div`
display: flex;
gap: 24px;
justify-content: center;
height: 104px;
margin: 0 auto;
max-width: fit-content;
padding-top: 24px;
overflow-x: auto;
overflow-y: hidden;
position: relative;
`

export const CardIcon = styled.div`
background: ${color01};
border-radius: 50%;
width: 48px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
>svg{

    font-size: 30px;
    color: ${(props) => props.color};
}
`

export const CommonTextDiv = styled.div`
font-size: ${(props) => props.size};
font-weight: ${(props) => props.weight};
font-family: cursive;
color: ${(props) => props.color};
display: flex;
align-items: ${(props) => props.alignItems || 'center'};
justify-content: ${(props) => props.justifyContent || 'center'};
`

export const CardIconWrapper = styled.div`
display: flex;
justify-content: center;
`

export const IconsCon = styled.div`
display: flex;
flex-direction: column;
width: 96px;
&:hover {
    transform: scale(1.2);
}
`

const Card = (props) => {
    const { cardBg } = props;
    const cardIconsData = [{
        icon: faComment,
        title: 'For You',
        color: 'blue'
    }, {
        icon: faStar,
        title: 'Social media',
        color: 'red'
    }, {
        icon: faVideo,
        title: 'Videos',
        color: 'purple'
    }, {
        icon: faTv,
        title: 'Presentations',
        color: 'orange'
    }, {
        icon: faPrint,
        title: 'Prints',
        color: 'green'
    }, {
        icon: faFile,
        title: 'Docs',
        color: 'brown'
    }]
    return (
        <CardCon>
            <CardInnerCon>
                {props.children ? props.children :
                    <CardContentCon>
                        <FirstBlock>
                            <TextCon textClr={color01} fontSize='32px' fontWgt={500}>
                                What are you searching?
                            </TextCon>
                        </FirstBlock>
                        <SecondBlock>
                            <Input
                                width='600px'
                                height='50px'
                                placeholder="Search your content"
                                icon={faMagnifyingGlass}
                                placeholderSize='20px'
                            />
                        </SecondBlock>
                        <ThirdBlock>

                            {
                                cardIconsData?.length > 0 && cardIconsData.map((item, key) => {
                                    return (
                                        <IconsCon>
                                            <CardIconWrapper>
                                                <CardIcon color={item.color}>
                                                    <FontAwesomeIcon icon={item.icon} />
                                                </CardIcon>
                                            </CardIconWrapper>
                                            <CommonTextDiv
                                                size='16px'
                                                color={color01}
                                                weight='500'
                                                style={{ paddingTop: '5px' }}
                                            >
                                                {item.title}
                                            </CommonTextDiv>
                                        </IconsCon>
                                    )
                                })
                            }
                        </ThirdBlock>
                    </CardContentCon>
                }
            </CardInnerCon>
        </CardCon>
    )
}

export default Card;