import configuration from "../configuration";

const apiBasePath = `${configuration.apiUrl}/3`

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Authorization", `Bearer ${configuration.apiToken}`);

  const requestOptions = {
      method: "GET",
      headers: headers
  };

  const response = await fetch(`${apiBasePath}${relativeUrl}`, requestOptions);
  const value: TBody = await response.json();
  return value;
}

export interface MovieDetails {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  backdrop_path?: string;
}

interface PageResponse<TResult> {
  page: number;
  results: TResult[];
}

interface Configuration {
  images: {
    base_url: string;
  };
}

export const client = {
  async getConfiguration() {
    return get<Configuration>("/configuration");
  },
  async getNowPlaying(): Promise<MovieDetails[]> {
    const response = await get<PageResponse<MovieDetails>>(
      "/movie/now_playing?page=1"
    );

    return response.results;
  }
}