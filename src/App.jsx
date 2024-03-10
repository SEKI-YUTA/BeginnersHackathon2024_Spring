import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import LoginScreen from "./pages/loginScreen/LoginScreen";
import MainScreen from "./pages/mainScreen/MainScreen";
import SettingScreen from "./pages/settingScreen/SettingScreen";
function App() {
    const [userDataState, setUserDataState] = useState({ Uid: "" });
    const UserContext = createContext(userDataState);
    const userData = useContext(UserContext);
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <LoginScreen
                    userContext={UserContext}
                    setUserDataState={(data) => {
                        setUserDataState(data);
                        console.log(data);
                    }}
                />
            ),
        },
        {
            path: "/Main",
            element: <MainScreen userContext={UserContext} />,
        },
        {
            path: "/Setting",
            element: <SettingScreen userContext={UserContext} />,
        },
    ]);
    return (
        <div className="App">
            <UserContext.Provider value={userData}>
                <RouterProvider router={router} />
            </UserContext.Provider>
            {/* <LoginScreen /> */}
        </div>
    );
}

export default App;
