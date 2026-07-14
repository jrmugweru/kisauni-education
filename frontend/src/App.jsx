import { Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Schools from "./Pages/Schools";
import TransferForms from "./Pages/TransferForms";
import Admissions from "./Pages/Admissions";
import ReportIssue from "./Pages/ReportIssue";
import Announcements from "./Pages/Announcements";

import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminRegister from "./Pages/Admin/AdminRegister";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminAnnouncements from "./Pages/Admin/AdminAnnouncements";
import AdminReports from "./Pages/Admin/AdminReport";
import AdminProfile from "./Pages/Admin/AdminProfile";
import AdminSettings from "./Pages/Admin/AdminSetting";

import ProtectedRoute from "./Components/Admin/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/transfer-forms" element={<TransferForms />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/report-issue" element={<ReportIssue />} />
      <Route path="/announcements" element={<Announcements />} />

      {/* Authentication */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-register" element={<AdminRegister />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-announcements"
        element={
          <ProtectedRoute>
            <AdminAnnouncements />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-reports"
        element={
          <ProtectedRoute>
            <AdminReports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-profile"
        element={
          <ProtectedRoute>
            <AdminProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-settings"
        element={
          <ProtectedRoute>
            <AdminSettings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;