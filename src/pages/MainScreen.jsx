import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { firebaseApp,auth,provider } from '../firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,getAuth } from "firebase/auth";

const MainScreen = () => {
    return (
        <div>
            メイン画面
        </div>
    )
}

export default MainScreen;