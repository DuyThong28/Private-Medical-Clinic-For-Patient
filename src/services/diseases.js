export async function fetchAllDisease() {
  const response = await fetch("http://localhost:8080/api/v1/diseases", {
    credentials: "include",
    headers: {
      authorization: "Bearer",
    },
  });

  if (!response.ok) {
    const error = new Error(
      "An error occurred while fetching all the diseases"
    );
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const resData = await response.json();
  const diseases = resData.diseases;
  return diseases;
}
