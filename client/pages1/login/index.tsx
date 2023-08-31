'use client';
import React, { SyntheticEvent, useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import styles from "../../styles/common/auth.module.scss"; 
import formStyles from "../../styles/common/form.module.scss";
import btnStyles from "../../styles/common/button.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { LoginFormDTO } from "../../api1/dto/auth.dto";
import { toast } from "react-toastify";
import { setCookie } from "nookies";
import axios from "@/utils/axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onSubmitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        axios.post(`/api/auth/login`, data)
        .then(function (response) {
            setCookie(null, "token", response?.data?.token, {
                path: "/",
            });
            router.push("/");
        })
        .catch(function (error) {
            toast.error(error.response?.data?.message);
        });
        return false;
    };

    return (
        <AuthLayout>
            <div className={styles.authBox}>
                <h1>Hey, 👋</h1>
                <p>Enter your credentials to login</p>
                <form
                    className={`${formStyles.form} ${styles.authForm}`}
                    onSubmit={(e) => onSubmitHandler(e)}
                >
                    <div className={formStyles.form_fields}>
                        <div className={formStyles.form_field}>
                            <label
                                htmlFor="email"
                                className={formStyles.form_field_label}
                            >
                                Email
                            </label>
                            <input
                                className={formStyles.form_field_input}
                                type="email"
                                name="email"
                                id="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={formStyles.form_field}>
                            <label
                                htmlFor="password"
                                className={formStyles.form_field_label}
                            >
                                Password
                            </label>
                            <input
                                className={formStyles.form_field_input}
                                type="password"
                                name="password"
                                id="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input
                            className={`${formStyles.form_field_submit} ${btnStyles.btn} ${btnStyles.btn_primary}`}
                            type="submit"
                            value="Login"
                        />
                    </div>
                    <Link href="/register">Sign Up</Link>
                    <Link href="https://oauth.yandex.ru/authorize?response_type=token&client_id=beed65e1c07649699a490d307c01b1e0&redirect_uri=http://localhost:3000/login&display=popup">Login</Link>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Login;
