export async function fetchMenu() {
    const url = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json"

    const response = await fetch(url);
    const xml = await response.text();

    const parser = new DOMParser()
    const doc = parser.parseFromString(xml, "application/xml")

    return Array.from(doc.querySelectorAll("CanteenDay")).map((day) => ({
    name: day.querySelector("DayName")?.textContent ?? "",
    dish: day.querySelector("Dish")?.textContent ?? "",
  }));
}