import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function useUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user: string = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (user) {
            dispatch({ type: "LOGIN_USER", payload: user });
            navigate("/home");
        }
    }, [])
}

export default useUser;
