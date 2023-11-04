import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-pagamento',
  templateUrl: './cliente-pagamento.component.html',
  styleUrls: ['./cliente-pagamento.component.scss']
})
export class ClientePagamentoComponent {
  inputCartao: string = '';
  inputTitular: string = '';
  inputValidade: string = '';
  inputCVV: string = '';
  maskCartao: string = "#### #### #### ####";
  mostrarCartao: boolean = false;
  tipoCartao: string = '';

  formatCartao() {
    const nums = this.inputCartao.replace(/\D/g, '');

    const maxTamanho = 16;
    if (nums.length > maxTamanho) {
      this.inputCartao = this.inputCartao.substring(0, maxTamanho);
      return;
    }

    const reMaxTamanho = maxTamanho - nums.length;
    const maskedValue = nums + '#'.repeat(reMaxTamanho);

    this.maskCartao = '';
    for (let i = 0; i < maxTamanho; i += 4) {
      this.maskCartao += maskedValue.substring(i, i + 4) + ' ';
    }
  }

  formatTitular() {
    let text = this.inputTitular;
    text = text.replace(/[^a-zA-Z\s]/g, '');
    const maxTamanho = 28;

    if (text.length > maxTamanho) {
      text = text.substring(0, maxTamanho);
    }
  
    this.inputTitular = text;
  }

  noNumbers(event: KeyboardEvent) {
    const chave = event.key;
  
    
    if (/^\d$/.test(chave)) {
      event.preventDefault();
    }
  }

  formatValidade() {
    let text = this.inputValidade;

    if (text.length >= 2 && text.charAt(2) !== '/') {
      text = text.substring(0, 2) + '/' + text.substring(2);
    }
  
    this.inputValidade = text;
  }

  onCartao(option: string) {
    this.tipoCartao = option;
  }
}
