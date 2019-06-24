import { Produto } from './../shared/produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto;
  title = '';

  constructor(private route: ActivatedRoute, private router: Router, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.title = 'Novo produto';
    this.produto = new Produto();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.getById(parseInt(id)).subscribe(resp => {

        this.produto = resp;
        this.title = `Alterando o produto: ${this.produto.nome}`;

      });
    }
  }

  onSubmit() {

    let observable: Observable<Produto>;

    if (this.produto.id) {
      observable = this.produtoService.update(this.produto);

    } else {
      observable = this.produtoService.insert(this.produto);
    }

    observable.subscribe(() => {
      this.router.navigate(['/produtos']);
    })

  }

}
