import React from 'react';
import styled from 'styled-components';

const Layout = props => {
    const LayoutComponent = styled.div`
        height: 100%;
        width: 100%;
        background-color: ${ props.backgroundColor };
        position: absolute;
    `;
    return <LayoutComponent>{ props.children }</LayoutComponent>;
}

export default Layout;
