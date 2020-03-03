app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Stuffed Chicken',
      description: 'Chicken stuffed with a cream cheese and spinach mix.',
      price: 8.28
    },
    {
      name: 'Lasagna',
      description: '"Raft" noodles with a meat sauce',
      price: 10.00
    },
    {
      name: 'Beef Tri-tip',
      description: 'Seasoned meat',
      price: 15.99
    }
  ];

  $scope.extras = [
    {
      name: 'Guacamole and Chips',
      description: 'Chips and guacamole for dipping',
      price: 3.50
    },
    {
      name: 'Tortilla soup',
      description: 'Tortilla + soup = bomb.com',
      price: 4.00
    },
    {
      name: 'Spinach Dip',
      description: 'Spinach dip with your choice of sourdough bread or chips',
      price: 7.00
    }
  ];

}]);
