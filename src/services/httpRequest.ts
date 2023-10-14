import { NotifyError, NotifySuccess } from "../components/custom/notify";

type Method = "GET" | "OPTIONS" | "POST" | "PATCH" | "PUT" | "DELETE";

class HTTPRequest {
  protected contentType: string = "application/json";
  private readonly baseUrl: string = "http://localhost:8985";

  public Get(resource: string) {
    return this.SendRequest("GET", `${this.baseUrl}${resource}`);
  }

  public Delete(resource: string) {
    return this.SendRequest("DELETE", `${this.baseUrl}${resource}`);
  }

  public Post(resource: string, body: string) {
    return this.SendRequest("POST", `${this.baseUrl}${resource}`, body);
  }

  public Patch(resource: string, body: string) {
    return this.SendRequest("PATCH", `${this.baseUrl}${resource}`, body);
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
    if (method === "POST") {
      NotifySuccess("Success");
    }
    if (method === "PATCH") {
      NotifySuccess("Update Success");
    }
    if (method === "DELETE") {
      NotifySuccess("Delete Success");
    }
    return result.data;
  }
}

export { HTTPRequest };
