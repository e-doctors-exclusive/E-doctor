import React from 'react'
import "./doctorProfile.css"
import calendar from '../../assets/calendar-samsung-16-svgrepo-com.svg'
import money from '../../assets/money-check-edit.svg'
import envelope from '../../assets/envelope-open-text.svg'
import clock from '../../assets/clock-nine.svg'
import file from '../../assets/file-invoice.svg'
import wheel from '../../assets/adiutor-svgrepo-com.svg'
import person from '../../assets/bouncer-svgrepo-com.svg'
import overview from '../../assets/forerkort-svgrepo-com.svg'
import logo from '../../assets/pie-chart-svgrepo-com.svg'

const DoctorProfile = () => {
  return (
    <div className='allOfpage'>
         <div className='SideBar'>

<div className='logo_doct'>
    <img className='logo_chat' src={logo} alt="" />
    <h1 className='logo_title'>Doct.</h1>
</div>
<div className='wrapper_chat'>
<div className='side-bar_doctor_chat'> 
<div className='sidebar_doctor_chat'>
    <img className='icons_doctor_chat' src={overview} alt="" />
    <p className='sidebar_paragraph'>Overview</p>
</div>
<div className='sidebar_doctor_chat'>
<img className='icons_doctor_chat' src={calendar} alt="" />
    <p className='sidebar_paragraph'>Appointment</p>
</div>
<div className='sidebar_doctor_chat'>
<img className='icons_doctor_chat' src={person} alt="" />
    <p className='sidebar_paragraph'>My Patients</p>
</div>
<div className='sidebar_doctor_chat'>
<img className='icons_doctor_chat' src={clock} alt="" />
    <p className='sidebar_paragraph'>Schedule Timings</p>
</div>
<div className='sidebar_doctor_chat'>
<img className='icons_doctor_chat' src={money} alt="" />
    <p className='sidebar_paragraph'>Payments</p>
</div>
<div className='sidebar_doctor_chat'>
<img className='icons_doctor_chat' src={envelope} alt="" />
    <p className='sidebar_paragraph'>Message</p>
</div>
<div className='sidebar_doctor_chat'>
<img className='icons_doctor_chat' src={file} alt="" />
    <p className='sidebar_paragraph'>Blog</p>
</div>
<div className='sidebar_doctor_chat'>
<img className='icons_doctor_chat' src={wheel} alt="" />
    <p className='sidebar_paragraph'>Settings</p>
</div>
</div>
</div>
</div>
<div className='toP2'>
          <div className="box2">

            <div className="rectangles" >
              <input type="text" className='searchInputs' placeholder='Search' />
              
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M16.2273 15.1784L18.7275 17.6773C18.8441 17.798 18.9086 17.9597 18.9071 18.1276C18.9057 18.2954 18.8384 18.4559 18.7197 18.5746C18.601 18.6933 18.4405 18.7606 18.2726 18.7621C18.1048 18.7635 17.9431 18.699 17.8224 18.5824L15.3222 16.0822C13.6884 17.482 11.576 18.1946 9.42811 18.0704C7.28025 17.9463 5.26396 16.995 3.80233 15.4163C2.3407 13.8376 1.54736 11.7541 1.58876 9.60308C1.63017 7.45204 2.50311 5.40063 4.02441 3.87933C5.54571 2.35803 7.59712 1.48509 9.74816 1.44368C11.8992 1.40228 13.9827 2.19562 15.5614 3.65725C17.1401 5.11888 18.0914 7.13517 18.2155 9.28303C18.3397 11.4309 17.6271 13.5434 16.2273 15.1772V15.1784ZM9.90841 16.8042C11.7758 16.8042 13.5667 16.0624 14.8871 14.742C16.2075 13.4216 16.9493 11.6307 16.9493 9.76333C16.9493 7.89596 16.2075 6.10508 14.8871 4.78465C13.5667 3.46422 11.7758 2.72241 9.90841 2.72241C8.04104 2.72241 6.25016 3.46422 4.92973 4.78465C3.6093 6.10508 2.86749 7.89596 2.86749 9.76333C2.86749 11.6307 3.6093 13.4216 4.92973 14.742C6.25016 16.0624 8.04104 16.8042 9.90841 16.8042Z" fill="#A2A3A4" /></svg> 
            
            

            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" className='chatRoomsss'>
                <path d="M23.6288 19.3737C24.2473 18.2468 24.5777 16.9845 24.5906 15.699C24.6035 14.4136 24.2985 13.1449 23.7027 12.0058C23.1069 10.8667 22.2389 9.89249 21.1757 9.16986C20.1125 8.44723 18.8872 7.99858 17.6088 7.8638C17.2031 6.88637 16.6026 6.00173 15.8441 5.26374C15.0856 4.52574 14.1848 3.94983 13.1966 3.57106C12.2084 3.19229 11.1534 3.01858 10.0959 3.06051C9.03845 3.10243 8.00056 3.35912 7.04545 3.81494C6.09033 4.27076 5.23797 4.91618 4.54023 5.71191C3.8425 6.50764 3.314 7.43703 2.9869 8.44352C2.6598 9.45001 2.54094 10.5125 2.63755 11.5664C2.73417 12.6203 3.04425 13.6435 3.54891 14.5738L2.90891 16.8237C2.85122 17.0289 2.84922 17.2458 2.90312 17.452C2.95702 17.6582 3.06488 17.8463 3.21559 17.9971C3.3663 18.1478 3.55444 18.2556 3.76065 18.3095C3.96687 18.3634 4.18371 18.3614 4.3889 18.3037L6.63889 17.6637C7.54419 18.1633 8.54051 18.4761 9.56887 18.5837C9.98544 19.6002 10.612 20.5172 11.4076 21.2746C12.2031 22.0321 13.1497 22.613 14.1853 22.9793C15.2209 23.3456 16.3222 23.489 17.4171 23.4002C18.512 23.3113 19.5758 22.9922 20.5388 22.4637L22.7888 23.1037C22.9943 23.1649 23.2125 23.1694 23.4204 23.1167C23.6283 23.0641 23.818 22.9562 23.9697 22.8046C24.1213 22.653 24.2291 22.4632 24.2818 22.2553C24.3344 22.0475 24.3299 21.8292 24.2688 21.6237L23.6288 19.3737ZM6.71888 16.4137C6.66085 16.4132 6.60321 16.4233 6.54889 16.4437L4.0589 17.1537L4.7689 14.6638C4.79386 14.5858 4.80142 14.5033 4.79105 14.4221C4.78069 14.3409 4.75264 14.263 4.7089 14.1938C3.8906 12.8128 3.60449 11.1806 3.90426 9.60367C4.20404 8.0267 5.06909 6.61338 6.33703 5.62899C7.60497 4.64461 9.18861 4.15687 10.7907 4.25732C12.3927 4.35777 13.903 5.0395 15.0381 6.17455C16.1731 7.30961 16.8549 8.81992 16.9553 10.422C17.0558 12.024 16.568 13.6077 15.5837 14.8756C14.5993 16.1436 13.1859 17.0086 11.609 17.3084C10.032 17.6082 8.39985 17.322 7.01888 16.5037C6.92972 16.4453 6.82549 16.414 6.71888 16.4137ZM22.4088 19.4637L23.1188 21.9537L20.6288 21.2437C20.5508 21.2188 20.4683 21.2112 20.3871 21.2216C20.3059 21.2319 20.228 21.26 20.1588 21.3037C19.3806 21.7639 18.5163 22.0596 17.6194 22.1724C16.7224 22.2853 15.8118 22.213 14.9439 21.9599C14.076 21.7069 13.2692 21.2784 12.5734 20.7012C11.8777 20.1239 11.3077 19.41 10.8989 18.6037C12.8736 18.472 14.7247 17.5954 16.0779 16.1512C17.4311 14.707 18.1856 12.8029 18.1888 10.8238C18.1866 10.2553 18.1229 9.68863 17.9988 9.13379C19.0427 9.32986 20.024 9.7746 20.8595 10.4303C21.6951 11.0861 22.3603 11.9335 22.7988 12.9009C23.2374 13.8683 23.4364 14.9271 23.3789 15.9877C23.3215 17.0483 23.0093 18.0794 22.4688 18.9937C22.425 19.0629 22.397 19.1409 22.3866 19.2221C22.3763 19.3033 22.3838 19.3858 22.4088 19.4637Z" fill="#0D0D0D" fill-opacity="0.75" />
              </svg>
              
      
              
              

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none" className='beEl'>
  <path d="M12.9642 23.8904C13.6248 23.8912 14.2692 23.6862 14.8079 23.3039C15.3466 22.9216 15.7528 22.3809 15.97 21.7571H9.95835C10.1756 22.3809 10.5818 22.9216 11.1205 23.3039C11.6592 23.6862 12.3036 23.8912 12.9642 23.8904ZM20.4308 15.9822V11.0905C20.4308 7.65902 18.1002 4.76838 14.9429 3.89905C14.6303 3.11185 13.8666 2.55719 12.9642 2.55719C12.0618 2.55719 11.2981 3.11185 10.9855 3.89905C7.82823 4.76944 5.49758 7.65902 5.49758 11.0905V15.9822L3.67679 17.803C3.57755 17.9018 3.49884 18.0194 3.4452 18.1488C3.39156 18.2782 3.36406 18.417 3.36426 18.5571V19.6237C3.36426 19.9066 3.47664 20.178 3.67668 20.378C3.87671 20.578 4.14802 20.6904 4.43092 20.6904H21.4975C21.7804 20.6904 22.0517 20.578 22.2517 20.378C22.4518 20.178 22.5641 19.9066 22.5641 19.6237V18.5571C22.5643 18.417 22.5368 18.2782 22.4832 18.1488C22.4296 18.0194 22.3509 17.9018 22.2516 17.803L20.4308 15.9822Z" fill="#0D0D0D" fill-opacity="0.75"/>
</svg>

<div className="proFile">
      <div className="rectangles" />
    </div>
          </div>

        </div>
        <p className='Myprofile'>My Profile</p>
        <div className='DoctorP'>

        
        </div>

    </div>
  )
}

export default DoctorProfile