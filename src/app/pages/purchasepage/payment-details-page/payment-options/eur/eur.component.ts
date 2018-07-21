import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eur',
  templateUrl: './eur.component.html',
  styleUrls: ['./eur.component.scss']
})

export class EurComponent {

  @Input() tokenAmount = 0;
  @Input() recipientAddress = 'No Address Supplied';

  readonly paymentInfo = {
    header: 'Paying with EUR requires a <span class="font-bold">debit card</span> and a <span class="font-bold">' +
    '60 day escrow window</span> to prevent fraudulent purchases.',
    body1: 'You will be charged for your cryptocurrencies tokens today, and be ' +
    'issued pending tokens in your Nano Wallet as a certificate of ' +
    'cryptocurrencies ownership. After the 60 day window your cryptocurrencies will be ' +
    'automatically transferred to your Nano wallet account.',
    body2: 'We are not responsible for any funds lost due to mistyped amounts or wallets. Please double check your entries carefully ' +
    'when completing purchase.',
    btnText: 'Pay with EUR'
  };

}
