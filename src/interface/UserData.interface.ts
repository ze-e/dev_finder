export default interface UserData {
  name: string,
  url: string,
  login: string,
  avatar_url:string,
  bio?: string,
  created_at: string,
  public_repos: number,
  followers: number,
  following: number,
  location?: string,
  twitter_username?: string,
  blog?: string,
  company?: string,
  [key: string]: unknown;
}