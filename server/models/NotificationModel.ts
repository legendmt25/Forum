export interface INotification {
  title: string;
  logo: string;
  text: string;
}

export class Notification implements INotification {
  title: string;
  logo: string;
  text: string;
  constructor(title: string, logo: string, text: string) {
    this.title = title;
    this.logo = logo;
    this.text = text;
  }
}
