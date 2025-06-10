import SignIn from "./screens/auth/SignIn.jsx";
import {Route, Routes} from "react-router-dom";
import SignUp from "./screens/auth/SignUp.jsx";
import Landing from "./Landing.jsx";
import "./App.css";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </div>
    )
}

export default App