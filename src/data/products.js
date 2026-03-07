// src/data/products.js

export const allProducts = [
  {
    id: 101,
    name: 'Spirulina Powder',
    description: 'Green Gold – Pure Energy in Every Scoop',
    fullDescription: 'Our premium spirulina capsules are packed with essential nutrients to support your daily health routine. Each capsule contains 500mg of pure, high-quality spirulina that\'s been carefully sourced and tested for purity. Spirulina is rich in protein, vitamins, minerals, and antioxidants, making it an excellent supplement for overall wellness.',
    price: '59,000 DT',
    priceNum: 59000,
    badge: 'Best Seller',
    badgeColor: '#2563eb',
    stock: 'In Stock (50 available)',
    rating: 4.7,
    reviews: 2,
    img: '/images/p1.png',
    images: ['/images/p1.png', '/images/p1.png', '/images/p1.png', '/images/p1.png'],
    category: 'Powder',
    features: [
      '100% pure organic spirulina',
      '500mg per capsule',
      '60 capsules per bottle',
      'No additives or fillers',
      'Sustainably sourced'
    ],
    nutritionalInfo: [
      { label: 'Serving Size', value: '1 shot (2oz)' },
      { label: 'Spirulina', value: '1g' },
      { label: 'Vitamin C', value: '60% DV' },
      { label: 'Zinc', value: '20% DV' },
      { label: 'Ginger Extract', value: '200mg' }
    ],
    customerReviews: [
      { name: 'Frank', date: '2024-06-06', rating: 5, comment: 'Great for immunity, tastes good!' },
      { name: 'Alex X', date: '2024-06-06', rating: 5, comment: 'Great supplement for fast post-workout recovery.' },
      { name: 'Sarah', date: '2024-06-06', rating: 5, comment: 'Simple way to get my daily greens.' }
    ],
    overallRating: 4.7,
    totalReviews: 45
  },
  {
    id: 102,
    name: 'Spirulina Diamonds',
    description: 'Emerald Boost – Tiny Gems, Giant Vitality',
    fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
    price: '59,000 DT',
    priceNum: 59000,
    badge: 'Best Seller',
    badgeColor: '#2563eb',
    stock: 'In Stock (20 available)',
    rating: 4.8,
    reviews: 2,
    img: '/images/p2.png',
    images: ['/images/p2.png', '/images/p2.png', '/images/p2.png', '/images/p2.png'],
    category: 'Diamonds',
    features: [
      'Includes 1 bottle of capsules and 1 container of powder',
      'Save 10% compared to buying separately',
      'Ideal for varied consumption preferences',
      'Premium quality and purity guaranteed'
    ],
    nutritionalInfo: [
      { label: 'Capsules', value: 'See Pure Spirulina Capsules' },
      { label: 'Powder', value: 'See Spirulina Powder' }
    ],
    customerReviews: [
      { name: 'Frank', date: '2024-06-06', rating: 5, comment: 'Great for immunity, tastes good!' },
      { name: 'Alex X', date: '2024-06-06', rating: 5, comment: 'Great supplement for fast post-workout recovery.' },
      { name: 'Sarah', date: '2024-06-06', rating: 5, comment: 'Simple way to get my daily greens.' }
    ],
    overallRating: 4.7,
    totalReviews: 45
  },
  {
    id: 103,
    name: 'Baby S.HOTs',
    description: 'Little Green Boost – Tiny Shots, Grab & Go',
    fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
    price: '59,000 DT',
    priceNum: 59000,
    badge: 'New',
    badgeColor: '#22c55e',
    stock: 'In Stock (25 available)',
    rating: 4.8,
    reviews: 2,
    img: '/images/p3.jpg',
    images: ['/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg'],
    category: 'Shots',
    features: [
      '100% pure spirulina powder',
      'Easy to mix in drinks and food',
      '30 servings per container',
      'Rich in chlorophyll and phycocyanin',
      'Cold-pressed to preserve nutrients'
    ],
    nutritionalInfo: [
      { label: 'Capsules', value: 'See Pure Spirulina Capsules' },
      { label: 'Powder', value: 'See Spirulina Powder' }
    ],
    customerReviews: [
      { name: 'Frank', date: '2024-06-06', rating: 5, comment: 'Great for immunity, tastes good!' },
      { name: 'Alex X', date: '2024-06-06', rating: 5, comment: 'Great supplement for fast post-workout recovery.' },
      { name: 'Sarah', date: '2024-06-06', rating: 5, comment: 'Simple way to get my daily greens.' }
    ],
    overallRating: 4.7,
    totalReviews: 45
  },
  {
    id: 104,
    name: 'Spirulina Tablets',
    description: 'Premium organic spirulina in easy-to-take tablets. 100g (+200)',
    fullDescription: 'Our premium spirulina tablets are easy to mix in drinks and food. 100% pure spirulina powder with 30 servings per container. Rich in chlorophyll and phycocyanin, cold-pressed to preserve nutrients.',
    price: '69,000 DT',
    priceNum: 69000,
    badge: 'Popular',
    badgeColor: '#f59e0b',
    stock: 'In Stock (35 available)',
    rating: 4.8,
    reviews: 2,
    img: '/images/p4.png',
    images: ['/images/p4.png', '/images/p4.png', '/images/p4.png', '/images/p4.png'],
    category: 'Tablets',
    features: [
      '100% pure spirulina powder',
      'Easy to mix in drinks and food',
      '30 servings per container',
      'Rich in chlorophyll and phycocyanin',
      'Cold-pressed to preserve nutrients'
    ],
    nutritionalInfo: [
      { label: 'Serving Size', value: '1 shot (2oz)' },
      { label: 'Spirulina', value: '1g' },
      { label: 'Vitamin C', value: '60% DV' },
      { label: 'Zinc', value: '20% DV' },
      { label: 'Ginger Extract', value: '200mg' }
    ],
    customerReviews: [
      { name: 'Frank', date: '2024-06-06', rating: 5, comment: 'Great for immunity, tastes good!' },
      { name: 'Alex X', date: '2024-06-06', rating: 5, comment: 'Great supplement for fast post-workout recovery.' },
      { name: 'Sarah', date: '2024-06-06', rating: 5, comment: 'Simple way to get my daily greens.' }
    ],
    overallRating: 4.7,
    totalReviews: 45
  }
];