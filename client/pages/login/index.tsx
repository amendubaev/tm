import React, { SyntheticEvent, useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import styles from "../../styles/common/auth.module.scss";
import formStyles from "../../styles/common/form.module.scss";
import btnStyles from "../../styles/common/button.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onSubmitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                email,
                password,
            }),
        });

        await router.push("/");
    };

    return (
        <AuthLayout>
            <div className={styles.authBox}>
                <h1>Hey, 👋</h1>
                <p>Enter your credentials to login</p>
                <form
                    className={`${formStyles.form} ${styles.authForm}`}
                    onSubmit={onSubmitHandler}
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
                </form>
            </div>
        </AuthLayout>
    );
};

export default Login;
