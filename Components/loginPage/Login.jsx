import React, { useRef } from "react";
import { VscAccount } from "react-icons/vsc";

const Login = () => {
  const userName = useRef();
  const userPassword = useRef();

  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userName.current.value);
    console.log(userPassword.current.value);
    localStorage.setItem('_auth',"the token");
    console.log(localStorage.getItem('_auth' ) + 'you are amazing hassan');
  }
  
  return (
    <div className="flex flex-col gap-4 shadow w-max  justify-center items-center rounded-lg p-4">
      <div className="flex items-center gap-2">
        <span className="text-xl">
          <VscAccount />
        </span>
        <span className="text-xl font-bold">تسجيل الدخول</span>
      </div>
      <form className="p-4    rounded-lg ">
        <div className="flex flex-col justify-start items-start gap-2 mb-4">
          <p className="text-sm"> البريد الالكتروني</p>
          <input
            ref={userName}
            required
            type="text"
            className="input mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
            placeholder=" ادخل إيميلك"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 mb-4">
          <p className="text-sm">كلمة المرور</p>
          <input
            ref={userPassword}
            required
            type="password"
            className="input mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
            placeholder=" كلمة المرور "
          />
        </div>
        <div>
          <button
          onClick={handleSubmit}
            
            className="long-btn  bg-[#19ae20] rounded-lg text-white"
          >
            تسجيل الدخول
          </button>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mt-4 text-[16px]">
          <section className="flex items-center gap-2">
            <p className="font-thin">لا تمتلك حساب ؟</p>
            <span className="text-[#19ae20]  font-semibold">إنشاء حساب</span>
          </section>
          <section className="flex items-center gap-2">
            <p className="font-thin"> نسيت كلمة المرور </p>
            <span className="text-[#19ae20] font-semibold">
              إعادة تعيين كلمة المرور
            </span>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Login;
