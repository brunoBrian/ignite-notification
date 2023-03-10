import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @Length(5, 250)
  category: string;

  @IsNotEmpty()
  recipientId: string;
}
