import { Notification } from 'src/application/entities/notification';

export class InMemoryNotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
