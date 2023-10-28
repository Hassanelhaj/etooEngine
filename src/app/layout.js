"use client"


import './globals.css'


import Menu from '../../Components/utils/sidebar/Menu'




export const metadata = {
  title: 'the best search engine in sudan',
  description:'developed by ettoplay ',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className='dark' dir='rtl'>

  
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

</head>


      <body className=' flex items-start '>

    <div>

    <Menu/>
    </div>
  
      <main className='children w-full h-screen '>
      {children}
      </main>
     
      </body>
   

    </html>
  )
}
