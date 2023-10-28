

import '../globals.css'


export const metadata = {
  title: 'search jobs in sudan',
  description:'developed by hassan ',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className='dark' dir='rtl'>

  
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

</head>


      <body className=' '>

    <div>

    </div>
  
      <main className='children w-full h-screen '>
      {children}
      </main>
     
      </body>
   

    </html>
  )
}
