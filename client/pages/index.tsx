import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
    const [message, setMessage] = useState("");
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:3000/api/user", {
                    credentials: "include",
                });

                const content = await response.json();
                console.log(content);
                setMessage(`Hi ${content.id}`);
                setAuth(true);
            } catch (e) {
                setMessage("You are not logged in");
                setAuth(false);
            }
        })();
    });

    return (
        <>
            <MainLayout>{message}</MainLayout>
        </>
    );
}
