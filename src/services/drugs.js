export async function fetchAllDrugs() {
  const response = await fetch("http://localhost:8080/api/v1/drugs", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching all the drugs");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();
  const drugs = resData.drugs;
  return drugs;
}



export async function fetchDrugById({ id }) {
  const response = await fetch(`http://localhost:8080/api/v1/drugs/${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the drug");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();
  const drug = resData.drug;
  return drug;
}
