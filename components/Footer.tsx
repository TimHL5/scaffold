import Link from "next/link";
import { Twitter, Linkedin, Mail } from "lucide-react";
import Container from "./Container";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Connect: [
    { label: "Twitter/X", href: "https://twitter.com", icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "hello@scaffold.build", href: "mailto:hello@scaffold.build", icon: Mail },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Tagline */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <span className="font-bold text-2xl text-steel-500">Scaffold</span>
              </Link>
              <p className="text-sm text-slate-600">
                Structure for what you&apos;re building.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-charcoal mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.Product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-steel-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-charcoal mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.Company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-steel-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h3 className="font-semibold text-charcoal mb-4">Connect</h3>
              <ul className="space-y-3">
                {footerLinks.Connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-slate-600 hover:text-steel-500 transition-colors flex items-center"
                    >
                      {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600 text-center md:text-left">
              © {new Date().getFullYear()} Scaffold. Built for student founders.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-slate-600 hover:text-steel-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-600 hover:text-steel-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
