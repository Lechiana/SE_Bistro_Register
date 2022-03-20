import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../redux/slices/userSlice";

const Otp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealPwd1, setIsRevealPwd1] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  return (
    <div className="text-center my-64 mx-auto">
      <div>
        <h3 className="m-5">ยืนยันรหัส OTP ของคุณ</h3>
      </div>
      <h4 className="pr-24 mb-2">โปรดใส่รหัส OTP ที่ส่งไป email</h4>

      <from onSubmit={handleSubmit(onSubmit)} className="input-icons">
        <i classNamer="fas fa-unlock-alt"></i>
        <input
          type="text"
          placeholder="ใส่โค้ดที่นี้"
          class="bg-white input input-bordered w-full max-w-xs text-black"
          {...register("otp")}
        />
      </from>

      <div className="justify-center card-actions m-2">
        <button type="submit" className="btn btn-active btn-primary w-36">
          ส่ง
        </button>
      </div>

      <div>
        <h4 className="underline underline-offset-1">ขอ OTP อีกครั้ง</h4>
      </div>
    </div>
  );
};

export default Otp;
