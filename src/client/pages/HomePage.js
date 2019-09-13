import React from 'react';

const Home = () => {
    return (<div>
        <p>Iam a BEST home component!</p>
        <button onClick={() => console.log("Handle click event!!!")}>Press Me!!</button>
    </div>)
}

export default { component :  Home};