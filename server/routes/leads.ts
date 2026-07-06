import { Router } from 'express';
import { getDb } from '../db';
import { leads } from '../../drizzle/schema';
import { requireAdmin } from '../_core/adminAuth';

const router = Router();

// POST /api/leads - Create a new lead
router.post('/', async (req, res) => {
  try {
    const db = await getDb();
    if (!db) {
      return res.status(500).json({ error: 'Database not available' });
    }

    const { name, email, source } = req.body;

    // Validate required fields
    if (!name || !email || !source) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Insert lead into database
    const result = await db
      .insert(leads)
      .values({
        name,
        email,
        source,
      });

    res.status(201).json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Failed to create lead' });
  }
});

// GET /api/leads - Get all leads (admin only - previously had no protection
// at all, meaning anyone who found this URL could see every captured lead)
router.get('/', requireAdmin, async (req, res) => {
  try {
    const db = await getDb();
    if (!db) {
      return res.status(500).json({ error: 'Database not available' });
    }

    const allLeads = await db.select().from(leads).orderBy(leads.createdAt);
    res.json(allLeads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

export default router;
