import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Bell, CheckCircle, Clock, Globe, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/images/eston_fx.png" alt="Eston FX Logo" width={120} height={40} className="h-8 w-auto" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/previous-signals">
            Previous Signals
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-50 to-white dark:from-red-950/20 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Professional Forex Signals for Traders
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Get accurate, timely forex signals delivered directly to you. Maximize your trading potential with
                    our expert analysis.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Start Trading Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a
                    href="https://t.me/+k1KKi2vVlWU5ZWNk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Image
                      src="/images/telegram-icon.png"
                      alt="Telegram Icon"
                      width={20}
                      height={20}
                      className="mr-2 h-5 w-5"
                    />
                    Join Telegram
                  </a>
                  <Link href="#pricing">
                    <Button size="lg" variant="outline">
                      View Plans
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-full opacity-20 blur-3xl" />
                  <div className="relative h-full w-full rounded-xl border overflow-hidden">
                    <img
                      src="/placeholder.svg?height=500&width=500"
                      alt="Forex trading chart"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800/30">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our Forex Signals</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our signals are backed by expert analysis and years of market experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-800/30">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Real-Time Signals</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Receive signals in real-time as market opportunities arise
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-800/30">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Telegram Notifications</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Get alerts instantly via our Telegram group
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-800/30">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Risk Management</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Each signal includes stop-loss and take-profit levels
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-red-100 p-2 dark:bg-red-800/30">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Detailed Analysis</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Get the reasoning behind each signal with technical analysis
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-red-100 p-2 dark:bg-red-800/30">
                  <Globe className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Multiple Currency Pairs</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Signals for major, minor, and exotic currency pairs
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-red-100 p-2 dark:bg-red-800/30">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Proven Track Record</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Consistently high win rate verified by third parties
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800/30">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Select the plan that best fits your trading needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For casual traders</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    32,000<span className="text-sm font-normal text-gray-500"> RWF/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>5 signals per week</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Telegram notifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Major currency pairs only</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Basic market analysis</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=basic" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-red-600">
                <CardHeader>
                  <div className="px-4 py-1 text-xs font-bold bg-red-100 text-red-800 rounded-full w-fit mx-auto mb-2 dark:bg-red-800/30 dark:text-red-400">
                    MOST POPULAR
                  </div>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For serious traders</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    87,000<span className="text-sm font-normal text-gray-500"> RWF/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-600" />
                      <span>15 signals per week</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-600" />
                      <span>Priority Telegram notifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-600" />
                      <span>All currency pairs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-600" />
                      <span>Detailed market analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-red-600" />
                      <span>Weekly market outlook</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=pro" className="w-full">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For professional traders</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    164,000<span className="text-sm font-normal text-gray-500"> RWF/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Unlimited signals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Instant Telegram notifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>All currency pairs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Expert market analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>1-on-1 strategy sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Private Telegram group</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=premium" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800/30">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Traders Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from traders who have transformed their trading with our signals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <img
                      alt="User"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Mutoni Claudine</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Pro Trader, 2 years</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 dark:text-gray-400">
                      "Amasinyari yabo ni ukuri kandi afasha cyane. Kuva natangira gukoresha Eston FX, inyungu zanjye
                      ziyongereye ku kigero cya 32%."
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
                      (Their signals are accurate and very helpful. Since I started using Eston FX, my profits have
                      increased by 32%.)
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <img
                      alt="User"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Nshimiyimana Jean-Pierre</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Premium Trader, 1 year</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 dark:text-gray-400">
                      "Ibisobanuro birambuye biza n'amasinyari byamfashije kumva isoko neza. Amasomo ya one-on-one ni
                      ingirakamaro cyane."
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
                      (The detailed analysis that comes with each signal has helped me understand the market better. The
                      one-on-one sessions are invaluable.)
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <img
                      alt="User"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Uwimana Eric</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Basic Trader, 6 months</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-500 dark:text-gray-400">
                      "Nubwo nkoresha gahunda y'ibanze, mbona agaciro kanini. Amasinyari aza ku gihe kandi inama za
                      stop-loss zanyorohereje inshuro nyinshi."
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
                      (Even with the Basic plan, I'm getting great value. The signals are timely and the stop-loss
                      recommendations have saved me many times.)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800/30">
                  Join Our Community
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Signals on Telegram</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  All our forex signals are delivered through our exclusive Telegram group
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <div className="rounded-lg border bg-white p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Image
                        src="/images/telegram-logo.png"
                        alt="Telegram Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8 text-blue-600"
                      />
                      <h3 className="text-xl font-bold">Eston FX Signals</h3>
                    </div>
                    <ul className="space-y-3 text-gray-500">
                      <li className="flex items-start gap-2">
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
                          className="h-5 w-5 text-green-500 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Instant signal notifications</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                          className="h-5 w-5 text-green-500 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Detailed entry, stop-loss, and take-profit levels</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                          className="h-5 w-5 text-green-500 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Real-time updates and market analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                          className="h-5 w-5 text-green-500 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Community of successful traders</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="https://t.me/+k1KKi2vVlWU5ZWNk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white shadow transition-colors hover:bg-blue-700"
                      >
                        <Image
                          src="/images/telegram-icon.png"
                          alt="Telegram Icon"
                          width={20}
                          height={20}
                          className="mr-2 h-5 w-5"
                        />
                        Join Telegram Group
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-100 p-4 rounded-lg border">
                    <Image
                      src="/images/telegram-screenshot.png"
                      alt="Telegram Signal Preview"
                      width={300}
                      height={400}
                      className="w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
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
                  Ready to Transform Your Trading?
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
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://t.me/+k1KKi2vVlWU5ZWNk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:bg-blue-700 hover:scale-110"
            aria-label="Join our Telegram group"
          >
            <Image src="/images/telegram-icon.png" alt="Telegram Icon" width={24} height={24} className="h-6 w-6" />
          </a>
        </div>
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
          <Link className="text-xs hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/education">
            Education
          </Link>
        </nav>
      </footer>
    </div>
  )
}
