import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function useLogout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch({ type: "FLUSH_USER_WORKOUTS" });
        dispatch({ type: "LOGOUT_USER" });
        localStorage.removeItem("user");

    }, [])

}

export default useLogout;