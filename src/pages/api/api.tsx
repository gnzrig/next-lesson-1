export async function fetchData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
