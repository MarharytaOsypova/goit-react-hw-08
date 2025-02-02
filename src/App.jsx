
 import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
 
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFound from "./components/NotFound/NotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/operations";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
 
 

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(refreshUserThunk()) 

  }, [dispatch])

  return (
  <div>
      <Routes>
 <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
        </Route> 
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<RestrictedRoute><RegistrationPage/></RestrictedRoute>} />
        <Route path="/login" element={<RestrictedRoute><LoginPage/></RestrictedRoute>} />
      </Routes>
</div>

)


}
 
export default App
