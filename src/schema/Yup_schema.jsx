import * as Yup from "yup";
export const Yup_schema = Yup.object({
  FullName: Yup.string().min(3).max(50).required("Please Fill Full Name"),
  email: Yup.string().email().required("Please Fill This Email"),
  Contact: Yup.string().min(10).required("Please Fill This Contact"),
  talk: Yup.string().min(10).max(100),
});
