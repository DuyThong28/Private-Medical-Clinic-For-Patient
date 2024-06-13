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
