import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function useUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const user: string = JSON.parse(localStorage.getItem("user"));

        if (user) {
            dispatch({ type: "LOGIN_USER", payload: user });
            navigate("/home");
        } else {
            navigate("/login")
        }
    }, [])
}

export default useUser;
