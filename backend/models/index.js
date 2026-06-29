const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FirmSchema = new Schema({
  name: String, tagline: String, subtagline: String,
  phone: String, email: String, address: String, founded: String,
  linkedin: String, twitter: String, facebook: String, instagram: String
}, { strict: false });

const AttorneySchema = new Schema({
  name: { type: String, required: true },
  title: String,
  area: String,
  bio: String,
  image: String,
  credentials: [String],
  order: { type: Number, default: 0 }
});

const PracticeAreaSchema = new Schema({
  id: { type: String, required: true, unique: true },
  icon: String,
  title: String,
  short: String,
  description: String,
  order: { type: Number, default: 0 }
});

const NewsSchema = new Schema({
  title: { type: String, required: true },
  category: String,
  date: String,
  excerpt: String,
  content: String,
  image: String,
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const TestimonialSchema = new Schema({
  text: { type: String, required: true },
  author: String,
  role: String,
  rating: { type: Number, default: 5 },
  active: { type: Boolean, default: true }
});

const CareerSchema = new Schema({
  title: { type: String, required: true },
  department: String,
  location: String,
  type: String,
  description: String,
  requirements: [String],
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const StatsSchema = new Schema({
  stats: [{
    label: String,
    value: Number,
    suffix: String
  }]
});

module.exports = {
  Firm: model('Firm', FirmSchema),
  Attorney: model('Attorney', AttorneySchema),
  PracticeArea: model('PracticeArea', PracticeAreaSchema),
  News: model('News', NewsSchema),
  Testimonial: model('Testimonial', TestimonialSchema),
  Career: model('Career', CareerSchema),
  Stats: model('Stats', StatsSchema)
};
