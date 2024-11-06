import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser, getAllUser } from "../apiCalls/users";
import { hideLoader, showLoader } from "../redux/loaderSlice";
import { useDispatch } from "react-redux";
import { setAllUser, setUser } from "../redux/userSlice";

function ProtectedRoute({children}) {
    // const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getLoggedInUser = async ()  => {
        let response = null;
        try {
            dispatch(showLoader());
            response = await getLoggedUser();
            dispatch(hideLoader());
            if(response.success) {
                dispatch(setUser(response.data));
            } else {
                navigate('/login');
            }
        } catch (error) {
            dispatch(hideLoader());
            navigate('/login');
        }
    };

    const getAllUsers = async () => {
        let response = null;
        try {
            dispatch(showLoader());
            response = await getAllUser();
            dispatch(hideLoader());

            if(response.success) {
                dispatch(setAllUser(response.data));
            } else {
                navigate('/login');
            }
        } catch (error) {
            dispatch(hideLoader());
            navigate('/login');
        }
    };

    useEffect(() => {
        if(localStorage.getItem('token')) {
            // write logic to get the details of current user
            getLoggedInUser();
            getAllUsers();
        } else {
            navigate('/login');
        }
    }, []);

    return (
        <div>
            {children}
        </div>
    );
}

export default ProtectedRoute;