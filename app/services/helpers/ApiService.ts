import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5059/v1", timeout: 5000 });

export async function apiRequestAsync(path: string, method: string, timeout: number, data?: any) {
  const config = {
    url: path,
    method: method,
    data: data ?? null,
    timeout: timeout * 1000,
  };

  try {
    const response = await api.request(config);

    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      const errMsg = Object.values(err.response?.data);

      throw errMsg[0] ?? "Erro desconhecido.";
    } else {
      throw String(err);
    }
  }
}
