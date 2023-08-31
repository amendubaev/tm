import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import AddProjectForm from "../components/Project/AddProject";
import MainLayout from "../layouts/MainLayout";
import { checkAuth } from "../utils/checkAuth";

export default function Home() {
    return (
        <>
            <MainLayout>
                <AddProjectForm />
            </MainLayout>
        </>
    );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);
    if ("redirect" in authProps) {
      return authProps;
    }
    return {
        props: {},
    };
};
