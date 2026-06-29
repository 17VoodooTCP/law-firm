// Run once to populate MongoDB with default data:
//   node seed.js
require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI ||
  `mongodb+srv://${encodeURIComponent(process.env.MONGO_USER)}:${encodeURIComponent(process.env.MONGO_PASS)}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?appName=${process.env.MONGO_APP}&retryWrites=true&w=majority`;
const data = require('./defaultData');
const { Firm, Attorney, PracticeArea, News, Testimonial, Career, Stats } = require('./models/index');

async function seed() {
  await mongoose.connect(mongoURI);
  console.log('Connected — seeding...');

  // Clear existing data
  await Promise.all([
    Firm.deleteMany({}),
    Attorney.deleteMany({}),
    PracticeArea.deleteMany({}),
    News.deleteMany({}),
    Testimonial.deleteMany({}),
    Career.deleteMany({}),
    Stats.deleteMany({})
  ]);

  // Insert fresh data
  await Firm.create(data.firm);
  await Stats.create({ stats: data.stats });
  await Attorney.insertMany(data.attorneys.map((a, i) => ({ ...a, order: i })));
  await PracticeArea.insertMany(data.practiceAreas.map((p, i) => ({ ...p, order: i })));
  await News.insertMany(data.news);
  await Testimonial.insertMany(data.testimonials);
  await Career.insertMany(data.careers);

  console.log('✅ Database seeded successfully!');
  console.log(`   Firm: 1 | Attorneys: ${data.attorneys.length} | Practice Areas: ${data.practiceAreas.length}`);
  console.log(`   News: ${data.news.length} | Testimonials: ${data.testimonials.length} | Careers: ${data.careers.length}`);
  process.exit(0);
}

seed().catch(err => { console.error('Seed failed:', err); process.exit(1); });
