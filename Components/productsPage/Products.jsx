import React from "react";
import DataTable from "../utils/table/DataTable";
import Link from "next/link";

const Products = () => {
  const columns = [
    {
      field: "id",
      headerName: " المعرف",
      //  width: 48
    },
    {
      field: "productName",
      headerName: "اسم المنتج",
      // width: 64,
      editable: true,
    },
    {
      field: "ProductCategory",
      headerName: "تصنيف المنتج",
      // width: 64,
      editable: true,
    },
    {
      field: "ProductDescription",
      headerName: "تصنيف المنتج",
      // width: 64,
      editable: true,
    },

    {
      field: "price",
      headerName: "سعرالمنتج",
      // width: 64,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "الكمية",
      type: "number",

      // width: 64,
      editable: true,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'الأسم بالكامل',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   // width: 140,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  const rows = [
    {
      id: 1,
      productName: "لابتوب توشيبا",
      productCategory: "اجهزة الكترونية",
      price: 1000,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <div className="w-full">
        <Link
          className="mx-2 py-2 px-3 bg-[#19ae20] rounded-lg w-max text-white "
          href={"/products/addProduct"}
        >
          أضافة منتج
        </Link>
      </div>
      <div className="mx-2">
        <DataTable />
      </div>
    </div>
  );
};

export default Products;
