import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, FileText, Play, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationPage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Educational Resources</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn forex trading from the ground up with our comprehensive educational materials
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-8">
              <div className="grid gap-4 md:grid-cols-2 md:gap-16">
                <div>
                  <Image
                    alt="Forex Education"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="400"
                    src="/placeholder.svg?height=400&width=600"
                    width="600"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Forex Trading Fundamentals</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      Whether you're a complete beginner or looking to refine your trading skills, our educational
                      resources will help you navigate the forex market with confidence.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our team of experienced traders has created comprehensive guides, video tutorials, and interactive
                      courses to help you understand forex trading concepts and develop effective strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Video Tutorials</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn forex trading concepts through our easy-to-follow video tutorials
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
              <Card>
                <CardHeader>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      alt="Forex Basics"
                      className="object-cover"
                      height="200"
                      src="/placeholder.svg?height=200&width=300"
                      width="300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full bg-white text-blue-600">
                        <Play className="h-6 w-6" />
                        <span className="sr-only">Play</span>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="mt-2">Forex Basics for Beginners</CardTitle>
                  <CardDescription>Learn the fundamentals of forex trading</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This comprehensive tutorial covers currency pairs, pips, leverage, and how the forex market works.
                    Perfect for complete beginners.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-1">
                    <Video className="h-4 w-4" />
                    <span>Watch Tutorial</span>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      alt="Technical Analysis"
                      className="object-cover"
                      height="200"
                      src="/placeholder.svg?height=200&width=300"
                      width="300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full bg-white text-red-600">
                        <Play className="h-6 w-6" />
                        <span className="sr-only">Play</span>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="mt-2">Technical Analysis Masterclass</CardTitle>
                  <CardDescription>Chart patterns and indicators explained</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn how to analyze price charts, identify patterns, and use technical indicators to make informed
                    trading decisions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-1">
                    <Video className="h-4 w-4" />
                    <span>Watch Tutorial</span>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      alt="Risk Management"
                      className="object-cover"
                      height="200"
                      src="/placeholder.svg?height=200&width=300"
                      width="300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button size="icon" variant="ghost" className="h-12 w-12 rounded-full bg-white text-blue-600">
                        <Play className="h-6 w-6" />
                        <span className="sr-only">Play</span>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="mt-2">Risk Management Strategies</CardTitle>
                  <CardDescription>Protect your capital while trading</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Discover essential risk management techniques including position sizing, stop-loss placement, and
                    portfolio diversification.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-1">
                    <Video className="h-4 w-4" />
                    <span>Watch Tutorial</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Link href="/education/videos">
                <Button variant="outline">View All Video Tutorials</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">E-Books & Guides</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive written resources to deepen your forex knowledge
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-800/30">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>The Complete Forex Trading Guide</CardTitle>
                      <CardDescription>50-page comprehensive guide</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our flagship guide covers everything from basic concepts to advanced trading strategies. Perfect for
                    beginners and intermediate traders looking to build a solid foundation.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FileText className="mr-1 h-4 w-4" />
                    <span>PDF Format • 5.2 MB</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Download E-Book</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-red-100 p-2 dark:bg-red-800/30">
                      <BookOpen className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle>Mastering Forex Signals</CardTitle>
                      <CardDescription>30-page specialized guide</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn how to effectively use forex signals in your trading strategy. This guide explains how to
                    interpret signals, set appropriate stop-loss and take-profit levels, and manage risk.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FileText className="mr-1 h-4 w-4" />
                    <span>PDF Format • 3.8 MB</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Download E-Book</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-800/30">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Technical Analysis Handbook</CardTitle>
                      <CardDescription>45-page detailed guide</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A comprehensive handbook on technical analysis covering chart patterns, indicators, and trading
                    strategies. Includes practical examples and case studies.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FileText className="mr-1 h-4 w-4" />
                    <span>PDF Format • 4.5 MB</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Download E-Book</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-red-100 p-2 dark:bg-red-800/30">
                      <BookOpen className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle>Psychology of Trading</CardTitle>
                      <CardDescription>25-page essential guide</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the psychological aspects of trading and learn how to develop the right mindset for
                    successful forex trading. Includes techniques for managing emotions and maintaining discipline.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <FileText className="mr-1 h-4 w-4" />
                    <span>PDF Format • 2.9 MB</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Download E-Book</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Learning?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Sign up today to access our premium educational resources and forex signals
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
