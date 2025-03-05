import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { Yup_schema } from "../../schema/Yup_schema";
import "./Form.css";
const Form = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const initialValues = {
    FullName: "",
    email: "",
    Contact: "",
    talk: "",
  };
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues,
      validationSchema: Yup_schema,
      onSubmit: (values) => {
        console.log("Form Submitted:", values);
      },
    });

  const handleFile = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf,.doc,.docx,.png,.jpg,.jpeg";
    fileInput.style.display = "none";

    document.body.appendChild(fileInput);
    fileInput.click();
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        document.getElementById("file").innerHTML = `<p>${file.name}</p>`;
      }
      document.body.removeChild(fileInput);
    });
  };
  return (
    <div className="overflow-hidden">
      <div className="shadow-[rgba(255,255,255,0.76)]">
        <h1 className="text-white text-6xl mt-20">Tecoreng insights</h1>
        <div
          className="flex justify-between mt-25"
          id="main-div"
          style={{ display: "flex" }}
        >
          <div className="ml-2" id="side-text-div">
            <h1 className="text-3xl text-white font-semibold form-name1">
              We Are Here To Help You
            </h1>
            <h1 className="text-5xl text-white font-semibold mt-15 pr-30 leading-relaxed form-name2">
              Let's Transform Your Vision Into Value.
            </h1>
            <p className="text-xl mt-5 font-semibold text-white">Contact us</p>
            <div className="flex ml-3 mt-10">
              <img src="asset 57.svg" alt="" />
              <h1 className="ml-3 text-white">
                <a href="#">biz.tecoreng</a>
              </h1>
            </div>
            <div className="flex ml-3 mt-10">
              <img src="asset 58.svg" alt="" />
              <h1 className="ml-3 text-white">+91 85117 46476</h1>
            </div>
            <div className=" ml-3 mt-10">
              <h1 className="text-white text-4xl font-bold">Our Socials</h1>
              <p className="text-white font-semibold mt-3">
                Don't Miss To Follow Us On Our Social Networks Accounts.
              </p>
              <div className="flex gap-5 h-10 w-10 mt-5">
                <img src="asset 59.svg" alt="" />
                <img src="asset 60.svg" alt="" />
                <img src="asset 61.svg" alt="" />
                <img src="asset 62.svg" alt="" />
                <img src="asset 63.svg" alt="" />
                <img src="asset 64.svg" alt="" />
                <img src="asset 65.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="h-220 bg-white rounded-4xl mb-20" id="form-size">
            <div className="m-10">
              <h1 className="text-6xl font-semibold inner-name1">
                Get in{" "}
                <span className="text-orange-500 gradient-to-r from-orange-300 to-orange-600">
                  touch
                </span>{" "}
              </h1>
              <p className="">
                We are always ready to help. There are many ways to contact us.
                You may drop us a line, give us a call, send an email.
              </p>
              <div className="mt-7 ml-3">
                <form action="/" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="mb-1.5 p-1.5 pr-50 border-white"
                      name="FullName"
                      value={values.FullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.FullName && touched.FullName && (
                      <p className="text-red-600 text-sm">{errors.FullName}</p>
                    )}
                    <hr />
                  </div>
                  <div>
                    <select name="" id="">
                      <option value="">
                        <img src="asset 66.svg" alt="sorry" />
                      </option>
                      <option value="">USA</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Contact number"
                      className="mb-1.5 p-1.5"
                      name="Contact"
                      value={values.Contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Contact && touched.Contact && (
                      <p className="text-red-600 text-sm">{errors.Contact}</p>
                    )}
                    <hr />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="E-mail"
                      name="email"
                      className="mb-1.5 p-1.5 border-white"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-600 text-sm">{errors.email}</p>
                    )}
                    <hr />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Let's talk about your idea"
                      className="mb-1.5 p-1.5 border-white"
                      name="talk"
                      value={values.talk}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.talk && touched.talk && (
                      <p className="text-red-600 text-sm">{errors.talk}</p>
                    )}
                    <hr />
                  </div>
                  <div className="mt-10" onClick={handleFile}>
                    <div
                      className="border-1 border-dashed border-gray-600 h-30 flex justify-center items-center"
                      id="file"
                    >
                      <img src="asset 67.svg" alt="" width={20} height={20} />
                      <p className="text-xs text-gray-500 pl-1">
                        Upload Additional file
                      </p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <p className="text-sm text-gray-500">
                      File size of your document should not exceed 2MB.
                    </p>
                  </div>
                  <div className="mt-5">
                    <ReCAPTCHA
                      sitekey="6LdV59oqAAAAAHokiQcnHDR0nlsBDicy2GUHnov6"
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-8 mb-12">
                    <button
                      type="submit"
                      className="form-btn-size rounded-2xl px-50 py-3 text-white text-3xl font-semibold bg-orange-500 bg-gradient-to-r from-orange-300 to-orange-600 md:border-b-4 hover:-translate-y-1 hover:border-b-6 border-amber-700 duration-400"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;