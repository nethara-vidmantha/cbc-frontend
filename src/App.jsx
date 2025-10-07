import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './pages/adminPage.jsx'
import HomePage from './pages/homePage.jsx'
import TestPage from './pages/test.jsx'
import LoginPage from './pages/loginPage.jsx'


function App() {
  

  return (

      <BrowserRouter>
        <div className='w-full h-[100vh]'>  {/*Hypothetical kotuw*/} 

          <Routes path="/">   {/*meke athule tyena kisi deyk stira na yana path eka anuwa wens wenw*/}
            
            <Route path="/*" element={<HomePage/>}/>             {/*meewa thamai path*/ }
            <Route path="/register" element={<h1>Register Page</h1>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin/*" element={<AdminPage/>}/>             {/*admin eken psse mona tibbt admin kyn ek load wenw * eken kynne eka*/}
            <Route path="/test" element={<TestPage/>}/> 
          </Routes>
          
        </div>
      </BrowserRouter>

  )
}

export default App
