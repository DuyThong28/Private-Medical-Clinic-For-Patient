export async function dialogFlow(message) {
  const data = {
    languageCode: "vi",
    queryText: message,
    sessionId: "1",
  };
  let response;
  if (data) {
    try {
      response = await fetch("http://localhost:8080/api/v1/dialogflow/", {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer",
        },
      });
    } catch (error) {
      return error.message;
    }
    if (!response.ok) {
      const error = new Error("Error");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const resData = await response.json();
    return resData.data;
  }
}
