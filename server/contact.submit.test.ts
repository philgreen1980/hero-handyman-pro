import { describe, it, expect, vi } from 'vitest';
import { appRouter } from './routers';
import { notifyOwner } from './_core/notification';

// Mock the notification module
vi.mock('./_core/notification', () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

describe('contact.submit', () => {
  it('should accept valid contact form submission', async () => {
    const caller = appRouter.createCaller({
      req: {} as any,
      res: {} as any,
      user: null,
    });

    const result = await caller.contact.submit({
      name: 'Test Customer',
      email: 'test@example.com',
      phone: '555-123-4567',
      message: 'City: O\'Fallon\nService: deck-repair\n\nDetails: Need deck repair',
    });

    expect(result.success).toBe(true);
    expect(notifyOwner).toHaveBeenCalledWith({
      title: 'New Contact Form Submission',
      content: expect.stringContaining('Test Customer'),
    });
  });

  it('should reject submission with invalid email', async () => {
    const caller = appRouter.createCaller({
      req: {} as any,
      res: {} as any,
      user: null,
    });

    await expect(
      caller.contact.submit({
        name: 'Test Customer',
        email: 'invalid-email',
        phone: '555-123-4567',
        message: 'Test message',
      })
    ).rejects.toThrow();
  });

  it('should reject submission with missing required fields', async () => {
    const caller = appRouter.createCaller({
      req: {} as any,
      res: {} as any,
      user: null,
    });

    await expect(
      caller.contact.submit({
        name: '',
        email: 'test@example.com',
        phone: '555-123-4567',
        message: 'Test message',
      })
    ).rejects.toThrow();
  });
});
