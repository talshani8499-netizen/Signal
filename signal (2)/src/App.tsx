/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PlatformLayout from "./components/PlatformLayout";
import Landing from "./pages/Landing";
import Analyze from "./pages/Analyze";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route element={<PlatformLayout />}>
          <Route path="analyze" element={<Analyze />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
