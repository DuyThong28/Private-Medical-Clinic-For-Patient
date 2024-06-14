import { toast } from "react-toastify";

export async function createBookingAppointment(data) {
  const bookingDate = new Date();
  const fullName = data.fullname;
  const phone = data.phonenumber;
  const gender = data.gender;
  const address = data.address;
  const birthYear = data.birthyear;
  const bookingAppointment = data.scheduledate;
  const response = await fetch(
    `http://localhost:8080/api/v1/bookingappointmentlist`,
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        bookingDate,
        fullName,
        phone,
        gender,
        address,
        bookingAppointment,
        birthYear,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer",
      },
    }
  );

  if (!response.ok) {
    const error = new Error("Tạo lịch hẹn thất bại");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const resData = await response.json();
  const finalData = { ...resData.data };
  finalData.message = "Tạo lịch hẹn thành công";
  return finalData;
}
export async function checkPhone({ phoneNumber }) {
  const response = await fetch(
    `http://localhost:8080/api/v1/auth/patients/validPhoneNumber`,
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ phoneNumber }),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer",
      },
    }
  );
  console.log(response.status);
  if (response.status == 404) {
    const toastMessage = `Số điện thoại chưa tồn tại trong hệ thống`;
    toast.error(toastMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    throw new Error(toastMessage);
  }
  const resData = await response.json();
  const data = resData.data;
  const toastMessage = `Vui lòng nhập mã OTP đã được gửi đến sdt ${data.phoneNumber}`;
  toast.success(toastMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  return data;
}

export async function sendOTP({ phoneNumber }) {
  const response = await fetch(
    `http://localhost:8080/api/v1/auth/patients/sendOTPToPhone`,
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ phoneNumber }),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer",
      },
    }
  );
  if (!response.ok) {
    const error = new Error("Không tìm thấy số điện thoại người dùng");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();
  const data = resData.data;
  return data;
}

export async function checkOTP({ phoneNumber, code }) {
  const response = await fetch(
    `http://localhost:8080/api/v1/auth/patients/checkOTP`,
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ phoneNumber, code }),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer",
      },
    }
  );
  if (!response.ok) {
    const toastMessage = `Mã OPT không chính xác, vui lòng kiểm tra lại`;
    toast.error(toastMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    throw new Error(toastMessage);
  }

  const resData = await response.json();
  const toastMessage = `Xác nhận mã OTP thành công`;
  toast.success(toastMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  const data = resData.data;
  return data;
}
