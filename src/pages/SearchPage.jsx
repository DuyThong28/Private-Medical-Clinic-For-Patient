import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { checkOTP, checkPhone, sendOTP } from "../services/booking";
import { ToastContainer } from "react-toastify";
import Form from "react-bootstrap/Form";
import { convertDate } from "../services/date";
import "./searchPage.scss";
import { fetchAllAppointmentListByPatientId } from "../services/appointmentListPatients";
import HistoryTab from "./HistoryTab";
import { NavLink } from "react-router-dom";

const searchStep = {
  CHECKPHONE: "check phone",
  CHECKOTP: "check otp",
  RESULT: "get search result",
};

export default function SearchPage() {
  const [validated, setValidated] = useState(false);
  const formRef = useRef();
  const phoneRef = useRef(null);
  const [searchState, setSearchState] = useState(searchStep.CHECKPHONE);
  const [resultState, setResultState] = useState(null);
  const [unCompletedAppointment, setUncompletedAppointment] = useState(null);
  const checkPhoneMutate = useMutation({
    mutationFn: checkPhone,
    onSuccess: async (data) => {
      setSearchState(() => searchStep.CHECKOTP);
      phoneRef.current = data.phoneNumber;
      await sendOTP({ phoneNumber: data.phoneNumber });
    },
    onError: () => {},
  });

  const checkOTPMutate = useMutation({
    mutationFn: checkOTP,
    onSuccess: async (data) => {
      phoneRef.current = null;
      setResultState(() => data);
      appoinmentListPatientMutate.mutate({ patientId: data.id });

      setSearchState(() => searchStep.RESULT);
    },
    onError: () => {},
  });

  const appoinmentListPatientMutate = useMutation({
    mutationFn: fetchAllAppointmentListByPatientId,
    onSuccess: (data) => {
      setUncompletedAppointment(() => {
        const unCompletedA =
          data.filter((appointment) => appointment.billId == null) || [];
        if (unCompletedA.length > 0) {
          return unCompletedA[0];
        } else {
          return null;
        }
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
    if (searchState === searchStep.CHECKPHONE) {
      checkPhoneMutate.mutate({ phoneNumber: data.phone });
    } else if (searchState === searchStep.CHECKOTP) {
      checkOTPMutate.mutate({ phoneNumber: phoneRef.current, code: data.code });
    }

    setValidated(false);
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

  function cancelHandler() {
    setSearchState(() => searchStep.CHECKPHONE);
    setResultState(() => null);
    phoneRef.current = null;
  }

  return (
    <div
      className="h-100 w-100"
      style={{ overflowY: "scroll", backgroundColor: "#fff" }}
    >
      <ToastContainer />
      <div className="search-container">
        {searchState !== searchStep.RESULT && (
          <div className="search-section shadow-lg">
            <Form
              ref={formRef}
              onSubmit={submitHandler}
              noValidate
              onChange={changeFormTrimStartHandler}
              validated={validated}
              className="d-flex flex-column gap-1"
            >
              {searchState === searchStep.CHECKPHONE && (
                <>
                  <div className="text-center">
                    <label
                      className="col-form-label fs-4 fw-bold"
                      style={{ color: "rgb(2 75 181)" }}
                    >
                      TRA CỨU THÔNG TIN
                    </label>
                  </div>
                  <input
                    className="form-control text-center"
                    value={"Vui lòng nhập số điện thoại của bạn"}
                    disabled
                  ></input>
                  <div className="row">
                    <label htmlFor="phone" className="col-form-label fw-bold">
                      Số điện thoại
                    </label>
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="number"
                      min="0"
                      required
                    ></input>
                  </div>
                  <div className="row mt-4 justify-content-center">
                    <button
                      className="btn btn-primary shadow"
                      style={{ width: "8rem" }}
                      type="submit"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </>
              )}
              {searchState === searchStep.CHECKOTP && (
                <>
                  <div className="text-center">
                    <label
                      className="col-form-label fs-4 fw-bold"
                      style={{ color: "rgb(2 75 181)" }}
                    >
                      XÁC NHẬN OTP
                    </label>
                  </div>
                  <input
                    className="form-control text-center"
                    value={"Vui lòng nhập mã OTP"}
                    disabled
                  ></input>
                  <div className="row">
                    <label htmlFor="code" className="col-form-label fw-bold">
                      Mã OTP
                    </label>
                    <input
                      className="form-control"
                      id="code"
                      name="code"
                      type="number"
                      min="0"
                      required
                    ></input>
                  </div>
                  <div className="row mt-4 d-flex flex-row gap-3 justify-content-center">
                    <button
                      className="btn rounded-3 btn-secondary shadow"
                      type="button"
                      style={{ width: "8rem" }}
                      onClick={cancelHandler}
                    >
                      Hủy
                    </button>
                    <button
                      className="btn btn-primary shadow"
                      style={{ width: "8rem" }}
                      type="submit"
                    >
                      Xác nhận
                    </button>
                  </div>
                </>
              )}
            </Form>
          </div>
        )}
        {searchState === searchStep.RESULT && (
          <div className="result-section shadow-lg">
            <Form
              ref={formRef}
              onSubmit={submitHandler}
              noValidate
              onChange={changeFormTrimStartHandler}
              validated={validated}
              className="d-flex flex-column gap-1 h-100"
            >
              <div className="text-center">
                <label
                  className="col-form-label fs-4 fw-bold"
                  style={{ color: "rgb(2 75 181)" }}
                >
                  KẾT QUẢ TRA CỨU
                </label>
              </div>
              <div className="row w-100 gap-3 justify-content-between">
                <div style={{ width: "70%" }}>
                  <div>
                    <label
                      className="col-form-label fw-bold"
                      style={{ color: "#000000" }}
                    >
                      THÔNG TIN BỆNH NHÂN
                    </label>
                  </div>
                  <div
                    className="gap-3 row"
                    style={{
                      background: "rgb(216, 232, 255)",
                      borderRadius: "8px",
                      padding: "0.5rem 1rem 0rem",
                    }}
                  >
                    <div className="row gap-3">
                      <div className="col">
                        <label
                          htmlFor="fullname"
                          className="col-form-label fw-bold"
                        >
                          Mã bệnh nhân
                        </label>
                        <p>{resultState?.id || ""}</p>
                      </div>
                      <div className="col">
                        <label
                          htmlFor="fullname"
                          className="col-form-label fw-bold"
                        >
                          Họ và tên
                        </label>
                        <p>{resultState?.fullName || ""}</p>
                      </div>
                      <div className="col">
                        <label
                          htmlFor="phonenumber"
                          className="col-form-label fw-bold"
                        >
                          Số điện thoại
                        </label>

                        <p>{resultState?.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="row gap-3">
                      <div className="col">
                        <label
                          htmlFor="fullname"
                          className="col-form-label fw-bold"
                        >
                          Giới tính
                        </label>

                        <p>{resultState?.gender}</p>
                      </div>
                      <div className="col">
                        <label
                          htmlFor="fullname"
                          className="col-form-label fw-bold"
                        >
                          Năm sinh
                        </label>

                        <p>{resultState?.birthYear}</p>
                      </div>
                      <div className="col">
                        <label
                          htmlFor="address"
                          className="col-form-label fw-bold"
                        >
                          Địa chỉ
                        </label>
                        <p>{resultState?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <label
                      className="col-form-label fw-bold"
                      style={{ color: "#000000" }}
                    >
                      CA KHÁM CHƯA HOÀN THÀNH
                    </label>
                  </div>
                  {unCompletedAppointment != null ? (
                    <div
                      className="gap-3 row"
                      style={{
                        background: "rgb(216, 232, 255)",
                        borderRadius: "8px",
                        padding: "0.5rem 1rem 0rem",
                      }}
                    >
                      <div className="row gap-3">
                        <div className="col">
                          <label className="col-form-label fw-bold">
                            Ngày khám
                          </label>
                          <p>
                            {convertDate(unCompletedAppointment?.scheduleDate)}
                          </p>
                        </div>
                        <div className="col">
                          <label className="col-form-label fw-bold">
                            Số thứ tự khám
                          </label>
                          <p>{unCompletedAppointment?.orderNumber}</p>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-form-label fw-bold">
                          Trạng thái
                        </label>
                        <p>
                          {unCompletedAppointment?.appointmentRecordId == null
                            ? "Chưa khám"
                            : "Chưa thanh toán"}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="gap-3 row text-center"
                      style={{
                        background: "rgb(216, 232, 255)",
                        borderRadius: "8px",
                        padding: "0.5rem 1rem 0rem",
                        height: "82%",
                      }}
                    >
                      <p
                        className="fw-bold text-dark"
                        style={{ margin: "auto" }}
                      >
                        Không có
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <label
                    className="col-form-label fw-bold"
                    style={{ color: "#000000" }}
                  >
                    LỊCH SỬ KHÁM BỆNH
                  </label>
                </div>
                <HistoryTab patientId={resultState?.id} />
              </div>
              <div className="row mt-3 justify-content-center">
                <button
                  className="btn btn-primary shadow"
                  style={{ width: "8rem" }}
                  type="button"
                  onClick={cancelHandler}
                >
                  Quay lại
                </button>
              </div>
            </Form>
          </div>
        )}
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
