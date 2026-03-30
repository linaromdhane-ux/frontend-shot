// src/data/products.js

export const allProducts = [
  {
    id: 101,
    // ✅ anciens champs conservés (rien cassé)
    name: 'Spirulina Powder',
    description: 'Green Gold – Pure Energy in Every Scoop',
    fullDescription: 'Our premium spirulina capsules are packed with essential nutrients to support your daily health routine. Each capsule contains 500mg of pure, high-quality spirulina that\'s been carefully sourced and tested for purity. Spirulina is rich in protein, vitamins, minerals, and antioxidants, making it an excellent supplement for overall wellness.',
    badge: 'Best Seller',
    stock: 'In Stock (50 available)',
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
    // ✅ nouvelles clés i18n ajoutées
    nameKey: 'p101_name',
    descriptionKey: 'p101_desc',
    fullDescriptionKey: 'p101_full',
    badgeKey: 'p101_badge',
    stockKey: 'p101_stock',
    featureKeys: ['p101_f1', 'p101_f2', 'p101_f3', 'p101_f4', 'p101_f5'],
    // ✅ champs neutres inchangés
    price: '59,000 DT',
    priceNum: 59000,
    badgeColor: '#2563eb',
    rating: 4.7,
    reviews: 2,
    img: '/images/p1.png',
    images: ['/images/p1.png', '/images/p1.png', '/images/p1.png', '/images/p1.png'],
    category: 'Powder',
    overallRating: 4.7,
    totalReviews: 45
  },
  {
    id: 102,
    name: 'Spirulina Diamonds',
    description: 'Emerald Boost – Tiny Gems, Giant Vitality',
    fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
    badge: 'Best Seller',
    stock: 'In Stock (20 available)',
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
    nameKey: 'p102_name',
    descriptionKey: 'p102_desc',
    fullDescriptionKey: 'p102_full',
    badgeKey: 'p102_badge',
    stockKey: 'p102_stock',
    featureKeys: ['p102_f1', 'p102_f2', 'p102_f3', 'p102_f4'],
    price: '59,000 DT',
    priceNum: 59000,
    badgeColor: '#2563eb',
    rating: 4.8,
    reviews: 2,
    img: '/images/p2.png',
    images: ['/images/p2.png', '/images/p2.png', '/images/p2.png', '/images/p2.png'],
    category: 'Diamonds',
    overallRating: 4.7,
    totalReviews: 45
  },
  {
    id: 103,
    name: 'Baby S.HOTs',
    description: 'Little Green Boost – Tiny Shots, Grab & Go',
    fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
    badge: 'New',
    stock: 'In Stock (25 available)',
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
    nameKey: 'p103_name',
    descriptionKey: 'p103_desc',
    fullDescriptionKey: 'p103_full',
    badgeKey: 'p103_badge',
    stockKey: 'p103_stock',
    featureKeys: ['p103_f1', 'p103_f2', 'p103_f3', 'p103_f4', 'p103_f5'],
    price: '59,000 DT',
    priceNum: 59000,
    badgeColor: '#22c55e',
    rating: 4.8,
    reviews: 2,
    img: '/images/p3.jpg',
    images: ['/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg'],
    category: 'Shots',
    overallRating: 4.7,
    totalReviews: 45
  },
  {
    id: 104,
    name: 'Spirulina Tablets',
    description: 'Premium organic spirulina in easy-to-take tablets. 100g (+200)',
    fullDescription: 'Our premium spirulina tablets are easy to mix in drinks and food. 100% pure spirulina powder with 30 servings per container. Rich in chlorophyll and phycocyanin, cold-pressed to preserve nutrients.',
    badge: 'Popular',
    stock: 'In Stock (35 available)',
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
    nameKey: 'p104_name',
    descriptionKey: 'p104_desc',
    fullDescriptionKey: 'p104_full',
    badgeKey: 'p104_badge',
    stockKey: 'p104_stock',
    featureKeys: ['p104_f1', 'p104_f2', 'p104_f3', 'p104_f4', 'p104_f5'],
    price: '69,000 DT',
    priceNum: 69000,
    badgeColor: '#f59e0b',
    rating: 4.8,
    reviews: 2,
    img: '/images/p4.png',
    images: ['/images/p4.png', '/images/p4.png', '/images/p4.png', '/images/p4.png'],
    category: 'Tablets',
    overallRating: 4.7,
    totalReviews: 45
  }
];