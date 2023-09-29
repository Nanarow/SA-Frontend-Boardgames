type Method = "GET" | "OPTIONS" | "POST" | "PATCH" | "PUT" | "DELETE";

const API_URL = "http://localhost:8985";
class HTTPRequest {
  protected contentType: string = "application/json";
  private BaseUrl!: string;
  private Resource!: string;
  public constructor(baseUrl: string, Resource: string) {
    this.BaseUrl = baseUrl;
    this.Resource = Resource;
  }

  protected async Get() {
    return await this.Send("GET", `${this.BaseUrl}/${this.Resource}`);
  }
  protected async Find(id: number) {
    return await this.Send("GET", `${this.BaseUrl}/${this.Resource}/${id}`);
  }
  protected async Query(query: string) {
    return await this.Send("GET", `${this.BaseUrl}/${this.Resource}?${query}`);
  }
  protected async Delete(id: number) {
    return await this.Send("DELETE", `${this.BaseUrl}/${this.Resource}/${id}`);
  }
  protected async Post(body: string) {
    return await this.Send("POST", `${this.BaseUrl}/${this.Resource}`, body);
  }
  protected async Patch(body: string) {
    return await this.Send("PATCH", `${this.BaseUrl}/${this.Resource}`, body);
  }
  private async Send(method: Method, endpoint: string, body?: string) {
    const requestOptions = {
      method: method,
      headers: {
        "Content-Type": this.contentType,
      },
      body: body,
    };
    const response = await fetch(endpoint, requestOptions);
    const result = await response.json();
    if (response.ok) {
      return result.data;
    }
    return result.error;
  }
}

export { HTTPRequest, API_URL };
