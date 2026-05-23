import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="text-center py-8">
      <h2 className="text-3xl font-bold mb-4 text-gold-gradient">Collaborate with Me</h2>
      <p className="text-ivory/80 mb-6 max-w-xl mx-auto">
        Ready to elevate your brand with strategic, high‑impact content? Let's discuss how we can create something that moves people.
      </p>
      <Link href="mailto:manav@example.com" className="inline-block px-8 py-3 bg-gold text-black rounded-full font-medium hover:bg-gold/80 transition">
        Get in Touch
      </Link>
    </section>
  );
}
