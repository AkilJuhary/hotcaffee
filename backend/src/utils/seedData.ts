import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product';

dotenv.config();

const products = [
  {
    name: 'Espresso',
    description: 'Rich and bold single shot of espresso',
    price: 3.99,
    category: 'Hot Coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04',
    isAvailable: true
  },
  {
    name: 'Cappuccino',
    description: 'Espresso with steamed milk foam',
    price: 4.99,
    category: 'Hot Coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
    isAvailable: true
  },
  {
    name: 'Iced Latte',
    description: 'Chilled espresso with cold milk and ice',
    price: 4.49,
    category: 'Cold Coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
    isAvailable: true
  },
  {
    name: 'Croissant',
    description: 'Buttery, flaky French pastry',
    price: 3.49,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    isAvailable: true
  }
];

const seedDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is not defined in environment variables');
      process.exit(1);
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    const insertedProducts = await Product.insertMany(products);
    console.log(`Seeded ${insertedProducts.length} products`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');

  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 