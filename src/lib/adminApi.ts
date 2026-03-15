const BASE_URL = "https://functions.poehali.dev/1c9fb7d2-06f6-43d2-bfa3-510548941a2b";

function getToken(): string {
  return localStorage.getItem("admin_token") || "";
}

async function req(method: string, action: string, body?: unknown, id?: number | string) {
  const params = new URLSearchParams({ action });
  if (id !== undefined) params.set("id", String(id));
  const res = await fetch(`${BASE_URL}?${params}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Admin-Token": getToken(),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

export const adminApi = {
  login: (password: string) => req("POST", "login", { password }),
  changePassword: (password: string) => req("POST", "change-password", { password }),

  getHero: () => req("GET", "hero"),
  saveHero: (data: unknown) => req("PUT", "hero", data),

  getCompany: () => req("GET", "company"),
  saveCompany: (data: unknown) => req("PUT", "company", data),

  getPricing: () => req("GET", "pricing"),
  createPackage: (data: unknown) => req("POST", "pricing", data),
  updatePackage: (id: number, data: unknown) => req("PUT", "pricing-package", data, id),
  deletePackage: (id: number) => req("DELETE", "pricing-package", {}, id),
  createExtra: (data: unknown) => req("POST", "pricing-extra", data),
  updateExtra: (id: number, data: unknown) => req("PUT", "pricing-extra", data, id),
  deleteExtra: (id: number) => req("DELETE", "pricing-extra", {}, id),

  getCases: () => req("GET", "cases"),
  createCase: (data: unknown) => req("POST", "cases", data),
  updateCase: (id: number, data: unknown) => req("PUT", "cases", data, id),
  deleteCase: (id: number) => req("DELETE", "cases", {}, id),

  getFaq: () => req("GET", "faq"),
  createFaq: (data: unknown) => req("POST", "faq", data),
  updateFaq: (id: number, data: unknown) => req("PUT", "faq", data, id),
  deleteFaq: (id: number) => req("DELETE", "faq", {}, id),

  getBlog: () => req("GET", "blog"),
  createBlog: (data: unknown) => req("POST", "blog", data),
  updateBlog: (id: number, data: unknown) => req("PUT", "blog", data, id),
  deleteBlog: (id: number) => req("DELETE", "blog", {}, id),
};
