export async function fetchMenu() {
  const url = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json";

  const response = await fetch(url);
  const data = await response.json();

  return data.Days.map((day: any) => ({
    name: day.DayName,
    dish: day.Dish,
  }));
}