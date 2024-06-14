import { useRef, useState } from "react";
import "./BookingPage.scss";
import { inputToDayFormat } from "../services/date";
import Form from "react-bootstrap/Form";
import { createBookingAppointment } from "../services/booking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";

export default function BookingPage() {
  const [validated, setValidated] = useState(false);
  const formRef = useRef();
  const bookingMutate = useMutation({
    mutationFn: createBookingAppointment,
    onSuccess: () => {
      setValidated(false);
      formRef.current.reset();
      toast.success("Đặt lịch hẹn thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });

  function submitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!validateForm(form)) {
      setValidated(true);
      return;
    }
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    bookingMutate.mutate(data);
  }

  function validateForm(form) {
    for (const element of form.elements) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.value = element.value.trim();
      }
    }

    return form.checkValidity();
  }

  function validateFormTrimStart(form) {
    for (const element of form.elements) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.value = element.value.trimStart();
      }
    }
  }

  function changeFormTrimStartHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
    validateFormTrimStart(form);
  }

  return (
    <div
      className="h-100 w-100"
      style={{ overflowY: "scroll", backgroundColor: "#fff" }}
    >
      <ToastContainer />
      <div className="booking-container">
        <div
          className="booking-section shadow-lg"
        >
          <Form
            ref={formRef}
            onSubmit={submitHandler}
            noValidate
            onChange={changeFormTrimStartHandler}
            validated={validated}
            className="d-flex flex-column gap-1"
          >
            <div className="text-center">
              <label
                className="col-form-label fs-4 fw-bold"
                style={{ color: "#1f6bdb" }}
              >
                ĐẶT LỊCH HẸN
              </label>
            </div>
            <div className="row gap-3">
              <div className="col">
                <label htmlFor="fullname" className="col-form-label fw-bold">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="phonenumber" className="col-form-label fw-bold">
                  Số điện thoại
                </label>
                <input
                  className="form-control"
                  id="phonenumber"
                  name="phonenumber"
                  type="number"
                  required
                ></input>
              </div>
            </div>
            <div className="row gap-3">
              <div className="col">
                <label htmlFor="gender" className="col-form-label fw-bold">
                  Giới tính
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  required
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="birthyear" className="col-form-label fw-bold">
                  Năm sinh
                </label>
                <input
                  className="form-control"
                  id="birthyear"
                  name="birthyear"
                  type="number"
                  required
                  min="0"
                  max={new Date().getFullYear()}
                ></input>
              </div>
            </div>
            <div className="row">
              <label htmlFor="address" className="col-form-label fw-bold">
                Địa chỉ
              </label>
              <input
                className="form-control"
                id="address"
                name="address"
                required
              ></input>
            </div>
            <div className="row">
              <label htmlFor="scheduledate" className="col-form-label fw-bold">
                Ngày hẹn
              </label>
              <input
                className="form-control"
                type="date"
                name="scheduledate"
                id="scheduledate"
                min={inputToDayFormat()}
                required
              ></input>
            </div>
            <div className="row mt-3">
              <button className="btn btn-primary shadow" type="submit">
                Đặt lịch
              </button>
            </div>
          </Form>
        </div>
      </div>
      <div className="home-footer w-100">
        <div
          className="w-100 h-100 d-flex flex-row justify-content-between"
          style={{ borderBottom: "1px solid rgb(68 176 253)" }}
        >
          <div className="web-info d-flex flex-row align-items-lg-start gap-2">
            <ul>
              <li>
                {" "}
                <p
                  style={{
                    fontSize: "21px",
                    color: "rgb(69 177 255)",
                    fontWeight: "500",
                    margin: 0,
                    marginBottom: "2px",
                  }}
                >
                  PRIVATE MEDICAL CLINIC
                </p>
              </li>
              <li
                style={{
                  fontSize: "19px",
                }}
              >
                Địa chỉ: Tp.Hồ Chí Minh
              </li>
              <li
                style={{
                  fontSize: "19px",
                }}
              >
                Điện thoại: 0343855777
              </li>
              <li></li>
            </ul>
          </div>
          <div className="footer-info-container">
            <ul className="footer-info">
              <li>
                {" "}
                <p
                  style={{
                    color: "rgb(69 177 255)",
                    fontWeight: "600",
                    fontSize: "19px",
                    marginBottom: "2px",
                  }}
                >
                  Tổng quan
                </p>
              </li>
              <li>
                <a href="./introduce">Giới thiệu </a>
              </li>
              <li>
                <a href="./procedure">Quy trình</a>
              </li>
              <li>
                <a href="./contact">Liên hệ</a>
              </li>
            </ul>
            <ul className="footer-info">
              <li>
                {" "}
                <p
                  style={{
                    color: "rgb(69 177 255)",
                    fontWeight: "600",
                    fontSize: "19px",
                    marginBottom: "2px",
                  }}
                >
                  Dịch vụ
                </p>
              </li>
              <li>
                <a href="./booking">Đặt lịch</a>
              </li>
              <li>
                <a href="./search">Tra cứu</a>
              </li>
            </ul>
            <ul className="footer-info">
              <li>
                {" "}
                <p
                  style={{
                    color: "rgb(69 177 255)",
                    fontWeight: "600",
                    fontSize: "19px",
                    marginBottom: "2px",
                  }}
                >
                  Hỗ trợ
                </p>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61558487786531"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="http://m.me/284221341439741" target="_blank">
                  Messenger
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact d-flex">
        <a href="http://m.me/284221341439741" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.5rem"
            height="3.5rem"
            fill="#1b59f8"
            className="bi bi-messenger"
            viewBox="0 0 16 16"
            style={{ marginTop: "1px" }}
          >
            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
