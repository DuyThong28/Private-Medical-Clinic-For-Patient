export async function fetchAllUnit() {
  const response = await fetch("http://localhost:8080/api/v1/units", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching all the units");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();
  const units = resData.units;
  return units;
}

export async function fetchUnitById({ id }) {
  const response = await fetch(`http://localhost:8080/api/v1/units/${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer",
    },
  });
  if (!response.ok) {
    if (!response.ok) {
      throw new Error("can not fetch all patients");
    }
  }
  const resData = await response.json();
  const data = resData.data;
  return data;
}
