export class FightResponseDto {
  id: number;
  date: Date;
  referee: string;
  firstFighter: { id: number; name: string };
  secondFighter: { id: number; name: string };
  category: string;
}
