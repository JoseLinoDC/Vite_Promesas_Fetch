

import React, { useEffect } from 'react'
import { use } from 'react'
import { useReducer } from 'react'

export const Login = () => {

    const initialState = {
        validando: true, 
        token: null, 
        username: '', 
        nombre: '' 
    }
    
    // type AuthAction = { type: 'logout'}
    const authReducer = (state, action) => { 
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    username: '',
                    nombre: ''
                }
                break;
            default:
                return state;
                break;
        }
    }
    
    const [state,dispatch] = useReducer(authReducer,initialState);

    useEffect(()=>{
        setTimeout(()=>{
            dispatch({type:'logout'})
        },2500);
    })

    if(state.validando){
        return(
            <>
            <h3>Login</h3>
            <div className='btn btn-warning'>
                Validando Información.....
            </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            <div className="ficAlertDanger_Div">No Autenticado...</div>
            <div className="ficAlertSuccess_Div">Autenticado...</div>
            <button className="btn btn-primary">Login</button>    
            <button className="btn btn-danger">Logout</button>  
        </>
    )
}