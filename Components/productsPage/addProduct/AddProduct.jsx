import React from "react";

const AddProduct = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-2 shadow p-4
     bg-white rounded-lg ">
      <div className="text-lg font-semibold text-[#19ae20]">أضافة منتج</div>
      <form className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-sm">اسم المنتج</p>
          <input
            // ref={userName}
            required
            type="text"
            className="input px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
            placeholder="اسم المنتج"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-2 ">
          <p className="text-sm">وصف المنتج</p>
          <input
            // ref={userName}
            required
            type="text"
            className="input px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
            placeholder="وصف المنتج"
          />
        </div>

      <div className="w-full">
      <label
          for="countries"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          تصنيف المنتج
        </label>
        <select
          id="countries"
          className="input mt-1 px-3 py-2 bg-white border pl-2
          shadow-sm border-slate-300 placeholder-slate-300 focus:
          outline-none text-slate-800
           focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
            sm:text-sm focus:ring-1"
        >
          <option className="text-slate-400" selected>أختر التصنيف</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="w-full">

<div className="flex flex-col gap-2">
    <p>صورة المنتج</p>
      <div className="flex items-center justify-center w-full ">
    <label htmlFor="dropzone-file" 
    className="flex flex-col items-center justify-center w-full h-14 border-2
    border-gray-300 border-dashed rounded-lg cursor-pointer
      bg-gray-50 dark:hover:bg-bray-800
      ">
        <div className="flex gap-2 items-center justify-center pt-8 pb-8">
            <svg className="w-4 h-4 mb-1 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">أضغط لرفع صورة المنتح</span>
               </p>
            <p clclassNameass="text-xs text-gray-500 dark:text-gray-400"></p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 

    </div>
      </div>

        <div className="flex flex-col justify-start items-start gap-2 ">
          <p className="text-sm">سعرالمنتج</p>
          <input
            // ref={userName}
            required
            type="number"
            className="input mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
            placeholder="سعرالمنتج"
          />
        </div>

        <div>
          <button
            //   onClick={handleSubmit}

            className="long-btn  bg-[#19ae20] rounded-lg text-white"
          >
            إضافة
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddProduct;
