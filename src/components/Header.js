import React from "react";
import styled from "styled-components";
import { color01, color03, color08, color14 } from "../common/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faBell, faTv } from "@fortawesome/free-solid-svg-icons";
import { faStripe } from '@fortawesome/free-brands-svg-icons';
import Button from "./Button";
import DropBox from "./DropBox";

export const HeaderCon = styled.div`
        display: flex;
        height: 72px;
        box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
        padding: 0 32px;
        position: sticky;
`

export const LogoIcon = styled.div`
    display: flex;
    align-items: center;
    > svg {
        font-size: 48px;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 8px 0;
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

export const LeftCon = styled.div`
display: flex;
flex-direction: row;
`

export const RightCon = styled.div`
display: flex;
flex-direction: row;
`

export const ButtonCon = styled.div`
 display: flex;
 align-items: center;
 margin-right: 16px;
`


const Header = (props) => {
    // const { logo, headerIcons, buttonText } = props;
    const { setBarsClick, barsClick, onClickPostJob } = props;
    const headerIcons = [faGear, faBell];   
    return (
        <HeaderCon>
            <HeaderContent>
                <LeftCon>
                    <IconWrapper onClick={() => setBarsClick(!barsClick)}>
                        <FontAwesomeIcon icon={faBars} />
                    </IconWrapper>
                    <LogoIcon>
                        <FontAwesomeIcon icon={faStripe} />
                    </LogoIcon>
                </LeftCon>
                <RightCon>
                    {headerIcons.map((item, key) => {
                        return (
                            <IconWrapper>
                                <FontAwesomeIcon icon={item} />
                            </IconWrapper>
                        )
                    })}
                    <ButtonCon>
                        <Button
                            btnPadding='6px 8px'
                            height='40px'
                            buttonText='Post Job'
                            onClick={onClickPostJob}
                            id='Post_Job'
                        />
                    </ButtonCon>
                    <ButtonCon style={{ margin: 0 }}>
                        <Button
                            borderRadius='50%'
                            height='40px'
                            width='40px'
                            buttonBg={color14}
                            buttonText='GS'
                            btnTxtFontWeight={500}
                            buttonTextClr={color01}
                        />
                    </ButtonCon>
                </RightCon>
            </HeaderContent>
        </HeaderCon>
    )
}

export default Header;