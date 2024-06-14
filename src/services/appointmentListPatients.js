export async function fetchAllAppointmentListPatients() {
  const response = await fetch(
    "http://localhost:8080/api/v1/appointmentlistpatients",
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer",
      },
    }
  );
  if (!response.ok) {
    const error = new Error(
      "An error occurred while fetching  all appointment list patients"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();
  const data = resData.data;
  return data;
}

export async function fetchAllAppointmentListByPatientId({ patientId }) {
  const response = await fetch(
    `http://localhost:8080/api/v1/appointmentlistpatients?patientId=${patientId}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer",
      },
    }
  );
  if (!response.ok) {
    const error = new Error(
      "An error occurred while fetching  all appointment list patients"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();
  const data = resData.data;
  return data;
}

export async function fetchAllAppointmentListByAppointmentListId({
  appointmentListId,
}) {
  const response = await fetch(
    `http://localhost:8080/api/v1/appointmentlistpatients?appointmentListId=${appointmentListId}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer",
      },
    }
  );
  if (!response.ok) {
    const error = new Error(
      "An error occurred while fetching  all appointment list patients"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();
  const data = resData.data;
  return data;
}

export async function fetchAppointentListPatientById({ id }) {
  const response = await fetch(
    `http://localhost:8080/api/v1/appointmentlistpatients/${id}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer",
      },
    }
  );
  if (!response.ok) {
    if (!response.ok) {
      throw new Error("can not fetch appointment list patient");
    }
  }
  const resData = await response.json();
  const data = resData.data;
  return data;
}
