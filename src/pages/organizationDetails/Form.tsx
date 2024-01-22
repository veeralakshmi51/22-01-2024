// import React, { useEffect, useState } from "react";
// import { FormGroup } from "reactstrap";
// import "./form.css";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { TextField } from "@mui/material";
// import { useNavigate } from 'react-router-dom';

// interface FormData {
//   organizationName: string;
//   organizationType: string;
//   organizationId: string;
//   duration: string,
//   startTime: string,
//   mobileNumber: string;
//   email: string;
//   websiteUrl: string;
//   hippaPrivacyOfficerName: string;
//   proximityVerification: string;
//   geofencing: string;
//   q15Access:string ;
// }
// interface OrganizationType {
//   id: string;
//   value: string;
//   type: string;
// }
// const OrganizationForm: React.FC = () => {
//   const [error, setError] = useState<string | null>(null);

//   const [organizationType, setOrganizationType] = useState<OrganizationType[]>(
//     []
//   );
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState<FormData>({
//     organizationName: "",
//     organizationType: "",
//     organizationId:'',
//     duration:"",
//     startTime:"",
//     mobileNumber: "",
//     email: "",
//     websiteUrl: "",
//     hippaPrivacyOfficerName: "",
//     proximityVerification: "",
//     geofencing: "",
//     q15Access: "",
//   });
//   useEffect(() => {
//     const fetchOrganizationTypes = async () => {
//       try {
//         const response = await axios.get(
//           "http://47.32.254.89:7000/api/dropdowns/getByDropdown?dropdown=Organization%20Type"
//         );
//         setOrganizationType(response.data.data[0]?.list || []);
//         console.log("fetched data:", response.data);
//       } catch (error) {
//         console.error("Error fetching organization types:", error);
//         setError("Error fetching organization types. Please try again.");
//       }
//     };
//     fetchOrganizationTypes();
//   }, []);

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://47.32.254.89:7000/api/org/register",
//         {
//           organizationdetails: [
//             {
//               id:formData.organizationId,
//               name: formData.organizationName,
//               type: formData.organizationType,
//             },
//           ],
//           shift:{
//             duration:formData.duration,
//             startTime:formData.startTime

//           },
//           // contact: [
//           //   {
//           //     addressLine1: '',
//           //     addressLine2: '',
//           //     city: '',
//           //     state: '',
//           //     country: '',
//           //     zip: 0,
//           //   },
//           // ],
//           email: formData.email,
//           mobileNumber: formData.mobileNumber,
//           websiteUrl: formData.websiteUrl,
//           proximityVerification: formData.proximityVerification,
//           geofencing: formData.geofencing,
//           q15Access: formData.q15Access,
//           hippaprivacyofficer: [
//             {
//               name: formData.hippaPrivacyOfficerName,
//               // email: '',
//               // mobile: '',
//             },
//           ],
//         }
//       );

//       if (response.status === 200) {
//         console.log("Registration Data", response.data);
//         toast.success(response.data.message.description);
//       } else {
//         console.error("Error registering:", response.data.message);
//         toast.warning(`Error: ${response.data.message.description}`);
//       }
//     } catch (error) {
//       console.error("Error registering:", error);
//       toast.warning("An error occurred during registration.");
//     }
//   };

// return (
//   <div className="d-flex align-items-center justify-content-center vh-100">
//     <div className="row">
//       <div className="container col-md-12">
//         <h1 className="mt-1">Details</h1>
//         <hr></hr>
//         <FormGroup>
//           <form onSubmit={handleSubmit}>
//           <div className="row w-150 ">
//         <div className='col-md-6 mb-2'>
//           <TextField id="outlined-basic-1" label="OrganizationName" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}/>
//         </div>
//         <div className='col-md-6 mb-2'>
//           <TextField id="outlined-basic-2" label="Organization Email" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
//         </div>
//       </div>

//             <div className="mt-2">
//               <label htmlFor="organizationType" className="label">
//                 Organization Type
//               </label>
//               <select
//                 id="organizationType"
//                 name="organizationType"
//                 value={formData.organizationType}
//                 onChange={(e) =>
//                   handleInputChange("organizationType", e.target.value)
//                 }
//                 className="form-control"
//               >
//                 <option value="" disabled>
//                   Select Organization Type
//                 </option>
//                 {organizationType.length > 0 &&
//                   organizationType.map((type) => (
//                     <option key={type.id} value={type.value}>
//                       {type.value}
//                     </option>
//                   ))}
//               </select>
//             </div>
           

//              <div className="row w-150 ">
//     <div className='col-md-6 mt-4'>
//       <TextField id="outlined-basic-1" label="Mobile Number" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}/>
//     </div>
//     <div className='col-md-6 mt-4'>
//       <TextField id="outlined-basic-2" label="Website URL" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}/>
//     </div>    
//   </div>

//   <div className="row w-150 ">
//     <div className='col-md-4 mt-4'>
//       <TextField id="outlined-basic-1" label="HIPPA Officer Name" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, hippaPrivacyOfficerName: e.target.value })}/>
//     </div>
//     <div className='col-md-4 mt-4'>
//           <TextField id="outlined-basic-1" label="Duration" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, duration: e.target.value })}/>
//         </div>
//         <div className='col-md-4 mt-4'>
//           <TextField id="outlined-basic-2" label="Start Time" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}/>
//         </div>
//          </div>

//          <div className="row w-150 ">
//           <div className="mt-2">
//           <label htmlFor="organizationType" className="label">
//                 Access Control
//               </label>
//           </div>
//         <div className='col-md-4 mt-2'>
//           <TextField id="outlined-basic-1" label="Proximity" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, proximityVerification: e.target.value })}/>
//         </div>
//         <div className='col-md-4 mt-2'>
//           <TextField id="outlined-basic-2" label="Q15" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, q15Access: e.target.value })}/>
//         </div>
//         <div className='col-md-4 mt-2'>
//           <TextField id="outlined-basic-3" label="Geo Fencing" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, geofencing: e.target.value })}/>
//         </div>
//       </div>
//             <br></br>
//             <div className="mt-2">
//             {/* <Button label="Cancel"  onClick={() => { navigate(-1) }} severity="primary" style={{color:'#000',backgroundColor:'#fff', border:'2px solid #0f3995'}}/> */}
//               <button className="btn btn-success">Submit</button>
//             </div>
//             <br></br>
           
//             {error && <p style={{ color: "red" }}>{error}</p>}
//           </form>
//         </FormGroup>
//         <ToastContainer/>
//       </div>
//     </div>
//   </div>
// );
// };

// export default OrganizationForm;


import React, { useEffect, useState } from "react";
import { FormGroup } from "reactstrap";
import "./form.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { baseURL } from "../../configuration/url";

interface FormData {
  organizationName: string;
  organizationType: string;
  organizationId: string;
  duration: string,
  startTime: string,
  mobileNumber: string;
  email: string;
  websiteUrl: string;
  hippaPrivacyOfficerName: string;
  proximityVerification: string;
  geofencing: string;
  q15Access: string;
}
interface OrganizationType {
  id: string;
  value: string;
  type: string;
}
const OrganizationForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const [organizationType, setOrganizationType] = useState<OrganizationType[]>(
    []
  );
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    organizationName: "",
    organizationType: "",
    organizationId: '',
    duration: "",
    startTime: "",
    mobileNumber: "",
    email: "",
    websiteUrl: "",
    hippaPrivacyOfficerName: "",
    proximityVerification: "",
    geofencing: "",
    q15Access: "",
  });

  useEffect(() => {
    const fetchOrganizationTypes = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/dropdowns/getByDropdown?dropdown=Organization%20Type`
        );
        setOrganizationType(response.data.data[0]?.list || []);
        console.log("fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching organization types:", error);
        setError("Error fetching organization types. Please try again.");
      }
    };
    fetchOrganizationTypes();
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSelectChange = (fieldName: string, value: any) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${baseURL}/org/register`,
        {
          organizationdetails: [
            {
              id: formData.organizationId,
              name: formData.organizationName,
              type: formData.organizationType,
            },
          ],
          shift: {
            duration: formData.duration,
            startTime: formData.startTime

          },
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          websiteUrl: formData.websiteUrl,
          proximityVerification: formData.proximityVerification,
          geofencing: formData.geofencing,
          q15Access: formData.q15Access,
          hippaprivacyofficer: [
            {
              name: formData.hippaPrivacyOfficerName,
            },
          ],
        }
      );

      if (response.data.message.code === "MHC - 0200") {
        console.log("Registration Data", response.data);
        toast.success(response.data.message.description);
        navigate('/organization-details');
      } else {
        console.error("Error registering:", response.data.message);
        toast.warning(`Error: ${response.data.message.description}`);
      }
    } catch (error) {
      console.error("Error registering:", error);
      toast.warning("An error occurred during registration.");
    }

  };

  

  return (
    <div className="d-flex align-items-center justify-content-center vh-90">
      <div className="row">
        <div className="container col-md-12">
          <h3 className="mt-1">Register A Fresh Organization</h3>
          <hr></hr>
          <FormGroup>
            <form onSubmit={handleSubmit}>
              <div className="row w-100 ">
                <div className='col-md-6 mb-2'>
                  <TextField id="outlined-basic-1" label="OrganizationName" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })} />
                </div>
                <div className='col-md-6 mb-1'>
                  <TextField id="outlined-basic-2" label="Organization Email" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>
              <div className="row w-100 ">
                <div className="col-md-4 mt-3 mb-2">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="OrganizationType">Organization Type</InputLabel>
                    <Select
                      labelId="OrganizationType"
                      id="OrganizationType"
                      label="OrganizationType"
                      value={formData.organizationType}
                      onChange={(e) => handleInputChange("organizationType", e.target.value)}
                      MenuProps={{ style: { maxHeight: '300px' } }} // Set your preferred maxHeight
                    >
                      {organizationType.length > 0 &&
                        organizationType.map((type) => (
                          <MenuItem key={type.id} value={type.value}>
                            {type.value}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>

                <div className='col-md-4 mt-3'>
                  <TextField id="outlined-basic-1" label="Contact Number" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} />
                </div>
                <div className='col-md-4 mt-3'>
                  <TextField id="outlined-basic-2" label="Website URL" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })} />
                </div>
              </div>

              <div className="row w-100 ">
                <div className='col-md-4 mt-3'>
                  <TextField id="outlined-basic-1" label="HIPPA Officer Name" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, hippaPrivacyOfficerName: e.target.value })} />
                </div>
                <div className='col-md-4 mt-3'>
                  <TextField id="outlined-basic-1" label="Duration" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, duration: e.target.value })} />
                </div>
                <div className='col-md-4 mt-3'>
                  <TextField id="outlined-basic-2" label="Start Time" variant="outlined" fullWidth onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} />
                </div>
              </div>

              <div className="row w-100">
                <div className="mt-3">
                  <label htmlFor="organizationType" className="label">
                    Access Control
                  </label>
                </div>
                <div className="col-md-4 mt-2">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="proximity-label">Proximity</InputLabel>
                    <Select
                      labelId="proximity-label"
                      id="proximity"
                      label="Proximity"
                      value={formData.proximityVerification}
                      onChange={(e) => handleInputChange('proximityVerification', e.target.value)}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-4 mt-2">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="q15-access-label">Q15</InputLabel>
                    <Select
                      labelId="q15-access-label"
                      id="q15Access"
                      label="Q15"
                      value={formData.q15Access}
                      onChange={(e) => handleSelectChange('q15Access', e.target.value)}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-4 mt-2">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="geofencing-label">Geo Fencing</InputLabel>
                    <Select
                      labelId="geofencing-label"
                      id="geofencing"
                      label="Geo Fencing"
                      value={formData.geofencing}
                      onChange={(e) => handleSelectChange('geofencing', e.target.value)}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-end mt-4">
                <Button label="Cancel" onClick={() => { navigate('/organization-details') }} severity="secondary" style={{ color: '#000', backgroundColor: '#fff', border: '2px solid #0f3995' }} />
                <Button label="Save" style={{ backgroundColor: '#0f3995' }} onClick={handleSubmit} />
              </div>
              <br></br>

              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </FormGroup>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default OrganizationForm;