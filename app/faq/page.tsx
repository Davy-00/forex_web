import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQPage() {
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find answers to common questions about Eston FX and our forex signal services
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:gap-8 mt-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">General Questions</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>What is Eston FX?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Eston FX is a professional forex signal provider based in Rwanda. We provide accurate, timely
                      trading signals to help forex traders make informed trading decisions and maximize their profits.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>How do I get started with Eston FX?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Getting started is easy. Simply sign up for an account, choose your subscription plan, and you'll
                      start receiving signals immediately. We recommend starting with our 7-day free trial to experience
                      our service before committing to a paid plan.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Do I need trading experience to use your signals?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      While some basic understanding of forex trading is helpful, our signals are designed to be
                      easy-to-follow for traders of all experience levels. Each signal includes detailed entry, take
                      profit, and stop loss levels, making it simple to execute trades.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Signals & Trading</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>How many signals do I receive?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      The number of signals depends on your subscription plan:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                      <li>Basic Plan: Up to 5 signals per week</li>
                      <li>Pro Plan: Up to 15 signals per week</li>
                      <li>Premium Plan: Unlimited signals</li>
                    </ul>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      The exact number varies based on market conditions and available opportunities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What currency pairs do you cover?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our Basic plan covers major currency pairs (EUR/USD, GBP/USD, USD/JPY, etc.). Pro and Premium
                      plans include all major, minor, and exotic pairs.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What is your win rate?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our signals consistently achieve a win rate of 75-85%. We maintain transparency by publishing our
                      signal history and performance metrics on our website.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>How do I receive the forex signals?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Signals are delivered via our Telegram group. Once you subscribe, you'll receive an invitation
                      link to join our private Telegram channel where all signals are posted in real-time.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Billing & Support</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>What payment methods do you accept?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">We accept various payment methods including:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                      <li>Credit/Debit Cards</li>
                      <li>MTN Mobile Money</li>
                      <li>Airtel Money</li>
                      <li>Bank Transfer</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What is your refund policy?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      We offer a 7-day money-back guarantee if you're not satisfied with our services. Please contact
                      our support team to process your refund.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>How can I contact customer support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our customer support team is available 24/7. You can reach us through:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                      <li>Email: support@estonfx.com</li>
                      <li>Phone: +250 788 123 456</li>
                      <li>Live chat on our website</li>
                      <li>WhatsApp: +250 788 123 456</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Technical Questions</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>What time frame do your signals work with?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our signals are primarily designed for the 4-hour and daily time frames, making them suitable for
                      both day traders and swing traders. Each signal specifies the recommended time frame.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What trading platforms are compatible with your signals?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our signals can be used with any forex trading platform, including MetaTrader 4, MetaTrader 5,
                      cTrader, and other popular platforms. The signals are provided with clear entry, exit, and stop
                      loss levels that can be manually entered into any platform.
                    </p>
                  </CardContent>
                </Card>
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
