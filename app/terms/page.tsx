import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/images/eston_fx.png" alt="Eston FX Logo" width={120} height={40} className="h-8 w-auto" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/previous-signals">
            Previous Signals
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Terms of Service</h1>
                <p className="text-gray-500 dark:text-gray-400">Last updated: April 23, 2025</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">1. Introduction</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Welcome to Eston FX. These Terms of Service govern your use of our website, products, and services.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  By accessing or using Eston FX, you agree to be bound by these Terms. If you disagree with any part of
                  the terms, you may not access the service.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">2. Description of Service</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Eston FX provides forex trading signals and educational resources to subscribers. Our signals are
                  based on technical and fundamental analysis and are provided for informational purposes only.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We do not guarantee the accuracy, completeness, or timeliness of our signals. Trading forex involves
                  risk, and past performance is not indicative of future results.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">3. User Accounts</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  When you create an account with us, you must provide accurate, complete, and up-to-date information.
                  You are responsible for safeguarding the password and for all activities that occur under your
                  account.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You agree to notify us immediately of any unauthorized use of your account or any other breach of
                  security. We cannot and will not be liable for any loss or damage arising from your failure to comply
                  with this section.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">4. Subscription and Payments</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Eston FX offers various subscription plans. By subscribing to our service, you agree to pay the
                  applicable fees as described on our website. Subscription fees are billed in advance on a monthly or
                  annual basis.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You may cancel your subscription at any time, but we do not provide refunds for the current billing
                  cycle. We reserve the right to change our subscription fees upon reasonable notice.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">5. Risk Disclosure</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Forex trading involves substantial risk of loss and is not suitable for all investors. The high degree
                  of leverage can work against you as well as for you. Before deciding to invest in forex, you should
                  carefully consider your investment objectives, level of experience, and risk appetite.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  The possibility exists that you could sustain a loss of some or all of your initial investment and
                  therefore you should not invest money that you cannot afford to lose. You should be aware of all the
                  risks associated with forex trading and seek advice from an independent financial advisor if you have
                  any doubts.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">6. Intellectual Property</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  The content, organization, graphics, design, compilation, and other matters related to the Eston FX
                  website and services are protected under applicable copyrights, trademarks, and other proprietary
                  rights. Copying, redistributing, use, or publication of any such matters or any part of the service is
                  prohibited without our express permission.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">7. Limitation of Liability</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  In no event shall Eston FX, its officers, directors, employees, or agents, be liable for any indirect,
                  incidental, special, consequential, or punitive damages, including without limitation, loss of
                  profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or
                  inability to access or use the service.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">8. Governing Law</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  These Terms shall be governed and construed in accordance with the laws of Rwanda, without regard to
                  its conflict of law provisions.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                  rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the
                  remaining provisions of these Terms will remain in effect.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">9. Changes to Terms</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                  effect.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  By continuing to access or use our service after those revisions become effective, you agree to be
                  bound by the revised terms. If you do not agree to the new terms, please stop using the service.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">10. Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Email: legal@estonfx.com
                  <br />
                  Phone: +250 788 123 456
                  <br />
                  Address: KN 5 Ave, Kigali Business Center, 4th Floor, Kigali, Rwanda
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
          <Image src="/images/eston_fx.png" alt="Eston FX Logo" width={80} height={30} className="h-6 w-auto" />
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Eston FX. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-blue-600" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
