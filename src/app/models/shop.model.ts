export class Shop {
  shopItems: any;

  constructor() {
    this.shopItems = [
      {
        title: 'Curso Wordpress',
        desc: 'Aprende Wordpress desde 0 con David Piqué',
        picture: 'assets/imagenes/wordpress.jpg',
        price: 164,
      },
      {
        title: 'Curso Frontend',
        desc: 'Aprende desarrollo front end desde 0 con David Piqué',
        picture: 'assets/imagenes/frontend.jpg',
        price: 220,
      },
      {
        title: 'Curso Fullstack',
        desc: 'Aprende desarrollo frontend y backend desde 0 con David Piqué',
        picture: '/assets/imagenes/fullstack.jpg',
        price: 420,
      },
    ];
  }
}
