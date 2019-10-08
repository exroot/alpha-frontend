import React from 'react';
import './Loader.css';

const Loader = (props) => {
    return (
        <div class="preloader-wrapper active">
            <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle "></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
    );
}

export default Loader;