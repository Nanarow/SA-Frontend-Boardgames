type Method = "GET" | "OPTIONS" | "POST" | "PATCH" | "PUT" | "DELETE";

const API_URL = "http://localhost:8985";
class HTTPRequest {
  protected contentType: string = "application/json";
  private baseUrl!: string;
  private resource!: string;

  constructor(baseUrl: string, resource: string) {
    this.baseUrl = baseUrl;
    this.resource = resource;
  }

  protected async Get() {
    return this.SendRequest("GET", this.GetEndpoint());
  }

  protected async GetById(id: number) {
    return this.SendRequest("GET", this.GetEndpoint(id));
  }

  protected async GetByQuery(query: string) {
    return this.SendRequest("GET", this.GetEndpoint(undefined, query));
  }

  protected async DeleteById(id: number) {
    return this.SendRequest("DELETE", this.GetEndpoint(id));
  }

  protected async Post(body: string) {
    return this.SendRequest("POST", this.GetEndpoint(), body);
  }

  protected async Patch(body: string) {
    return this.SendRequest("PATCH", this.GetEndpoint(), body);
  }

  private async SendRequest(method: Method, endpoint: string, body?: string) {
    const requestOptions = {
      method,
      headers: {
        "Content-Type": this.contentType,
      },
      body,
    };

    const response = await fetch(endpoint, requestOptions);
    const result = await response.json();

    if (response.ok) {
      return result.data;
    } else {
      return result.error;
    }
  }

  private GetEndpoint(id?: number, query?: string): string {
    return `${this.baseUrl}/${this.resource}
    ${id !== undefined ? `/${id}` : ""}
    ${query !== undefined ? `?${query}` : ""}`;
  }
}

export { HTTPRequest, API_URL };
