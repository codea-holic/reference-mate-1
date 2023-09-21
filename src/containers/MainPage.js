import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";
import Drawer from "../components/Drawer";
import OverlayForm from "../components/OverLayForm";
import JobCard from "../components/JobCard";

export const MainCon = styled.div`
height: 100%;
width: 100%;
`

export const InnerMainCon = styled.div`
display: flex;
flex-direction: column;
${props => props.isOverlay && `filter: blur(8px)`};
`

export const DrawerAndCard = styled.div`
display: flex;
flex-direction: row;
`

export const CardWrapper = styled.div`
padding: ${(props) => props.drawerOpen ? `24px 32px 0 16px` : `24px 32px`};
width: 100%;
`

export const OverlayCon = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export const JobCardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
grid-gap: 1rem;
padding: 3rem 0 0 0;
opacity: 0.8;
`

const MainPage = (props) => {
    const [barsClick, setBarsClick] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);

    const bodyClicked = () => {
        isOverlay && setIsOverlay(false)
    }

    const cardData = [{
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(177, 255, 61, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(61, 177, 255, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(139, 61, 255, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(177, 255, 61, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(61, 177, 255, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(139, 61, 255, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(139, 61, 255, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(177, 255, 61, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(61, 177, 255, 0.5)'
    },
    {
        title: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'rgba(139, 61, 255, 0.5)'
    }]

    return (
        <>
            <MainCon onClick={bodyClicked}>
                <InnerMainCon isOverlay={isOverlay}>
                    <Header setBarsClick={setBarsClick} barsClick={barsClick} onClickPostJob={() => setIsOverlay(!isOverlay)} />
                    <DrawerAndCard>
                        {barsClick && <Drawer />}
                        <CardWrapper drawerOpen={true}>
                            <Card />
                            <JobCardWrapper>
                                {cardData.map((item, key) => <JobCard {...item} />)}
                            </JobCardWrapper>
                        </CardWrapper>
                    </DrawerAndCard>

                </InnerMainCon>
            </MainCon>
            {
                isOverlay && <OverlayCon id={'Overlay'}>
                    <OverlayForm />
                </OverlayCon>
            }</>
    )
}

export default MainPage;