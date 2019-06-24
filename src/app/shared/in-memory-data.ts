import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryData implements InMemoryDbService {

  createDb() {

    const produtos = [

      { id: 1, nome: 'Pen Drive', descricao: 'SanDisk, 64GB, Vermelho, Pequeno, Com chaveiro e 3 meses de garantia.', preco: 50},
      { id: 2, nome: 'Notebook', descricao: 'Dell, Intel Core i7, 8gb de memória RAM, HD de 1TB e 1 ano de garantia.', preco: 3.500 },
      { id: 3, nome: 'Fone de ouvido', descricao: 'Mondial, bluetooth, com carregador e 3 meses de garantia.', preco: 90 },
      { id: 4, nome: 'Mouse', descricao: 'Logitech, com fio, cinza, acompanha mousepad Dell e 3 meses de garantia.', preco: 30 }

    ];

    return {produtos};

  }

}
