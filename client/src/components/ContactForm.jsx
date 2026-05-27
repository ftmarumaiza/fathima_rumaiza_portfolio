import React, { useState } from 'react';
import { PORTFOLIO, API_BASE_URL } from '../data/portfolioData';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', msg: "Message sent. I'll get back to you soon." });
        setForm({ name: '', email: '', message: '' });
      } else if (res.status === 503 && data.demoMode) {
        setStatus({ type: 'success', msg: 'Demo mode: MongoDB is not connected, so the message was not stored.' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Unable to reach the server. Please try email instead.' });
    }

    setLoading(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          required
        />
      </div>
      {status && <div className={`form-status ${status.type}`}>{status.msg}</div>}
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
