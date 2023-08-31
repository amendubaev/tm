import axios from "axios";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
// import axios from "@/core/axios";
// import * as Api from "@/api";

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  const { token } = nookies.get(ctx);
  // console.log(token);

  axios.defaults.headers.Authorization = "Bearer " + token;

  if(!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  } else {
    return {};
  }

  // try {
  //  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/users/me`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     // body: JSON.stringify(),
  //   });
  //   console.log(res);
  //   return {
  //     props: {},
  //   };
  // } catch (err) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }
};