import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div className='flex justify-center flex-col w-96 m-auto h-screen items-center'>
            <h1 className='mb-20 text-4xl font-bold'>ログイン画面</h1>
            <form className='flex flex-col justify-center' > 
                <span className='my-4 px-2'>
                <TextField
                    id="input-email"
                    label="メールアドレスを入力"
                    type="search"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-96'
                />
                </span>
                <span>
                <TextField
                    id="input-password"
                    label="パスワードを入力"
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-96'
                />
                </span>
                <span className='w-96 mx-2 my-4'>
                <Button
                    className='w-96'
                    variant="contained"
                    color="primary"
                    onClick={
                        isLogin
                            ?(
                                console.log("ログインする")
                                // try {
                                //     await signInEmail()
                                // } catch (err) {
                                //     alert(err.message)
                                // }
                             ) :(
                                console.log("新規登録する")
                                // try {
                                //     await signUpEmail()
                                // } catch (err) {
                                //     alert(err.message)
                                // }
                             )
                    }
                >
                    
                    
                    <p>{isLogin ? "ログイン" : "新規登録"}</p>
                </Button>
                </span>
                
                
                <span className='text-blue-500 cursor-pointer'>{isLogin ? "パスワードを忘れた":" "}</span>
                
                <span onClick={()=>setIsLogin(!isLogin)} className='text-blue-500 cursor-pointer'>
                    {isLogin ? "新規登録をする":"ログインをする"}
                </span>
                

            </form>

        </div>
    )
}