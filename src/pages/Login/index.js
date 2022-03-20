import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/loginSlice";
import { clearState } from "../../redux/slices/loginSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const loginstore = useSelector((state) => state.login);
  // console.log("loginstore", loginstore);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    // if (localStorage.token) {
    //   navigate("/");
    // }
  };

  return (
    <React.Fragment>
      <div
        className="hero fixed min-h-screen w-screen bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/Backgroud Image.png")',
        }}
      ></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto relative pt-32">
          <div className="bg-base-100 p-8 mt-12 my-5 md:pt-12 max-w-4xl mx-auto rounded-box">
            <div className="text-center">
              <h2 className="mt-4">เข้าสู่ระบบ</h2>
              <hr className="mt-6"></hr>
            </div>
            <div className="form-control md:w-5/12 w-9/12 mt-5 mx-auto">
              <label className="label">
                <span className="label-text far fa-envelope"> อีเมล</span>
              </label>
              <input
                type="email"
                placeholder="อีเมล"
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control md:w-5/12 w-9/12 mt-5 mx-auto grid justify-items-stretch">
              <label className="label">
                <span className="label-text fas fa-unlock-alt"> รหัสผ่าน</span>
              </label>
              <input
                className="input input-bordered"
                name="pwd"
                placeholder="รหัสผ่าน"
                type={isRevealPwd ? "text" : "password"}
                {...register("password")}
              />
              <div
                className="absolute mt-8 justify-self-end mr-4"
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
              >
                {isRevealPwd ? (
                  <i className="fas fa-eye text-sm" />
                ) : (
                  <i className="fas fa-eye-slash text-sm" />
                )}
              </div>
              <div className="text-right mt-8">
                <h6>
                  <a href="/Editpassword" className="link link-primary">
                    ลืมรหัสผ่าน ?
                  </a>
                </h6>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-5">
              <button
                type="submit"
                className="btn btn-primary col-start-2 col-span-1"
              >
                เข้าสู่ระบบ
              </button>
            </div>
            <div className="text-center mt-8">
              <h6>
                ไม่มีบัญชี{" "}
                <Link to={"/Register"} className="link link-primary">
                  สร้างบัญชีใหม่
                </Link>
              </h6>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-7 mt-5">
              <hr className="md:col-start-2 md:col-span-1 col-start-2 col-span-1 mt-3"></hr>
              <h4 className="md:col-start-3 md:col-span-1 col-start-3 col-span-3 mb-10 text-center">
                หรือ สมัครสมาชิกด้วย
              </h4>
              <hr className="md:col-start-4 md:col-span-1 col-start-6 col-span-1 mt-3"></hr>
            </div>
            <div className="grid md:grid-cols-4 md:w-full grid-cols-1 mb-10 gap-5 w-2/4 mx-auto ">
              <button className="btn bg-primary-content text-black md:col-start-2 md:col-span-1 hover:bg-primary-focus">
                <div className="mr-2 mb-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1711 8.36788H17.4998V8.33329H9.99984V11.6666H14.7094C14.0223 13.607 12.1761 15 9.99984 15C7.23859 15 4.99984 12.7612 4.99984 9.99996C4.99984 7.23871 7.23859 4.99996 9.99984 4.99996C11.2744 4.99996 12.434 5.48079 13.3169 6.26621L15.674 3.90913C14.1857 2.52204 12.1948 1.66663 9.99984 1.66663C5.39775 1.66663 1.6665 5.39788 1.6665 9.99996C1.6665 14.602 5.39775 18.3333 9.99984 18.3333C14.6019 18.3333 18.3332 14.602 18.3332 9.99996C18.3332 9.44121 18.2757 8.89579 18.1711 8.36788Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 4.99996 9.99994 4.99996C11.2745 4.99996 12.4341 5.48079 13.317 6.26621L15.6741 3.90913C14.1858 2.52204 12.1949 1.66663 9.99994 1.66663C6.79911 1.66663 4.02327 3.47371 2.62744 6.12121Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M9.9998 18.3334C12.1523 18.3334 14.1081 17.5096 15.5869 16.17L13.0077 13.9875C12.1429 14.6452 11.0862 15.0009 9.9998 15C7.8323 15 5.99189 13.618 5.29855 11.6892L2.58105 13.783C3.96022 16.4817 6.76105 18.3334 9.9998 18.3334Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M18.1712 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.988L13.0079 13.9871L15.5871 16.1696C15.4046 16.3355 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1712 8.36796Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                Google
              </button>
              <button className="btn bg-primary-content text-info md:col-start-3 md:col-span-1 hover:bg-primary-focus">
                <div className="mr-2 mb-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0001 10.0613C20.0001 4.50378 15.5226 -0.0012207 10.0001 -0.0012207C4.47506 2.92969e-05 -0.00244141 4.50378 -0.00244141 10.0625C-0.00244141 15.0838 3.65506 19.2463 8.43506 20.0013V12.97H5.89756V10.0625H8.43756V7.84378C8.43756 5.32253 9.93131 3.93003 12.2151 3.93003C13.3101 3.93003 14.4538 4.12628 14.4538 4.12628V6.60128H13.1926C11.9513 6.60128 11.5638 7.37753 11.5638 8.17378V10.0613H14.3363L13.8938 12.9688H11.5626V20C16.3426 19.245 20.0001 15.0825 20.0001 10.0613Z"
                      fill="#0D8AF0"
                    />
                  </svg>
                </div>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
