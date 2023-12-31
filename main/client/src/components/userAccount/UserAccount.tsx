import React, { useEffect } from "react";
import "./userAccount.css";
import doctor from "../../assets/unsplash_7bMdiIqz_J4.png";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import {fetchAppointments} from "../../redux/appointment"
interface appointmentType {
  AppointmentTime:Date,
  AppointmentStatus: "Scheduled"|"Completed"| "Cancelled",
  AppointmentDuration: number,
  Notes: string,
  ReasonForVisit: string,
  createdAt:Date
}

const UserAccount = () => {
  const dispatch: AppDispatch = useDispatch();
  const appointments = useSelector((state: RootState) => state.appointment.data);
  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <div className="container-user">
      <div className="sid-nav">
        <div className="small-back">
          <svg
            className="menu"
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
          >
            <g clipPath="url(#clip0_221_623)">
              <path
                d="M3.99895 17.0343H14.2403V4.2326H3.99895L3.99895 17.0343ZM3.99895 27.2756H14.2403V19.5946H3.99895V27.2756ZM16.8006 27.2756H27.042V14.4739H16.8006V27.2756ZM16.8006 4.2326V11.9136H27.042V4.2326L16.8006 4.2326Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_221_623">
                <rect
                  width="30.724"
                  height="30.724"
                  fill="white"
                  transform="translate(0.15844 0.392151)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <svg
          className="small-calendar"
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
          onClick={()=>{
            navigate("/calander");
          }}
        >
          <g clipPath="url(#clip0_221_627)">
            <path
              d="M21.9212 4.40457L27.0418 4.40457C27.3814 4.40457 27.707 4.53945 27.9471 4.77952C28.1871 5.0196 28.322 5.34522 28.322 5.68474V26.1674C28.322 26.5069 28.1871 26.8325 27.9471 27.0726C27.707 27.3127 27.3814 27.4476 27.0418 27.4476H3.99883C3.6593 27.4476 3.33369 27.3127 3.09361 27.0726C2.85353 26.8325 2.71866 26.5069 2.71866 26.1674L2.71866 5.68474C2.71866 5.34522 2.85353 5.0196 3.09361 4.77952C3.33369 4.53945 3.6593 4.40457 3.99883 4.40457H9.11949V1.84424H11.6798V4.40457H19.3608V1.84424H21.9212V4.40457ZM5.27899 12.0856L5.27899 24.8872H25.7617V12.0856H5.27899ZM7.83933 17.2062H14.2402V22.3269H7.83933V17.2062Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_221_627">
              <rect
                width="30.724"
                height="30.724"
                fill="white"
                transform="translate(0.158318 0.564026)"
              />
            </clipPath>
          </defs>
        
        </svg>

        <svg
          className="small-chat"
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
        >
          <g clipPath="url(#clip0_221_635)">
            <path
              d="M2.71868 12.2499C2.71801 11.2414 2.91628 10.2426 3.30214 9.31084C3.688 8.37907 4.25388 7.53256 4.96736 6.81979C5.68084 6.10702 6.52792 5.542 7.46008 5.15707C8.39224 4.77214 9.39118 4.57486 10.3997 4.57655L20.641 4.57655C24.8822 4.57655 28.322 8.0266 28.322 12.2499V27.6196H10.3997C6.15849 27.6196 2.71868 24.1695 2.71868 19.9462V12.2499ZM25.7617 25.0592V12.2499C25.7583 10.8935 25.2175 9.59383 24.2577 8.63547C23.2979 7.67711 21.9974 7.13823 20.641 7.13688H10.3997C9.72741 7.1352 9.0614 7.26624 8.43988 7.5225C7.81835 7.77876 7.25352 8.1552 6.77779 8.63022C6.30205 9.10524 5.92477 9.6695 5.66758 10.2906C5.41039 10.9118 5.27834 11.5776 5.27902 12.2499V19.9462C5.2824 21.3026 5.82323 22.6023 6.78303 23.5606C7.74283 24.519 9.04335 25.0579 10.3997 25.0592H25.7617ZM18.0807 14.8179H20.641V17.3782H18.0807V14.8179ZM10.3997 14.8179H12.96V17.3782H10.3997V14.8179Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_221_635">
              <rect
                width="30.724"
                height="30.724"
                fill="white"
                transform="translate(0.158257 0.736145)"
              />
            </clipPath>
          </defs>
        </svg>
      
        <svg
          className="small-time"
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
        >
          <g clipPath="url(#clip0_221_631)">
            <path
              d="M15.5204 29.0721C8.45007 29.0721 2.71877 23.3408 2.71877 16.2704C2.71877 10.5378 6.4863 5.686 11.6799 4.05507V6.77414C9.47923 7.66776 7.65739 9.29826 6.52606 11.3867C5.39472 13.4752 5.02419 15.8919 5.47785 18.2234C5.93151 20.5549 7.18116 22.6563 9.01305 24.1682C10.8449 25.6801 13.1452 26.5085 15.5204 26.5118C17.5607 26.5117 19.5546 25.9025 21.2464 24.7621C22.9383 23.6217 24.2511 22.0021 25.0167 20.1109H27.7358C26.1049 25.3046 21.253 29.0721 15.5204 29.0721ZM28.2581 17.5506H14.2403V3.53276C14.6614 3.49051 15.089 3.46875 15.5204 3.46875C22.5908 3.46875 28.3221 9.20006 28.3221 16.2704C28.3221 16.7018 28.3003 17.1294 28.2581 17.5506ZM16.8006 6.10845V14.9903H25.6824C25.3975 12.7341 24.3701 10.6368 22.762 9.02882C21.154 7.4208 19.0568 6.3934 16.8006 6.10845Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_221_631">
              <rect
                width="30.724"
                height="30.724"
                fill="white"
                transform="translate(0.15831 0.908447)"
              />
            </clipPath>
          </defs>
        </svg>
       
        <svg
          className="small-settings"
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <g clipPath="url(#clip0_221_639)">
            <path
              d="M4.71932 23.2942C4.14208 22.296 3.69336 21.2288 3.38385 20.118C4.05747 19.7754 4.62318 19.2531 5.01841 18.609C5.41363 17.9648 5.62297 17.2239 5.62325 16.4681C5.62353 15.7124 5.41475 14.9713 5.02001 14.3269C4.62526 13.6824 4.05994 13.1597 3.38658 12.8166C4.00384 10.5847 5.17913 8.54659 6.80173 6.89439C7.43545 7.30639 8.17081 7.53503 8.92643 7.55499C9.68205 7.57496 10.4285 7.38547 11.0831 7.0075C11.7377 6.62952 12.2749 6.07781 12.6354 5.41341C12.9958 4.74901 13.1654 3.99783 13.1254 3.24301C15.3677 2.66352 17.7207 2.66446 19.9625 3.24574C19.9229 4.00055 20.0928 4.75161 20.4535 5.41582C20.8143 6.08003 21.3517 6.63149 22.0065 7.00917C22.6612 7.38685 23.4076 7.57603 24.1632 7.55577C24.9188 7.53552 25.654 7.30661 26.2876 6.89439C27.0782 7.70004 27.7801 8.6163 28.37 9.63907C28.9613 10.6618 29.4037 11.7283 29.7055 12.8152C29.0318 13.1579 28.4661 13.6801 28.0709 14.3243C27.6757 14.9684 27.4663 15.7094 27.4661 16.4651C27.4658 17.2208 27.6746 17.9619 28.0693 18.6064C28.464 19.2508 29.0294 19.7735 29.7027 20.1166C29.0855 22.3486 27.9102 24.3867 26.2876 26.0389C25.6539 25.6269 24.9185 25.3982 24.1629 25.3783C23.4073 25.3583 22.6608 25.5478 22.0062 25.9258C21.3517 26.3037 20.8144 26.8554 20.4539 27.5198C20.0935 28.1842 19.9239 28.9354 19.9639 29.6902C17.7216 30.2697 15.3686 30.2688 13.1268 29.6875C13.1664 28.9327 12.9965 28.1816 12.6358 27.5174C12.275 26.8532 11.7376 26.3018 11.0828 25.9241C10.4281 25.5464 9.68166 25.3572 8.92609 25.3775C8.17051 25.3977 7.43527 25.6266 6.80173 26.0389C5.9947 25.2154 5.29501 24.2932 4.71932 23.2942ZM12.4481 23.5618C13.9032 24.4011 14.9973 25.748 15.5205 27.3443C16.2019 27.4085 16.886 27.4098 17.5674 27.3457C18.091 25.7492 19.1855 24.4022 20.6412 23.5632C22.0958 22.7216 23.8099 22.4469 25.4546 22.7917C25.8506 22.2345 26.192 21.6405 26.476 21.0192C25.3555 19.7677 24.7365 18.1465 24.7377 16.4666C24.7377 14.7461 25.3795 13.1389 26.476 11.914C26.19 11.2929 25.8471 10.6996 25.4519 10.1416C23.8082 10.4861 22.0952 10.2119 20.6412 9.37143C19.1861 8.53214 18.092 7.18522 17.5688 5.58896C16.8874 5.52478 16.2033 5.52341 15.5219 5.58759C14.9983 7.18408 13.9038 8.53103 12.4481 9.37006C10.9935 10.2116 9.27942 10.4864 7.63469 10.1416C7.23946 10.6991 6.89749 11.2925 6.61329 11.914C7.73378 13.1656 8.35279 14.7868 8.35158 16.4666C8.35158 18.1872 7.70979 19.7944 6.61329 21.0192C6.89932 21.6403 7.24216 22.2337 7.63742 22.7917C9.28111 22.4471 10.9941 22.7214 12.4481 23.5618ZM16.5447 20.5632C15.4582 20.5632 14.4162 20.1316 13.648 19.3633C12.8797 18.5951 12.4481 17.5531 12.4481 16.4666C12.4481 15.3802 12.8797 14.3382 13.648 13.5699C14.4162 12.8017 15.4582 12.3701 16.5447 12.3701C17.6311 12.3701 18.6731 12.8017 19.4413 13.5699C20.2096 14.3382 20.6412 15.3802 20.6412 16.4666C20.6412 17.5531 20.2096 18.5951 19.4413 19.3633C18.6731 20.1316 17.6311 20.5632 16.5447 20.5632ZM16.5447 17.8321C16.9068 17.8321 17.2541 17.6883 17.5102 17.4322C17.7663 17.1761 17.9102 16.8288 17.9102 16.4666C17.9102 16.1045 17.7663 15.7571 17.5102 15.5011C17.2541 15.245 16.9068 15.1011 16.5447 15.1011C16.1825 15.1011 15.8352 15.245 15.5791 15.5011C15.323 15.7571 15.1791 16.1045 15.1791 16.4666C15.1791 16.8288 15.323 17.1761 15.5791 17.4322C15.8352 17.6883 16.1825 17.8321 16.5447 17.8321Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_221_639">
              <rect
                width="32.7723"
                height="32.7723"
                fill="white"
                transform="translate(0.158264 0.0803223)"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="logout"
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
        >
          <g clipPath="url(#clip0_221_643)">
            <path
              d="M5.27909 23.2953H7.83942V25.8556H23.2014V5.37296L7.83942 5.37296V7.93329H5.27909V4.09279C5.27909 3.75327 5.41396 3.42765 5.65404 3.18757C5.89412 2.9475 6.21973 2.81262 6.55925 2.81262L24.4816 2.81262C24.8211 2.81262 25.1467 2.9475 25.3868 3.18757C25.6269 3.42765 25.7618 3.75327 25.7618 4.09279V27.1358C25.7618 27.4753 25.6269 27.8009 25.3868 28.041C25.1467 28.2811 24.8211 28.416 24.4816 28.416H6.55925C6.21973 28.416 5.89412 28.2811 5.65404 28.041C5.41396 27.8009 5.27909 27.4753 5.27909 27.1358V23.2953ZM7.83942 14.3341H16.8006V16.8945H7.83942V20.735L1.43858 15.6143L7.83942 10.4936V14.3341Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_221_643">
              <rect
                width="30.724"
                height="30.724"
                fill="white"
                transform="translate(0.158218 0.252197)"
              />
            </clipPath>
          </defs>
        </svg>
       
      </div>

      <div className="content-user">
        <div className="nav-user">
          <div className="search-user-input">
            <input type="text" className="search__input" placeholder="Search" />
            <button className="search__button">
              <svg
                className="search__icon"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="chat_bell_user">
            <svg
              className="chat-user"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M23.6288 19.3737C24.2473 18.2468 24.5777 16.9845 24.5906 15.699C24.6035 14.4136 24.2985 13.1449 23.7027 12.0058C23.1069 10.8667 22.2389 9.89249 21.1757 9.16986C20.1125 8.44723 18.8872 7.99858 17.6088 7.8638C17.2031 6.88637 16.6026 6.00173 15.8441 5.26374C15.0856 4.52574 14.1848 3.94983 13.1966 3.57106C12.2084 3.19229 11.1534 3.01858 10.0959 3.06051C9.03845 3.10243 8.00056 3.35912 7.04545 3.81494C6.09033 4.27076 5.23797 4.91618 4.54023 5.71191C3.8425 6.50764 3.314 7.43703 2.9869 8.44352C2.6598 9.45001 2.54094 10.5125 2.63755 11.5664C2.73417 12.6203 3.04425 13.6435 3.54891 14.5738L2.90891 16.8237C2.85122 17.0289 2.84922 17.2458 2.90312 17.452C2.95702 17.6582 3.06488 17.8463 3.21559 17.9971C3.3663 18.1478 3.55444 18.2556 3.76065 18.3095C3.96687 18.3634 4.18371 18.3614 4.3889 18.3037L6.63889 17.6637C7.54419 18.1633 8.54051 18.4761 9.56887 18.5837C9.98544 19.6002 10.612 20.5172 11.4076 21.2746C12.2031 22.0321 13.1497 22.613 14.1853 22.9793C15.2209 23.3456 16.3222 23.489 17.4171 23.4002C18.512 23.3113 19.5758 22.9922 20.5388 22.4637L22.7888 23.1037C22.9943 23.1649 23.2125 23.1694 23.4204 23.1167C23.6283 23.0641 23.818 22.9562 23.9697 22.8046C24.1213 22.653 24.2291 22.4632 24.2818 22.2553C24.3344 22.0475 24.3299 21.8292 24.2688 21.6237L23.6288 19.3737ZM6.71888 16.4137C6.66085 16.4132 6.60321 16.4233 6.54889 16.4437L4.0589 17.1537L4.7689 14.6638C4.79386 14.5858 4.80142 14.5033 4.79105 14.4221C4.78069 14.3409 4.75264 14.263 4.7089 14.1938C3.8906 12.8128 3.60449 11.1806 3.90426 9.60367C4.20404 8.0267 5.06909 6.61338 6.33703 5.62899C7.60497 4.64461 9.18861 4.15687 10.7907 4.25732C12.3927 4.35777 13.903 5.0395 15.0381 6.17455C16.1731 7.30961 16.8549 8.81992 16.9553 10.422C17.0558 12.024 16.568 13.6077 15.5837 14.8756C14.5993 16.1436 13.1859 17.0086 11.609 17.3084C10.032 17.6082 8.39985 17.322 7.01888 16.5037C6.92972 16.4453 6.82549 16.414 6.71888 16.4137ZM22.4088 19.4637L23.1188 21.9537L20.6288 21.2437C20.5508 21.2188 20.4683 21.2112 20.3871 21.2216C20.3059 21.2319 20.228 21.26 20.1588 21.3037C19.3806 21.7639 18.5163 22.0596 17.6194 22.1724C16.7224 22.2853 15.8118 22.213 14.9439 21.9599C14.076 21.7069 13.2692 21.2784 12.5734 20.7012C11.8777 20.1239 11.3077 19.41 10.8989 18.6037C12.8736 18.472 14.7247 17.5954 16.0779 16.1512C17.4311 14.707 18.1856 12.8029 18.1888 10.8238C18.1866 10.2553 18.1229 9.68863 17.9988 9.13379C19.0427 9.32986 20.024 9.7746 20.8595 10.4303C21.6951 11.0861 22.3603 11.9335 22.7988 12.9009C23.2374 13.8683 23.4364 14.9271 23.3789 15.9877C23.3215 17.0483 23.0093 18.0794 22.4688 18.9937C22.425 19.0629 22.397 19.1409 22.3866 19.2221C22.3763 19.3033 22.3838 19.3858 22.4088 19.4637Z"
                fill="#0D0D0D"
                fillOpacity="0.75"
              />
            </svg>
            <svg
              className="bell"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
            >
              <path
                d="M12.9642 23.8904C13.6248 23.8912 14.2692 23.6862 14.8079 23.3039C15.3466 22.9216 15.7528 22.3809 15.97 21.7571H9.95835C10.1756 22.3809 10.5818 22.9216 11.1205 23.3039C11.6592 23.6862 12.3036 23.8912 12.9642 23.8904ZM20.4308 15.9822V11.0905C20.4308 7.65902 18.1002 4.76838 14.9429 3.89905C14.6303 3.11185 13.8666 2.55719 12.9642 2.55719C12.0618 2.55719 11.2981 3.11185 10.9855 3.89905C7.82823 4.76944 5.49758 7.65902 5.49758 11.0905V15.9822L3.67679 17.803C3.57755 17.9018 3.49884 18.0194 3.4452 18.1488C3.39156 18.2782 3.36406 18.417 3.36426 18.5571V19.6237C3.36426 19.9066 3.47664 20.178 3.67668 20.378C3.87671 20.578 4.14802 20.6904 4.43092 20.6904H21.4975C21.7804 20.6904 22.0517 20.578 22.2517 20.378C22.4518 20.178 22.5641 19.9066 22.5641 19.6237V18.5571C22.5643 18.417 22.5368 18.2782 22.4832 18.1488C22.4296 18.0194 22.3509 17.9018 22.2516 17.803L20.4308 15.9822Z"
                fill="#0D0D0D"
                fillOpacity="0.75"
              />
            </svg>

            <div className="icon-user">
              <img
                className="image-user"
                src="https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png"
              />
              <span className="name-user-icon">Mohamed</span>
            </div>
          </div>
        </div>
        <div className="subContainer">
          <div className="text_user_appointment_calendar">
            <div className="text_user_appointment">
              <div className="text_user">
                <span className="greeting-user">Good Morning</span>
                <span className="name-user">Mohamed!</span>
              </div>

              <div className="container_face_user">
                <span className="face_user_visit">Visits for Today</span>
                <span className="face_user_number">104</span>
                <div className="face_user_container_percent">
                  <div className="pointment-percent">
                    <span className="new_pointment">New Pointment</span>
                    <span className="pointment_number">40</span>
                  </div>
                  <div className="pointment-percent">
                    <span className="new_pointment">Old Pointment</span>
                    <span className="pointment_number">64</span>
                  </div>
                  <img src={doctor} className="image_doctor" />
                </div>
              </div>

              <div className="list_appointment">
                <div className="list_appointment_text">
                  <span className="appointment_text">Appointment List</span>
                  <div className="appointment_date">
                    <span className="appointment_date_user">Today</span>
                    <svg
                      className="icon_appointment"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      fill="none"
                    >
                      <path
                        d="M1.59802 0.876831L8.76696 8.04577L15.9359 0.876831"
                        stroke="black"
                        strokeOpacity="0.6"
                        strokeWidth="2.04827"
                      />
                    </svg>
                  </div>
                </div>
<div className="poitment_scroll">{appointments.map((appointment: appointmentType)=>{return (
                <div className="container_pointment">
                  <div className="left_pointment_start">
                    <span className="first_letter_piontment">SP</span>
                    <div className="status">
                      <span className="list_name_pointment">
                        Stacy Mitchell
                      </span>
                      <span className="list_pointment_status">{appointment.AppointmentStatus}</span>
                    </div>
                  </div>
                  <div className="left_pointment_end">
                    <span className="list_pointment_time">{new Date(appointment.createdAt).toDateString()}</span>
                  </div>
                </div>)})}
                </div>

              </div>
            </div>

            <div className="datepicker">
              <div className="datepicker-top">
                <div className="name-calendar">
                  <span className="text-calendar">Calendar</span>
                  <svg
                    className="icon-calendar"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M4.62862 7.80723C4.98442 7.44892 5.56363 7.4479 5.92068 7.80495L8.66853 10.5528C9.10418 10.9884 9.8105 10.9884 10.2461 10.5528L12.994 7.80495C13.351 7.4479 13.9303 7.44892 14.286 7.80723C14.6401 8.16376 14.6391 8.73946 14.2838 9.09474L10.2461 13.1324C9.8105 13.568 9.10418 13.568 8.66853 13.1324L4.6309 9.09474C4.27562 8.73946 4.27461 8.16376 4.62862 7.80723Z"
                      fill="#5F647E"
                    />
                  </svg>
                </div>
                <div className="month-selector">
                  <span className="month-name">December 2020</span>
                  <div className="left_right_calendar">
                    <svg
                      className="left_right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <path
                        d="M11.2731 3.9172C11.6315 4.27299 11.6325 4.8522 11.2754 5.20926L8.52759 7.9571C8.09194 8.39275 8.09194 9.09907 8.52759 9.53472L11.2754 12.2826C11.6325 12.6396 11.6315 13.2188 11.2731 13.5746C10.9166 13.9286 10.3409 13.9276 9.98565 13.5723L5.94801 9.53472C5.51237 9.09907 5.51237 8.39275 5.94802 7.9571L9.98565 3.91947C10.3409 3.5642 10.9166 3.56318 11.2731 3.9172Z"
                        fill="#D2D2D2"
                      />
                    </svg>
                    <svg
                      className="left_right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                    >
                      <path
                        d="M7.71904 13.5746C7.36072 13.2188 7.3597 12.6396 7.71676 12.2826L10.4646 9.53472C10.9002 9.09907 10.9002 8.39275 10.4646 7.9571L7.71676 5.20926C7.3597 4.8522 7.36073 4.27299 7.71904 3.9172C8.07557 3.56318 8.65127 3.5642 9.00654 3.91947L13.0442 7.9571C13.4798 8.39275 13.4798 9.09907 13.0442 9.53472L9.00654 13.5723C8.65127 13.9276 8.07557 13.9286 7.71904 13.5746Z"
                        fill="#D2D2D2"
                      />
                    </svg>
                  </div>
                </div>
                <hr className="new4"></hr>
              </div>
              <div className="datepicker-calendar">
                <span className="day">SUN</span>
                <span className="day">MON</span>
                <span className="day">TUE</span>
                <span className="day">WED</span>
                <span className="day">THU</span>
                <span className="day">FRI</span>
                <span className="day">SAT</span>
                <button className="date">1</button>
                <button className="date">2</button>
                <button className="date">3</button>
                <button className="date">4</button>
                <button className="date">5</button>
                <button className="date">6</button>
                <button className="date">7</button>
                <div className="current-day">
                  <button className="date current-day_red_point">8</button>
                  <svg
                    className="red_point"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <circle
                      cx="4.76756"
                      cy="4.89445"
                      r="4.09653"
                      fill="#FF0000"
                    />
                  </svg>
                </div>
                <button className="date">9</button>
                <button className="date">10</button>
                <button className="date">11</button>
                <button className="date">12</button>
                <button className="date">13</button>
                <div className="current-day">
                  <button className="date current-day_red_point">14</button>
                  <svg
                    className="red_point"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <circle
                      cx="4.76756"
                      cy="4.89445"
                      r="4.09653"
                      fill="#FF0000"
                    />
                  </svg>
                </div>
                <button className="date">15</button>
                <button className="date">16</button>
                <button className="date">17</button>
                <button className="date">18</button>
                <button className="date">19</button>
                <button className="date">20</button>
                <button className="date">21</button>
                <button className="date">22</button>
                <button className="date">23</button>
                <button className="date">24</button>
                <button className="date">25</button>
                <button className="date">26</button>
                <button className="date">27</button>
                <button className="date">28</button>
                <button className="date">29</button>
                <button className="date">30</button>
              </div>
              <div className="upcoming_user">
                <span className="upcoming_user_test">Upcoming</span>
                <a className="upcoming_user-all">View all</a>
              </div>
              <div className="user_meeting">
                <span className="pointment_first_letter">M</span>
                <svg
                  className="type_meet"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24.075"
                    cy="24.432"
                    r="23.5551"
                    fill="url(#paint0_linear_221_832)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_221_832"
                      x1="-1.63727"
                      y1="51.1695"
                      x2="57.4776"
                      y2="25.0403"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#57B4DE" />
                      <stop offset="0.390995" stopColor="#58B6DD" />
                      <stop offset="1" stopColor="#3B29AB" />
                    </linearGradient>
                  </defs>
                  <text className="pointment_first_letter" x="50%" y="50%" color="white" dominant-baseline="middle" text-anchor="middle">M</text>
                </svg>
                <div className="text_type">
                  <span className="text_type_meet">Montly patients meet</span>
                  <span className="date_type_meet">
                    8 April, 2023 | 09:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
