import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function useUser() {
    let user: string;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        if (user) {
            dispatch({ type: "LOGIN_USER", payload: user });
            navigate("/home");
        } else {
            navigate("/login")
        }
    }, [])

    return user;
}

export default useUser;
