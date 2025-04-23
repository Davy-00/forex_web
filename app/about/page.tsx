import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-blue-600" href="/about">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Eston FX</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Your trusted partner in forex trading signals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-8">
              <div className="grid gap-4 md:grid-cols-2 md:gap-16">
                <div>
                  <Image
                    alt="Eston FX Team"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="400"
                    src="/placeholder.svg?height=400&width=600"
                    width="600"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Founded in 2020, Eston FX was born out of a passion for forex trading and a desire to help traders
                      in Rwanda and across Africa achieve consistent results in the forex market.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our team of experienced traders and analysts work tirelessly to provide accurate, timely signals
                      that help our clients make informed trading decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  At Eston FX, our mission is to democratize access to professional forex trading signals and education.
                  We believe that with the right guidance, anyone can become a successful forex trader.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We are committed to providing our clients with the highest quality signals, backed by thorough market
                  analysis and a proven track record of success.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
                  <div className="text-4xl font-bold text-blue-600">95%</div>
                  <h3 className="text-xl font-bold">Accuracy Rate</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Our signals consistently achieve a high accuracy rate
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
                  <div className="text-4xl font-bold text-red-600">5,000+</div>
                  <h3 className="text-xl font-bold">Active Traders</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Traders across Africa trust our signals
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
                  <div className="text-4xl font-bold text-blue-600">24/7</div>
                  <h3 className="text-xl font-bold">Support</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">Our team is always available to help</p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team consists of experienced forex traders, technical analysts, and financial experts with years
                  of experience in the forex market. Each member brings unique insights and expertise to our signal
                  generation process.
                </p>
                <div className="grid gap-6 md:grid-cols-3 mt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="overflow-hidden rounded-full">
                      <Image
                        alt="Team Member"
                        className="aspect-square object-cover object-center"
                        height="150"
                        src="/placeholder.svg?height=150&width=150"
                        width="150"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Eston Kagame</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Founder & Lead Analyst</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="overflow-hidden rounded-full">
                      <Image
                        alt="Team Member"
                        className="aspect-square object-cover object-center"
                        height="150"
                        src="/placeholder.svg?height=150&width=150"
                        width="150"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Marie Uwase</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Senior Market Analyst</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="overflow-hidden rounded-full">
                      <Image
                        alt="Team Member"
                        className="aspect-square object-cover object-center"
                        height="150"
                        src="/placeholder.svg?height=150&width=150"
                        width="150"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Jean-Paul Habimana</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Technical Analyst</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Communication</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  At Eston FX, we believe in direct and instant communication. That's why we deliver all our signals
                  through our dedicated Telegram group, ensuring you receive timely information that can make the
                  difference between profit and loss.
                </p>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://t.me/+k1KKi2vVlWU5ZWNk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21.5 12a9.5 9.5 0 1 1-9.5-9.5 9.5 9.5 0 0 1 9.5 9.5Z"></path>
                      <path d="m9.2 16 1.4-1.4a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 0 1.4 0l2.9-2.9a1 1 0 0 0 0-1.4L16.3 10a1 1 0 0 1 0-1.4L17.7 7a1 1 0 0 0 0-1.4l-2.9-2.9a1 1 0 0 0-1.4 0L12 4.1a1 1 0 0 1-1.4 0L9.2 2.7a1 1 0 0 0-1.4 0L4.9 5.6a1 1 0 0 0 0 1.4L6.3 8.6a1 1 0 0 1 0 1.4L4.9 11.4a1 1 0 0 0 0 1.4l2.9 2.9a1 1 0 0 0 1.4 0Z"></path>
                    </svg>
                    Join Our Telegram Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Trading with Confidence?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Join thousands of successful traders who rely on our signals every day
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
