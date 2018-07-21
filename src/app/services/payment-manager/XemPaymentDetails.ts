export class XemPaymentDetails {
  readonly _tokenAddess: string;
  readonly _usdValue: number;
  readonly _eurValue: number;
  readonly _xemAmount: number;
  readonly _message: string;

  get tokenAddress(): string { return this._tokenAddess; }
  get xemAmount(): number { return this._xemAmount; }
  get message(): string { return this._message; }

  constructor(address: string, usdValue: number, eurValue: number, xemAmount: number, message: string) {
    this._tokenAddess = address;
    this._usdValue = usdValue;
    this._eurValue = eurValue;
    this._xemAmount = xemAmount;
    this._message = message;
  }
}
