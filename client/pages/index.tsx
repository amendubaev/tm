import styles from "../styles/app.module.scss";
import Header from "../components/Header";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
    return (
        <>
            <MainLayout>
                <Header />
            </MainLayout>
        </>
    );
}
