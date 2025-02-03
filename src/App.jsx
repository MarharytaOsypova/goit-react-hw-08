
 import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
 
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFound from "./components/NotFound/NotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/operations";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
 
 

const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
   dispatch(refreshUserThunk()) 

  }, [dispatch])

    if (isRefreshing) {
    return <p>Loading...</p>;  
  }

  return (
  <div>
      <Routes>
 <Route path="/" element={<Layout/>}>
        <Route index element={<PrivateRoute><HomePage/></PrivateRoute>} />
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
