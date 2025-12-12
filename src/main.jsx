
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>
);
  // createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <BrowserRouter>
  //   <App/>
  //     {/* <Routes>
  //       <Route path="/" element={<App />} />
  //       <Route path="/learn" element={<Learn />} />
  //     </Routes> */}
  //   </BrowserRouter>
  // </StrictMode>
