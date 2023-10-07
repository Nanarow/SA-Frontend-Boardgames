import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();
    const routeParams = useParams();
    useEffect(() => {
        console.log(`Loading... ${routeParams.page}`);
        navigate(`/${routeParams.page}`)
    }, [])

    return (
        <div>Loading</div>
    )
}

export default Loading