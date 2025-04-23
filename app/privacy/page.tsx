import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>
                <p className="text-gray-500 dark:text-gray-400">Last updated: April 23, 2025</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">1. Introduction</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  At Eston FX, we respect your privacy and are committed to protecting your personal data. This privacy
                  policy will inform you about how we look after your personal data when you visit our website and tell
                  you about your privacy rights and how the law protects you.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">2. The Data We Collect About You</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Personal data, or personal information, means any information about an individual from which that
                  person can be identified. We may collect, use, store, and transfer different kinds of personal data
                  about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>
                    <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
                  </li>
                  <li>
                    <strong>Contact Data</strong> includes email address, telephone numbers, and physical address.
                  </li>
                  <li>
                    <strong>Financial Data</strong> includes payment card details and transaction history.
                  </li>
                  <li>
                    <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version,
                    time zone setting and location, browser plug-in types and versions, operating system and platform,
                    and other technology on the devices you use to access this website.
                  </li>
                  <li>
                    <strong>Profile Data</strong> includes your username and password, purchases or orders made by you,
                    your interests, preferences, feedback, and survey responses.
                  </li>
                  <li>
                    <strong>Usage Data</strong> includes information about how you use our website, products, and
                    services.
                  </li>
                  <li>
                    <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing
                    from us and our third parties and your communication preferences.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">3. How We Use Your Personal Data</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your
                  personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>
                    Where we need to perform the contract we are about to enter into or have entered into with you.
                  </li>
                  <li>
                    Where it is necessary for our legitimate interests (or those of a third party) and your interests
                    and fundamental rights do not override those interests.
                  </li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
                <p className="text-gray-500 dark:text-gray-400">
                  Generally, we do not rely on consent as a legal basis for processing your personal data although we
                  will get your consent before sending third party direct marketing communications to you via email or
                  text message. You have the right to withdraw consent to marketing at any time by contacting us.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">4. Data Security</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We have put in place appropriate security measures to prevent your personal data from being
                  accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we
                  limit access to your personal data to those employees, agents, contractors, and other third parties
                  who have a business need to know. They will only process your personal data on our instructions, and
                  they are subject to a duty of confidentiality.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We have put in place procedures to deal with any suspected personal data breach and will notify you
                  and any applicable regulator of a breach where we are legally required to do so.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">5. Data Retention</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
                  collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or
                  reporting requirements. We may retain your personal data for a longer period in the event of a
                  complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship
                  with you.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">6. Your Legal Rights</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal
                  data, including the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
                <p className="text-gray-500 dark:text-gray-400">
                  If you wish to exercise any of the rights set out above, please contact us.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">7. Cookies</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or
                  access cookies. If you disable or refuse cookies, please note that some parts of this website may
                  become inaccessible or not function properly.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">8. Changes to the Privacy Policy</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the
                  new privacy policy on this page and updating the "Last updated" date at the top of this privacy
                  policy.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You are advised to review this privacy policy periodically for any changes. Changes to this privacy
                  policy are effective when they are posted on this page.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">9. Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Email: privacy@estonfx.com
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
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-blue-600" href="/privacy">
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
