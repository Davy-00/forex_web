import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We're here to help. Reach out to our team with any questions or concerns.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="min-h-[150px]"
                      id="message"
                      placeholder="Please provide as much detail as possible..."
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    You can also reach us using the following contact information.
                  </p>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-red-600" />
                        <div>
                          <h3 className="font-bold">Office Address</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            KN 5 Ave, Kigali Business Center, 4th Floor
                            <br />
                            Kigali, Rwanda
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                        <div>
                          <h3 className="font-bold">Phone</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">+250 788 123 456</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Monday - Friday, 9am - 5pm CAT</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-red-600" />
                        <div>
                          <h3 className="font-bold">Email</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">support@estonfx.com</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">info@estonfx.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
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
                          className="h-6 w-6 text-blue-600"
                        >
                          <path d="M21.5 12a9.5 9.5 0 1 1-9.5-9.5 9.5 9.5 0 0 1 9.5 9.5Z"></path>
                          <path d="m9.2 16 1.4-1.4a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 0 1.4 0l2.9-2.9a1 1 0 0 0 0-1.4L16.3 10a1 1 0 0 1 0-1.4L17.7 7a1 1 0 0 0 0-1.4l-2.9-2.9a1 1 0 0 0-1.4 0L12 4.1a1 1 0 0 1-1.4 0L9.2 2.7a1 1 0 0 0-1.4 0L4.9 5.6a1 1 0 0 0 0 1.4L6.3 8.6a1 1 0 0 1 0 1.4L4.9 11.4a1 1 0 0 0 0 1.4l2.9 2.9a1 1 0 0 0 1.4 0Z"></path>
                        </svg>
                        <div>
                          <h3 className="font-bold">Telegram</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Join our Telegram group for signals and support
                          </p>
                          <a
                            href="https://t.me/+k1KKi2vVlWU5ZWNk"
                            className="mt-1 inline-block text-sm text-blue-600 hover:underline"
                          >
                            t.me/+k1KKi2vVlWU5ZWNk
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Office Hours</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our office is open Monday through Friday from 9am to 5pm CAT.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our support team is available 24/7 for urgent trading signal inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find answers to common questions about our services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:gap-8 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>How do I receive the forex signals?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Signals are delivered via email, SMS, and our mobile app. You can choose your preferred method in
                    your account settings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What is your refund policy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    We offer a 7-day money-back guarantee if you're not satisfied with our services. Please contact our
                    support team to process your refund.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How many signals do I receive per day?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    The number of signals depends on your subscription plan. Basic plans receive up to 5 signals per
                    week, Pro plans receive up to 15 signals per week, and Premium plans receive unlimited signals.
                  </p>
                </CardContent>
              </Card>
              <Link href="/faq" className="mx-auto">
                <Button variant="outline">View All FAQs</Button>
              </Link>
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
