import { Navigate } from 'react-router-dom'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import Q15StaffConfiguration from '../pages/staffConfiguration'
import AccessControl from '../pages/accesscontrol'
import SecretKey from '../pages/secretkey'
import Organization from '../pages/organizationDetails'
import Staff from '../pages/Staff/intex'
import StaffCreation from '../pages/Staff/staffCreation'
import PatientCreation from '../pages/Patient/patientCreation'
import Patient from '../pages/Patient/intex'
import Beacon from '../pages/beaconDevices'
import OrganizationForm from '../pages/organizationDetails/Form';
import Q15Report from '../pages/q15Report'
import BedAssign from '../pages/bedAssign'
import PatientAssign from '../pages/patientAssign'
import BedCreation from '../pages/bedAssign/bedCreation'
import PatientUpdation from '../pages/Patient/patientUpdate'
import StaffUpdation from '../pages/Staff/staffUpdate'
import OrganizationUpdate from '../pages/organizationDetails/organizationUpdate'
import ForgotPassword from '../pages/forgotPassword'
import VerifyOtp from '../pages/verifyOtp'
import ChangePassword from '../pages/changePassword'
import ResetSecretKey from '../pages/resetSecretKey'
import RecreatePassword from '../pages/recreatePassword'

const SuperAdminRoutes = [

  { path: '/dashboard', component: <Dashboard /> },
  { path: '/access-control', component: <AccessControl /> },
  { path: '/organization-details', component: <Organization /> },
  {path:'/organization-form',component:<OrganizationForm/>},
  {path:'/organization-update/:id',component:<OrganizationUpdate/>},

];
const SystemAdminRoutes = [

  { path: '/staff-table', component: <Staff /> },
  { path: '/Beacon-register', component: <Beacon/>},
  { path: '/staff-register', component: <StaffCreation/>},
  {path:'/staff-update/:id',component:<StaffUpdation/>}
]
const AdminRoutes = [
  // { path: '/dashboard', component: <Dashboard />},
  { path: '/q15-staff-configuration', component: <Q15StaffConfiguration /> },
  { path: '/management/patient-table', component: <Patient />},
  // { path: '/staff-table', component: <Staff /> },
  // { path: '/Beacon-register', component: <Beacon/>},
  // { path: '/staff-register', component: <StaffCreation/>},
  { path: '/management/patient-register', component: <PatientCreation/>},
  { path: '/q15-report', component: <Q15Report/>},
  {path:'/management/bed-assign', component:<BedCreation/>},
  {path:'/management/bed-table',component:<BedAssign/>},
  {path:'/patient-assign',component:<PatientAssign/>},
  {path:'/management/patient-update/:id',component:<PatientUpdation/>},
  // {path:'/staff-update/:id',component:<StaffUpdation/>}


];

const publicRoutes = [
  { path: '/', exact: true, component: <Navigate to="/login" /> },
  {path: '/login', component: <Login />},
  {path: '/secret-key', component: <SecretKey />},
  {path:'/forgot-password',component:<ForgotPassword/>},
  {path:'/verify-otp',component:<VerifyOtp/>},
  {path:'/change-password',component:<ChangePassword/>},
  {path:'/resetSecretKey',component:<ResetSecretKey/>},
  {path:'/recreatePassword',component:<RecreatePassword/>}
]

// const defaultRoute = { path: '*', element: <Navigate to="/login" /> };

export { AdminRoutes, SuperAdminRoutes, publicRoutes, SystemAdminRoutes }
