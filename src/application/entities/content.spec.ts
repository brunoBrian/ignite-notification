import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade.');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less then 5 charachters', () => {
    expect(() => new Content('hjk')).toThrow();
  });

  it('should not be able to create a notification content with more then 250 charachters', () => {
    expect(() => new Content('a'.repeat(251))).toThrow();
  });
});
