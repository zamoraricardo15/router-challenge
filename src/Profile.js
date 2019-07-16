import React from 'react';

export default function Profile(props){

    return (<div>
                <h1>{props.firstName}</h1>
                <h2>{props.lastName}</h2>
            </div>);

}