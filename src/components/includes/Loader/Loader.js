import React from 'react';
import styled from 'styled-components';
import './Loader.css';

const P = styled.p`
    font-family: 'Montserrat';
    color: slateblue;
    font-size: 1.2em;
`;

const Span = styled.span`
    font-weight: bold;
`;

const Loader = (props) => {
    const user = props.user.split('@')[0];
    return (
        <div className="centered">
            <P>Hi, <Span>{ user }</Span>.</P>
            <P>Loading notes...</P>
            <div className="preloader-wrapper active">
                <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle "></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;