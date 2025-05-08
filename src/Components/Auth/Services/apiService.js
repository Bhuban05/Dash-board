const BASE_URL = import.meta.env.VITE_BASE_URL

const API_ENDPOINTS = {
  SIGNIN: `/auth/sign-in`,
  SIGNUP: `/college/request`,
  FORGET: `/auth/forgot-password`,
  OTP: `/college/validate`,
  RESETPASSWORD: `/auth/reset-password`, 
  COLLEGE: `/college/get-all`, 
  BOARD: `/board`, 
  TYPES: `board/types`,
  GETALL: `/college/get-all`,
  DISTRICTS: `/location/district/{provinceId}`,
  PROVINCES: `/location/province`,
  MUNICIPALIATY: `/location/municipality/{municiplityId}`,
  WARD: `/location/ward/{municipalityId}`

}

export default API_ENDPOINTS;
