import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import "./service.css";
import image from "../../assets/Rectangle 1548.png";
import MemberCard from "../membersCards/MemberCard";
import "../membersCards/style.css";
import userIcon from "../../assets/userIcon.png";
import Footer from "../footer/Footer";
import ServicesCard from "../servicesCards/ServicesCard";
import { useLocation } from "react-router-dom";
import { RootState, AppDispatch } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoctor,
  fetchDoctors,
  UpdateDoctor,
  DeleteDocotr,
} from "../../redux/doctorSlice";
import { fetchAppointments } from ".././../redux/appointment";

type props = {
  setIsLoggedIn: (value: boolean) => void;
};
enum MedicalInfotype {
  "Neurosurgeons",
  "Thoracic Surgeons",
  "Orthopedic Surgeons",
  "Plastic Surgeons,",
  "Oral and Maxillofacial Surgeons",
  "Family Physicians",
  "Internists",
  "Emergency Physicians",
  "Psychiatrists",
  "Obstetricians",
  "Dentists",
}
interface objtype {
  name: string;
  lastName: string;
  Address: string;
  email: string;
  password: string;
  MedicalInfo: MedicalInfotype;
  rating: string;
  avatar: string;
  bio: string;
}
interface UserData {
  id: number;
  Address: string;
  name: string;
  email: string;
  avatar: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  password: string;
}
const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};
const Service: React.FC<props> = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const fullstar = (
    <i className="fa-solid fa-star fa-sm" style={{ color: "#F3CD03" }}></i>
  );
  const nostar = (
    <i className="fa-regular fa-star fa-sm" style={{ color: "#F3CD03" }}></i>
  );
  const halfstar = (
    <i
      className="fa-regular fa-star-half-stroke fa-sm"
      style={{ color: "#F3CD03" }}
    ></i>
  );
  // const [docId, setDocId] = useState<string>("jj");
  const dispatch: AppDispatch = useDispatch();
  const appointmentData = useSelector(
    (state: RootState) => state.appointment.data
  );
  const DoctorData = useSelector((state: RootState) => state.doctor.data);
  console.log("appointment Data here", appointmentData);

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchAppointments());
    const myObjectString = getLocalStorage("user");
    if (myObjectString) {
      const myObject = JSON.parse(myObjectString);
      setUserData(myObject);
    }
  }, [dispatch]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the height of the viewport
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };
  const [showDoc, setShowDoc] = useState(false);
  const [department, setDepartment] = useState<any>("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [appointmentTime, setAppointmentTime] = useState("");
  interface Appointment {
    AppointmentTime: string;
    AppointmentDuration: number;
    DoctorId: string;
  }

  interface TimeSlot {
    start: string;
    end: string;
  }

  function findAvailableSlots(
    appointments: Appointment[],
    appointmentDuration: number,
    workingHoursStart: number,
    workingHoursEnd: number
  ): TimeSlot[] {
    const bookedSlots: { startMinutes: number; endMinutes: number }[] =
      appointments.map((appointment) => {
        const [hours, minutes] =
          appointment.AppointmentTime.split(":").map(Number);
        const startMinutes = hours * 60 + minutes;
        const endMinutes = startMinutes + appointment.AppointmentDuration;
        return { startMinutes, endMinutes };
      });

    const availableSlots: TimeSlot[] = [];

    for (
      let currentMinutes = workingHoursStart * 60;
      currentMinutes < workingHoursEnd * 60;
      currentMinutes += appointmentDuration
    ) {
      const slotEnd = currentMinutes + appointmentDuration;
      const isSlotAvailable = !bookedSlots.some(
        ({ startMinutes, endMinutes }) => {
          return (
            (currentMinutes >= startMinutes && currentMinutes < endMinutes) ||
            (slotEnd > startMinutes && slotEnd <= endMinutes)
          );
        }
      );

      if (isSlotAvailable) {
        const startHour = Math.floor(currentMinutes / 60);
        const startMinute = currentMinutes % 60;
        const endHour = Math.floor(slotEnd / 60);
        const endMinute = slotEnd % 60;

        const slot: TimeSlot = {
          start: `${startHour.toString().padStart(2, "0")}:${startMinute
            .toString()
            .padStart(2, "0")}`,
          end: `${endHour.toString().padStart(2, "0")}:${endMinute
            .toString()
            .padStart(2, "0")}`,
        };

        availableSlots.push(slot);
      }
    }

    return availableSlots;
  }

  const appointmentDuration: number = 30;
  const workingHoursStart: number = 0;
  const workingHoursEnd: number = 23;

  const availableSlots: TimeSlot[] = findAvailableSlots(
    appointmentData,
    appointmentDuration,
    workingHoursStart,
    workingHoursEnd
  );
  console.log("Available Slots:", availableSlots);

  function isTimeInRange(time: string, start: string, end: string) {
    return time >= start && time <= end;
  }

  let isAppointmentTimeAvailable = false;

  for (let i = 0; i < availableSlots.length; i++) {
    const start = availableSlots[i].start;
    const end = availableSlots[i].end;

    if (isTimeInRange(appointmentTime, start, end)) {
      isAppointmentTimeAvailable = true;
      break;
    }
  }

  console.log("Is appointment time available:", isAppointmentTimeAvailable);

  return (
    <>
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="fisrt-div">
        <img src={image} />
        <div className="container-first-div">
          <div className="left">
            <div className="meet-text">
              <p>Meet the Best Hospital</p>
            </div>
            <div className="weKnow-text">
              <p>
                We Know how large objects will act, but things on a small scale
              </p>
            </div>
            <div className="button-first-div-service">
              <button className="get-button">Get Quote Now </button>
              <button className="learn-button">Learn More </button>
            </div>
          </div>
          <div className="right">
            <div className="h1-book">
              <h1>Book Appointment</h1>
            </div>
            <div className="right-inputs">
              <label>Name </label>
              <input
                type="text"
                placeholder="Name  "
                value={userData?.name ?? ""}
              />
              <label> Email adress </label>
              <input
                type="text"
                placeholder="example@gmail.com"
                value={userData?.email ?? ""}
              />
              <label>Departement </label>
              <select
                name="department"
                id=""
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setDepartment(e.target.value)
                }
              >
                <option selected>Department</option>
                <option value="Neurosurgeons">Neurosurgeons</option>
                <option value="Thoracic Surgeons">Thoracic Surgeons</option>
                <option value="Orthopedic Surgeons">Orthopedic Surgeons</option>
                <option value="Plastic Surgeons,">Plastic Surgeons,</option>
                <option value="Oral and Maxillofacial Surgeons">
                  Oral and Maxillofacial Surgeons
                </option>
                <option value="Family Physicians">Family Physicians</option>
                <option value="Internists">Internists</option>
                <option value="Emergency Physicians">
                  Emergency Physicians
                </option>
                <option value="Psychiatrists">Psychiatrists</option>
                <option value="Obstetricians">Obstetricians</option>
                <option value="Dentists">Dentists</option>
              </select>
              <label>Time</label>
              <input
                type="time"
                onChange={(e) => setAppointmentTime(e.target.value)}
              />
            </div>
            <div className="button-right-first-div">
              <button
                onClick={() => (handleScrollDown(), setShowDoc(true))}
                className="book-appointment-button"
              >
                Select Doctor{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="big-container-after-pict">
        {/* find a doctor div */}

        <div className="find-a-doctor">
          <h1>Find A Doctor</h1>

          <div className="form-service-find">
            <input
              className="input-find-doctor"
              type="text"
              placeholder="Name"
            />
            <input
              className="input-find-doctor"
              type="text"
              placeholder="Speciality"
            />
            <div className="available-switch">
              <label className="available-find">Available</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <button className="Search-button-find">Search</button>
          </div>
        </div>

        {showDoc ? (
          <div className="doctor-afet-book">
            {DoctorData.map((obj: objtype, i: number) => {
              if (
                (obj.MedicalInfo as MedicalInfotype) ===
                (department as MedicalInfotype)
              ) {
                return (
                  <MemberCard
                    // setDocId={setDocId}
                    key={i}
                    data={obj}
                    appointmentTime={appointmentTime}
                  />
                );
              }
            })}
          </div>
        ) : null}

        {/* services we provide  */}

        <div className="services-we-provide-container">
          <div className="services-first-text">
            <h1>Services we provide</h1>
          </div>
          <div className="lorem-text">
            <p style={{ fontSize: "16px", color: "black" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper{" "}
              <br />
              dalar elementur tempus hac tellus libero accumsan
            </p>
          </div>
        </div>

        {/* doctor card container  */}

        <div className="doctor-card-container-service">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />

          {/* <MemberCard /> */}
        </div>

        <div className="services-we-provide-container">
          <div className="services-first-text">
            <h1>what our customers say</h1>
          </div>
          <div className="lorem-text">
            <p style={{ fontSize: "18px", color: "black" }}>
              Problems trying to resolve the conflict between the two major
              realms of <br /> Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="review-container-service">
          <div className="card-review-service">
            <div className="icons-review">
              {fullstar}
              {fullstar}
              {fullstar}
              {fullstar}
              {fullstar}
            </div>

            <h6>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <img src={userIcon} />
          </div>
          <div className="card-review-service">
            <div className="icons-review">
              {fullstar}
              {fullstar}
              {fullstar}
              {nostar}
              {nostar}
            </div>
            <h6>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <img src={userIcon} />
          </div>
          <div className="card-review-service">
            <div className="icons-review">
              {fullstar}
              {fullstar}
              {halfstar}
              {nostar}
              {nostar}
            </div>
            <h6>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <img src={userIcon} />
          </div>
        </div>

        <div className="services-we-provide-container">
          <div className="services-first-text">
            <h1 style={{ color: "black" }}>FAQ</h1>
          </div>
          <div className="lorem-text">
            <p style={{ fontSize: "16px", color: "black" }}>
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="faq-container-service">
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
          <div className="faq-card-service">
            <i className="fa-solid fa-chevron-right"></i>
            <h5>the quick fox jumps over the lazy dog</h5>
            <h6>Things on a very small scale behave like nothing </h6>
          </div>
        </div>

        <div className="subscribe-to">
          <p className="p-suscribe-service">Subscribe to our newsletter</p>
          <div className="search-button">
            <input type="text" placeholder="Enter your email" />
            <button className="suscribe-button-service">suscribe</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Service;
