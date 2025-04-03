import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Signup } from './API.js';
import { motion } from 'framer-motion';

const Test = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    collegeName: '',
    collegeAddress: '',
    email: '',
    collegePhone: '',
    levels: '',
    district: '',
    province: '',
    municipality: '',
    ward: ''
  });

 
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [isChecked, setIsChecked] = useState(false);


  const [districts, setDistricts] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [wards, setWards] = useState([]);


  const [loading, setLoading] = useState({
    districts: false,
    provinces: false,
    municipalities: false,
    wards: false,
    form: false
  });

  
  useEffect(() => {
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  }, [previewURL]);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        setLoading(prev => ({ ...prev, districts: true }));
        
      
        const response = await fetch('');
        
        if (!response.ok) {
          throw new Error('Failed to fetch districts');
        }
        
        const data = await response.json();
        setDistricts(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
       // setLoading(prev => ({ ...prev, districts: false }));
      }
    };

    fetchDistricts();
  }, []);

  useEffect(() => {
    const fetchProvinces = async () => {
      if (!formData.district) return;

      try {
        setLoading(prev => ({ ...prev, provinces: true }));
        
        const response = await fetch();
        
        if (!response.ok) {
          throw new Error('Failed to fetch provinces');
        }
        
        const data = await response.json();
        setProvinces(data);
     
        setFormData(prev => ({
          ...prev,
          province: '',
          municipality: '',
          ward: ''
        }));
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(prev => ({ ...prev, provinces: false }));
      }
    };

    fetchProvinces();
  }, [formData.district]);


  useEffect(() => {
    const fetchMunicipalities = async () => {
      if (!formData.province) return;

      try {
        setLoading(prev => ({ ...prev, municipalities: true }));
        
        const response = await fetch();
        
        if (!response.ok) {
          throw new Error('Failed to fetch municipalities');
        }
        
        const data = await response.json();
        setMunicipalities(data);
       
        setFormData(prev => ({
          ...prev,
          municipality: '',
          ward: ''
        }));
      } catch (err) {
        toast.error(err.message);
       } finally {
      //   setLoading(prev => ({ ...prev, municipalities: false }));
       }
    };

    fetchMunicipalities();
  }, [formData.province]);


  useEffect(() => {
    const fetchWards = async () => {
      if (!formData.municipality) return;

      try {
        setLoading(prev => ({ ...prev, wards: true }));
        
        const response = await fetch();
        
        if (!response.ok) {
          throw new Error('Failed to fetch wards');
        }
        
        const data = await response.json();
        setWards(data);
      
        setFormData(prev => ({
          ...prev,
          ward: ''
        }));
      } catch (err) {
        toast.error(err.message);
      } finally {
       // setLoading(prev => ({ ...prev, wards: false }));
      }
    };

    fetchWards();
  }, [formData.municipality]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {

      // if (!uploadedFile.type.match('image.')) {
      //   toast.error('Please upload an image file');
      //   return;
      // }
      
    
      // if (uploadedFile.size > 5 * 1024 * 1024) {
      //   toast.error('File size should be less than 5MB');
      //   return;
      // }

      setFile(uploadedFile);
      setPreviewURL(URL.createObjectURL(uploadedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!formData.collegeName || !formData.collegeAddress || !formData.adminEmail || 
        !formData.collegePhone || !formData.levels || !file || 
        !formData.district || !formData.province || !formData.municipality || !formData.ward) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!isChecked) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    try {
      setLoading(prev => ({ ...prev, form: true }));
      
      const formDataToSend = new FormData();
      formDataToSend.append('collegeName', formData.collegeName);
      formDataToSend.append('collegeAddress', formData.collegeAddress);
      formDataToSend.append('adminEmail', formData.adminEmail);
      formDataToSend.append('collegePhone', formData.collegePhone);
      formDataToSend.append('levels', formData.levels);
      formDataToSend.append('district', formData.district);
      formDataToSend.append('province', formData.province);
      formDataToSend.append('municipality', formData.municipality);
      formDataToSend.append('ward', formData.ward);
      formDataToSend.append('collegePAN', file);

      const response = await Signup(formDataToSend);
      
      if (response.data.success) {
        localStorage.setItem('email', email);
        navigate('/OTP');
        toast.success(' successful! Please verify your email');
      } else {
        throw new Error(response.data.message || 'Registration failed');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || 'Registration failed');
    } finally {
     // setLoading(prev => ({ ...prev, form: false }));
    }
  }


  return (
    <div className="min-h-screen flex justify-center items-center px-2.5  font-poppins">
      <div className="w-full max-w-2xl bg-white   p-6 md:p-8 rounded-lg  shadow-[13px_19px_36px_-9px_rgba(59,_130,_246,_0.5)] ">
        <div className=" relative pb-1 items-center font-bold  text-3xl justify-center flex">
         Sign Up
        </div>
        <h1 className='items-center  text-2xl  font-semibold justify-center flex'>Sign Up to start your anonymous adventure</h1>

        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap justify-between gap-y-4 my-5">
              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">College Name:</label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="Enter college name"
                  required
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all"
                />
              </div>

              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">College Address:</label>
                <input
                  type="text"
                  name="collegeAddress"
                  value={formData.collegeAddress}
                  onChange={handleChange}
                  placeholder="Enter college address"
                  required
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all"
                />
              </div>

              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">Admin Email:</label>
                <input
                  type="email"
                  name="adminEmail"
                  value={formData.adminEmail}
                  onChange={handleChange}
                  placeholder="Enter admin email"
                  required
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all"
                />
              </div>

              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">Phone Number:</label>
                <input
                  type="tel"
                  name="collegePhone"
                  value={formData.collegePhone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all"
                />
              </div>

              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">Education Levels:</label>
                <select
                  name="levels"
                  value={formData.levels}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all"
                >
                  <option value="">Select Education Level</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="CSIT">CSIT</option>
                  <option value="BBS">BBS</option>
                </select>
              </div>

           
              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">College PAN (Image)</label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  required
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all"
                />
                {/* {previewURL && (
                  <div className="mt-2 text-sm text-blue-600">
                    File selected: <a href={previewURL} target="_blank" rel="noopener noreferrer" className="underline">View</a>
                  </div>
                )} */}
              </div>

             
              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">District:</label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all"
                >
                  <option value="">Select District</option>
                  {loading.districts ? (
                     <option></option>
                  ) : (
                    districts.map(district => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">Province:</label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  disabled={!formData.district || loading.provinces}
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all disabled:opacity-50"
                >
                  <option value="">Select Province</option>
                  {loading.provinces ? (
                    <option>Loading provinces...</option>
                  ) : (
                    provinces.map(province => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))
                  )}
                </select>
              </div>

          
              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">Municipality:</label>
                <select
                  name="municipality"
                  value={formData.municipality}
                  onChange={handleChange}
                  required
                  disabled={!formData.province || loading.municipalities}
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all disabled:opacity-50"
                >
                  <option value="">Select Municipality</option>
                  {loading.municipalities ? (
                    <option>Loading municipalities...</option>
                  ) : (
                    municipalities.map(municipality => (
                      <option key={municipality.id} value={municipality.id}>
                        {municipality.name}
                      </option>
                    ))
                  )}
                </select>
              </div>

        
              <div className="w-full md:w-[calc(50%-20px)]">
                <label className="block font-medium mb-1">Ward:</label>
                <select
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  required
                  disabled={!formData.municipality || loading.wards}
                  className="w-full h-11 px-4 rounded border border-gray-300 border-b-2 focus:border-gray-600 focus:outline-none transition-all disabled:opacity-50"
                >
                  <option value="">Select Ward</option>
                  {loading.wards ? (
                    <option>Loading wards...</option>
                  ) : (
                    wards.map(ward => (
                      <option key={ward.id} value={ward.id}>
                        {ward.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</a>
              </label>
            </div>

          
            <div className="h-11 my-8">
              <button
                type="submit"
                disabled={loading.form}
                className={`w-full h-full rounded bg-blue-800 text-white hover:bg-blue-900 transition-colors ${loading.form ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading.form ? 'Please wait...' : 'Sign Up'}
              </button> 
                 
     
       

            </div>
          </form>
        </div>
      </div>
    </div>

  );
};;;


export default Test;