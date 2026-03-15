const BASE_URL = "https://functions.poehali.dev/4af78472-a338-473b-902c-7bc14e212a37";

export async function fetchContent(section: string) {
  const res = await fetch(`${BASE_URL}?section=${section.replace(/^\//, "")}`);
  return res.json();
}

export async function fetchAll() {
  return fetchContent("all");
}
