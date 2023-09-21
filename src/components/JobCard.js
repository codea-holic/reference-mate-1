import React from "react";
import { styled } from "styled-components";
import { CommonTextDiv } from "./OverLayForm";
import { color04, color13, color02 } from "../common/colors";
import Button from "./Button";

export const JobCardCon = styled.div`
display: flex;
flex-direction: column;
background: ${props => props.color || `rgba(177, 255, 61, 0.5)`};
border-radius: 1rem;
padding: 1rem;
border: 1px solid ${color02};
min-height: 200px;
&:hover {
    transform: scale(1.08); 
    background: ${color13};
}
`
export const JobTitle = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap: 0.5rem;
padding: 1rem;
`

export const JobDescpition = styled.div`
display:flex;
justify-content: center;
`

const JobCard = (props) => {
    const { title, description, color } = props;
    return (
        <JobCardCon color={color}>
            <JobTitle>
                <CommonTextDiv
                size='20px'
                weight='600'
                >
                    {/* {title} */}
                    {/* Backend */}
                    Job Type: title,

                </CommonTextDiv>
                <CommonTextDiv
                size='20px'
                weight='600'
                >
                    Field: {description}

                </CommonTextDiv>
                <CommonTextDiv
                size='20px'
                weight='600'
                >
                    Job Role: Something

                </CommonTextDiv>
            </JobTitle>
            {/* <JobDescpition>
                <CommonTextDiv
                size='22px'
                weight='500'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CommonTextDiv>
            </JobDescpition> */}
        </JobCardCon>
    )
}

export default JobCard;