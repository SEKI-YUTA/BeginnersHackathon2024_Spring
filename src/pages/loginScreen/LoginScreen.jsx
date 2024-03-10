import { useContext, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";
import { firebaseApp } from "../../firebase";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({ userContext, setUserDataState }) => {
    const auth = getAuth(firebaseApp);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [validEmailPassword, setValidEmailPassword] = useState(true);
    const userData = useContext(userContext);
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/Main");
            }
        });
    }, []);

    const signInEmail = async () => {
        console.log("これはユーザーデータです", userData);
        await signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
                if (result["_tokenResponse"]["registered"]) {
                    // ログイン後の画面に移動する処理を後で書く
                    setValidEmailPassword(true);
                    console.log("トップ画面に移動");
                    setUserDataState({ Uid: result.user.uid });
                    navigate("/Main");
                }
            })
            .catch((err) => {
                console.log(err);
                setValidEmailPassword(false);
            });
    };
    const signUpEmail = async () => {
        await createUserWithEmailAndPassword(auth, email, password).then(
            (result) => {
                setValidEmailPassword(true);
                console.log("新規登録", result);
            }
        );
    };
    return (
        <div className="flex justify-center flex-col w-96 m-auto h-screen items-center">
            <h1 className="mb-20 text-4xl font-bold">ログイン画面</h1>
            <form className="flex flex-col justify-center">
                <span className="my-4 px-2">
                    <TextField
                        id="input-email"
                        label="メールアドレスを入力"
                        type="search"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-96"
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
                        className="w-96"
                    />
                </span>
                <span className="w-96 mx-2 my-4">
                    <Button
                        className="w-96"
                        variant="contained"
                        color="primary"
                        onClick={
                            isLogin
                                ? async () => {
                                      try {
                                          signInEmail();
                                      } catch (err) {
                                          alert(err);
                                      }
                                  }
                                : async () => {
                                      try {
                                          signUpEmail();
                                      } catch (err) {
                                          alert(err);
                                      }
                                  }
                        }
                    >
                        <p>{isLogin ? "ログイン" : "新規登録"}</p>
                    </Button>
                </span>
                <span className="text-blue-500 cursor-pointer">
                    {isLogin ? "パスワードを忘れた" : " "}
                </span>
                <span
                    onClick={() => {
                        setIsLogin(!isLogin);
                        setValidEmailPassword(true);
                        setEmail("");
                        setPassword("");
                    }}
                    className="text-blue-500 cursor-pointer"
                >
                    {isLogin ? "新規登録をする" : "ログインをする"}
                </span>
            </form>
            {validEmailPassword ? (
                ""
            ) : (
                <p className="text-red-500 mt-5">
                    パスワードまたはメールアドレスが
                    <br />
                    間違えている可能性があります
                </p>
            )}
        </div>
    );
};

export default LoginScreen;
