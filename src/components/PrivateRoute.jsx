import { useContext } from 'react';
import {  Navigate, useNavigate } from 'react-router-dom'
import {TempContext} from './TempContext'



export function ProtectedRoute({ children }) {
 
    const { isAuth, toggleAuth } = useContext(TempContext)
    if (!isAuth) {
        return <Navigate to={"/login"}/>
    }
    return children
}


