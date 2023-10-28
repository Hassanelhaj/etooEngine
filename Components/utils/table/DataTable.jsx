import React from 'react'
import { DataGrid, GridToolbar , arSD } from '@mui/x-data-grid';

import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';


const DataTable = () => {
    // const columns = [
    //     { field: 'id', headerName: ' المعرف',
    //     //  width: 48
    //      },
    //     {
    //       field: 'firstName',
    //       headerName: ' الأسم الأول',
    //       // width: 64,
    //       editable: true,
    //     },
    //     {
    //       field: 'lastName',
    //       headerName: 'الأسم الأخير',
    //       // width: 64,
    //       editable: true,
    //     },
      
    //     {
    //       field: 'fullName',
    //       headerName: 'الأسم بالكامل',
    //       description: 'This column has a value getter and is not sortable.',
    //       sortable: false,
    //       // width: 140,
    //       valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //     },
    //     {
    //         field: 'age',
    //         headerName: 'العمر',
    //         type: 'number',
    //         // width: 32,
    //         editable: true,
    //       },
    //   ];
      
    //   const rows = [
    //     { id: 1, lastName: 'الحاج ', firstName: 'حسن', age: 21 },
    //     { id: 2, lastName: 'محمد', firstName: 'عبد الغزيز', age: 24 },
    //     { id: 3, lastName: 'محمد', firstName: 'منى', age: 24 },
    //     { id: 4, lastName: 'ايتو', firstName: 'صامويل', age: 38 },
    //     { id: 5, lastName: 'بلى', firstName: 'محمد', age: 26 },
    //     { id: 6, lastName: 'جمال', firstName: "علي", age: 150 },
    //     { id: 7, lastName: 'ايتو', firstName: 'صامويل', age: 38 },
    //     { id: 8, lastName: 'بلى', firstName: 'محمد', age: 26 },
    //     { id: 9, lastName: 'جمال', firstName: "علي", age: 150 },
    //     { id: 5, lastName: 'بلى', firstName: 'محمد', age: 26 },
    //     { id: 6, lastName: 'جمال', firstName: "علي", age: 150 },
    //     { id: 7, lastName: 'ايتو', firstName: 'صامويل', age: 38 },
    //     { id: 8, lastName: 'بلى', firstName: 'محمد', age: 26 },
    //     { id: 9, lastName: 'جمال', firstName: "علي", age: 150 },
       
    //   ];
    const columns = [
      { field: 'id', headerName: ' المعرف',
       width: 48
       },
      {
        field: 'productName',
        headerName: 'اسم المنتج',
        width: 140,
        editable: true,
      },
      {
        field: 'ProductCategory',
        headerName: 'تصنيف المنتج',
        width: 120,
        editable: true,
      },
  
    
        {
          field: 'price',
          headerName: 'سعرالمنتج',
          width: 80,
          editable: true,
        },
        {
          field: 'quantity',
          headerName: 'الكمية',
          type: 'number',

          width: 80,
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
      { id: 1, productName: 'لابتوب توشيبا',
      ProductCategory: 'اجهزة الكترونية',
        price: 1000,quantity:2400 },
        { id: 2, productName: 'لابتوب ابل',
      ProductCategory: 'اجهزة الكترونية',
        price: 1000,quantity:2700 },
        { id: 3, productName: 'ايفون 13',
      ProductCategory: 'اجهزة الكترونية',
        price: 1000,quantity:100 },
        { id: 1, productName: 'لابتوب توشيبا',
        ProductCategory: 'اجهزة الكترونية',
          price: 1000,quantity:2400 },
          { id: 2, productName: 'لابتوب ابل',
        ProductCategory: 'اجهزة الكترونية',
          price: 1000,quantity:2700 },
          { id: 3, productName: 'ايفون 13',
        ProductCategory: 'اجهزة الكترونية',
          price: 1000,quantity:100 },
 
    ];
      const existingTheme = useTheme();
      const theme = React.useMemo(
        () =>
          createTheme({}, arSD, existingTheme, {
            direction: 'rtl',
          }),
        [existingTheme],
      );

  return (
    <div lang='ar'    
    style={{fontFamily:'Cairo',direction:'rtl'}}
    >
      
          <ThemeProvider style ={{fontFamily:'Cairo',direction:'rtl'}}  theme={theme}>
          
         <DataGrid 
         
         className='bg-white  w-min  cvx p-4 rounded-lg text-[12px] lg:text-base'
        rows={rows}
        columns={columns}
        style={{fontFamily:'Cairo',direction:'rtl'}}
        initialState={{
            
          pagination: {
            
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
     
        slotProps={{toolbar:{showQuickFilter:true,quickFilterProps:{debounceMs:500}}}}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        
        
      />
        
        </ThemeProvider>
    </div>
  )
}

export default DataTable