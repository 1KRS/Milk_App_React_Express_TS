export interface Result {
  name: string,
  type: string,
  storage: number,
  id: string
}

export interface Data {
  count: number,
  results: Result[]
}