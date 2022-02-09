export interface AsyncWrapper<T> {
  value?: T | null,
  loading: boolean,
  error?: string,
}
