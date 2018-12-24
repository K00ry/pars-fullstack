import React from 'react';

const BackDrop = props => {

    let back_drop= 'backDrop-invisible';

    if (props.show) {
        back_drop = 'backDrop-visible';

    }
    return (<div className={back_drop}
                 onClick={props.openDrawer}
    />)

};


export default BackDrop;