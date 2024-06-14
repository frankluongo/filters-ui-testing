/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <div className="block container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
