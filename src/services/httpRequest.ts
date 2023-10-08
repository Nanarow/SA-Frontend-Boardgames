import { NotifyError, NotifySuccess } from "../components/custom/MyNotify";

const API_URL = "http://localhost:8985";

type Method = "GET" | "OPTIONS" | "POST" | "PATCH" | "PUT" | "DELETE";

class HTTPRequest {
  protected contentType: string = "application/json";
  private readonly baseUrl: string = "http://localhost:8985";

  constructor() {}

  public async Get(endpoint: string) {
    return this.SendRequest("GET", `${this.baseUrl}${endpoint}`);
  }

  public async Delete(endpoint: string) {
    return this.SendRequest("DELETE", `${this.baseUrl}${endpoint}`);
  }

  public async Post(endpoint: string, body: string) {
    return this.SendRequest("POST", `${this.baseUrl}${endpoint}`, body);
  }

  public async Patch(endpoint: string, body: string) {
    return this.SendRequest("PATCH", `${this.baseUrl}${endpoint}`, body);
  }

  public async SendRequest(method: Method, endpoint: string, body?: string) {
    const requestOptions = {
      method,
      headers: {
        "Content-Type": this.contentType,
      },
      body,
    };
    const response = await fetch(endpoint, requestOptions);
    const result = await response.json();

    if (!response.ok) {
      NotifyError(result.error);
      return;
    }
    NotifySuccess();
    return result.data;
  }
}

export { HTTPRequest, API_URL };
