'use client';
import React, { useEffect, useState } from "react";
import { IUser } from "../../../types/interfaces";
import styles from "../header.module.scss";

const RightNav = () => {
  const [user, setUser] = useState<IUser>();
  const [auth, setAuth] = useState(false);
  // useEffect(() => {
  //     (async () => {
  //         try {
  //             const response = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/auth/user`, {
  //                 credentials: "include",
  //             });

  //             console.log(response);
  //             if(response.status == 401) return false;

  //             const content = await response.json();
  //             setUser(content);
  //             setAuth(true);

  //         } catch (e) {
  //             setAuth(false);
  //         }
  //     })();
  // }, [auth]);
  console.log(user)
  return (
    <>
      <div className="user-profile">
        {user?.photo &&
          <div className="user_photo">
          </div>
        }
        {user?.firstName}
      </div>
    </>
  );
};

export default RightNav;