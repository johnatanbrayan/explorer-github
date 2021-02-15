export interface IssueModel {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}
