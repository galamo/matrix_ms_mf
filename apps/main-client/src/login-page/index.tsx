import React, { useEffect, useState } from "react"
import axios from "axios"
import { Login } from "LoginPage/Login"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const navigate = useNavigate();

    return <div>
        <Login redirectCallback={navigate} />
    </div>


}

