import SignIn from "./screens/auth/SignIn.jsx";
import {Route, Routes} from "react-router-dom";
import SignUp from "./screens/auth/SignUp.jsx";
import Landing from "./Landing.jsx";
import "./App.css";
import Ledger from "./screens/ledger/Ledger.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/ledger" element={<Ledger/>} />
            </Routes>
        </div>
    )
}

export default App