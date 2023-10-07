import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();
    const { page } = useParams();
    useEffect(() => {
        console.log(`Loading... ${page}`);
        navigate(`/${page}`)
    }, [])

    return (
        <div>Loading</div>
    )
}

export default Loading