import React from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { color01, color11, color12, color13, color14, color15 } from "../common/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronRight, faGrip, faTableCellsLarge, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";


export const DrawerCon = styled.div`
display: flex;
flex-direction: column;
width: 320px;
position: sticky;
padding: 24px 0  0 16px;
`

export const InfoBlock = styled.div`
display: flex;
flex-direction: row;
padding: 8px 12px 24px 12px;
gap: 10px;
`

export const Details = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const CommonTextDiv = styled.div`
font-size: ${(props) => props.size};
font-weight: ${(props) => props.weight};
font-family: cursive;
color: ${(props) => props.color};
display: flex;
align-items: center;
`

export const LabelDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 8px 16px;
height: 40px;
border-radius: 4px;
background: ${(props) => props.isSelected && color13};
&:hover{
        transform: scale(1.05); 
    background: ${color13};
}
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

export const LabelCon = styled.div`
 display: flex;
 flex-direction: column;
 gap:10px;
`

export const IconLable = styled.div`
display: flex;
flex-direction: row;
`

const Drawer = (props) => {

    const labelData = [{
        icon: faHouse,
        label: "Home",
        isSelected: true
    }, {
        icon: faFolder,
        label: "Projects"
    }, {
        icon: faTableCellsLarge,
        label: "Templates"
    }, {
        icon: faBandcamp,
        label: "Brand"
    }, {
        icon: faGrip,
        label: "Apps"
    }]
    return (
        <DrawerCon>
            <InfoBlock>
                <Button
                    borderRadius='50%'
                    height='40px'
                    width='48px'
                    buttonBg={color14}
                    buttonText='GS'
                    btnTxtFontWeight={500}
                    buttonTextClr={color01}
                />
                <Details>
                    <CommonTextDiv
                        size='22px'
                        weight='600'
                    >
                        Title
                    </CommonTextDiv>
                    <CommonTextDiv
                        size='18px'
                        weight='400'
                        color={color11}
                    >
                        SubTitle
                    </CommonTextDiv>
                </Details>
            </InfoBlock>
            <LabelCon>
                {
                    labelData?.length > 0 && labelData.map((item, key) => {
                        return (
                            <LabelDiv isSelected={item.isSelected}>
                                <IconLable>
                                    <IconWrapper>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </IconWrapper>
                                    <CommonTextDiv
                                        size='18px'
                                        weight='500'
                                        color={color15}
                                    >
                                        {item.label}
                                    </CommonTextDiv>
                                </IconLable>
                                <IconWrapper style={{ margin: 0 }}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </IconWrapper>
                            </LabelDiv>
                        )
                    })
                }
            </LabelCon>
        </DrawerCon>
    )
}

export default Drawer;