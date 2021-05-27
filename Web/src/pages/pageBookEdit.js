import React from 'react';
import { useParams } from 'react-router-dom';
import ContainerForm from '../components/Form/Form';

const PageBookEdit = () => {
    const { id } = useParams();

    return (
        <div>
           <ContainerForm id={id ? Number.parseInt(id,10) : null }/> 
        </div>
    );
}

export default PageBookEdit;

