import React from 'react'
import UserForm from './UserForm'


const Children = () => {
    return <UserForm />;
};


export const Registro = () => {
    return (
        <div className="registro">

        
            <h1> Bienvenidos</h1>
            <p>Para empezar debes registrarte </p>

            <Children />{UserForm}

        </div>
    )
}

export default Registro;