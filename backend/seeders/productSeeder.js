module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Light Roasted Coffee Bean',
        sku: 'cr-001',
        image: '/assets/images/arabica-light.png',
        description: 'Light taste with fruity note',
        brand: 'Corretto',
        category: 'beans',
        price: 299,
        countInStock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Medium Roasted Coffee Bean',
        sku: 'cr-002',
        image: '/assets/images/arabica-medium.png',
        description: 'Light taste with fruity note',
        brand: 'Corretto',
        category: 'beans',
        price: 299,
        countInStock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Medium-Dark Roasted Coffee Bean',
        sku: 'cr-003',
        image: '/assets/images/arabica-medium-dark.png',
        description: 'Light taste with fruity note',
        brand: 'Corretto',
        category: 'beans',
        price: 299,
        countInStock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dark Roasted Coffee Bean',
        sku: 'cr-004',
        image: '/assets/images/corretto-dark.png',
        description: 'Light taste with fruity note',
        brand: 'Corretto',
        category: 'beans',
        price: 299,
        countInStock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  },
};
