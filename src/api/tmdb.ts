async function get(relativeUrl: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2RhM2MyMjFlZjA3NDBhMDFlNmMwZTllNzdkNzJkMCIsInN1YiI6IjY1OTU0Y2UwYTY5OGNmNWExMzQzYTA1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQiqVQlKVKjNnvB8aixow-b7QW092Q8cG4KYkgdhwxo'
    }
  };

  const response = await fetch(
    `https://api.themoviedb.org/3${relativeUrl}`,
    options
  )
  const json = response.json()

  return json;
}

export const client = {
  async getNowPlaying() {
    return await get('/movie/now_playing?language=en-US&page=1')
  }
}