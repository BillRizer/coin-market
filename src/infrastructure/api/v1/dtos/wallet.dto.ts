interface IItem {
  amount: number;
}
export interface IWalletDto {
  [key: string]: IItem;
}
