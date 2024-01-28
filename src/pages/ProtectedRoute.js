import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

import NavBar from "../layout/NavBar";
import Home from "./Home";
import MyClientsPage from "./MyClientsPage";
import ApprovalPage from "./ApprovalPage";
import AppointmentHistoryPage from "./AppointmentHistoryPage";

function ProtectedRoute() {
  const token = Cookies.get("token");
  return (
    <Routes>
      <Route path="/" element={token ? <NavBar /> : <Navigate to="/login" />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="myClients" element={<MyClientsPage />} />
        <Route path="appointment/approval" element={<ApprovalPage />} />
        <Route
          path="appointment/history"
          element={<AppointmentHistoryPage />}
        />
      </Route>
    </Routes>
  );
}

export default ProtectedRoute;
