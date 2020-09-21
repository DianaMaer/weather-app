import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";

const Loading = (props) => {
    return(
        <FadeLoader loading={props.loading}height={5} color={"#6495ed"} />
    )
}

export default Loading;