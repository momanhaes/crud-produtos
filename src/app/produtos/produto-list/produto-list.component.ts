import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {
  title = 'Produtos';
  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.produtoService.getAll().subscribe(resp => {
      this.produtos = resp;
    })
  }

  remove(produto: Produto) {
    this.produtoService.remove(produto.id).subscribe(() => {
      this.produtos = this.produtos.filter(p => p !== produto);
    });
  }
}
