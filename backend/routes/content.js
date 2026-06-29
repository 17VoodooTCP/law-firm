const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/auth');
const { Firm, Attorney, PracticeArea, News, Testimonial, Career, Stats } = require('../models/index');

// ─── PUBLIC: GET all site data in one call ───────────────────────────────────
router.get('/data', async (req, res) => {
  try {
    const [firm, stats, attorneys, practiceAreas, testimonials, news, careers] = await Promise.all([
      Firm.findOne().lean(),
      Stats.findOne().lean(),
      Attorney.find().sort({ order: 1 }).lean(),
      PracticeArea.find().sort({ order: 1 }).lean(),
      Testimonial.find({ active: true }).lean(),
      News.find({ published: true }).sort({ createdAt: -1 }).lean(),
      Career.find({ active: true }).sort({ createdAt: -1 }).lean()
    ]);
    res.json({ firm, stats: stats?.stats || [], attorneys, practiceAreas, testimonials, news, careers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── FIRM INFO ────────────────────────────────────────────────────────────────
router.put('/firm', requireAuth, async (req, res) => {
  try {
    const firm = await Firm.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(firm);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ─── STATS ────────────────────────────────────────────────────────────────────
router.put('/stats', requireAuth, async (req, res) => {
  try {
    const doc = await Stats.findOneAndUpdate({}, { stats: req.body }, { new: true, upsert: true });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ─── ATTORNEYS ────────────────────────────────────────────────────────────────
router.get('/attorneys', async (req, res) => {
  try {
    res.json(await Attorney.find().sort({ order: 1 }).lean());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/attorneys', requireAuth, async (req, res) => {
  try {
    const doc = await Attorney.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/attorneys/:id', requireAuth, async (req, res) => {
  try {
    const doc = await Attorney.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/attorneys/:id', requireAuth, async (req, res) => {
  try {
    await Attorney.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ─── PRACTICE AREAS ──────────────────────────────────────────────────────────
router.get('/practice-areas', async (req, res) => {
  try {
    res.json(await PracticeArea.find().sort({ order: 1 }).lean());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/practice-areas/:id', requireAuth, async (req, res) => {
  try {
    const doc = await PracticeArea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ─── NEWS ─────────────────────────────────────────────────────────────────────
router.get('/news', async (req, res) => {
  try {
    res.json(await News.find({ published: true }).sort({ createdAt: -1 }).lean());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/news', requireAuth, async (req, res) => {
  try {
    const doc = await News.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/news/:id', requireAuth, async (req, res) => {
  try {
    const doc = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/news/:id', requireAuth, async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
router.get('/testimonials', async (req, res) => {
  try {
    res.json(await Testimonial.find({ active: true }).lean());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/testimonials', requireAuth, async (req, res) => {
  try {
    const doc = await Testimonial.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/testimonials/:id', requireAuth, async (req, res) => {
  try {
    const doc = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/testimonials/:id', requireAuth, async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ─── CAREERS ──────────────────────────────────────────────────────────────────
router.get('/careers', async (req, res) => {
  try {
    res.json(await Career.find({ active: true }).sort({ createdAt: -1 }).lean());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/careers', requireAuth, async (req, res) => {
  try {
    const doc = await Career.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/careers/:id', requireAuth, async (req, res) => {
  try {
    const doc = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/careers/:id', requireAuth, async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
