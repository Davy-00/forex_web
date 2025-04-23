import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Calendar, Filter, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PreviousSignalsPage() {
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
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-blue-600"
            href="/previous-signals"
          >
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Previous Signals</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Review our past trading signals and their performance
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                      Win Rate: 89.78%
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                      Total Signals: 1,245
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                      Avg. Pips: +42
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <div className="relative w-full md:w-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input className="w-full md:w-[250px] pl-8" placeholder="Search currency pairs..." type="search" />
                  </div>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                  <Select defaultValue="all-time">
                    <SelectTrigger className="w-[130px] h-9">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-week">Last Week</SelectItem>
                      <SelectItem value="last-month">Last Month</SelectItem>
                      <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                      <SelectItem value="last-year">Last Year</SelectItem>
                      <SelectItem value="all-time">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All Signals</TabsTrigger>
                  <TabsTrigger value="wins">Wins</TabsTrigger>
                  <TabsTrigger value="losses">Losses</TabsTrigger>
                  <TabsTrigger value="major">Major Pairs</TabsTrigger>
                  <TabsTrigger value="minor">Minor Pairs</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>April 2025</CardTitle>
                      <CardDescription>Most recent signals (20 signals)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">EUR/USD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 1.0865</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+42 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">1.0907</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">1.0835</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 22, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">GBP/JPY</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 186.42</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+65 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">185.77</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">187.00</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 21, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">USD/CAD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 1.3620</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+65 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">1.3685</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">1.3580</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 20, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">3 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">AUD/USD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.6720</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+48 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">0.6768</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">0.6690</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 19, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">USD/JPY</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 154.80</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                LOSS
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">-25 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">154.30</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">155.05</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 18, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">EUR/GBP</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.8425</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+35 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">0.8460</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">0.8400</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 17, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">NZD/USD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.6180</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+38 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">0.6142</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">0.6210</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 16, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">GBP/USD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 1.2850</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+52 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">1.2902</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">1.2810</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 15, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">USD/CHF</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.9120</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+45 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">0.9075</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">0.9150</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 14, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">EUR/JPY</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 168.25</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+72 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">168.97</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">167.80</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 13, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">AUD/JPY</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 102.85</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+58 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">102.27</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">103.20</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 12, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">USD/CAD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 1.3520</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                LOSS
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">-30 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">1.3570</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">1.3490</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 11, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">EUR/USD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 1.0920</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+40 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">1.0880</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">1.0950</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 10, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">USD/JPY</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 155.40</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+62 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">154.78</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">155.80</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 8, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">AUD/USD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.6680</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+45 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">0.6725</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">0.6650</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 7, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">EUR/GBP</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.8480</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+32 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">0.8448</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">0.8505</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 6, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">NZD/USD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.6150</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+42 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">0.6192</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">0.6120</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 5, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400">
                                SELL
                              </Badge>
                              <div>
                                <h3 className="font-semibold">USD/CHF</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.9180</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+50 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">0.9130</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">0.9210</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 4, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">EUR/JPY</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 167.50</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+68 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">168.18</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">167.10</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 3, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">1 day</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="wins" className="space-y-4">
                  {/* Similar content structure as "all" tab but filtered for wins */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Winning Signals</CardTitle>
                      <CardDescription>Signals that hit take profit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                                BUY
                              </Badge>
                              <div>
                                <h3 className="font-semibold">EUR/USD</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 1.0865</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400">
                                WIN
                              </Badge>
                              <p className="text-sm text-gray-500 dark:text-gray-400">+42 pips</p>
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                              <p className="font-medium">1.0907</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                              <p className="font-medium">1.0835</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Date</p>
                              <p className="font-medium">Apr 20, 2025</p>
                            </div>
                            <div>
                              <p className="text-gray-500 dark:text-gray-400">Duration</p>
                              <p className="font-medium">2 days</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/* Other tab contents would follow similar structure */}
              </Tabs>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Load More Signals</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Signal Performance</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our track record speaks for itself
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">Win Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-5xl font-bold text-blue-600">89.78%</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average across all pairs</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">Average Profit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-5xl font-bold text-blue-600">+42</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pips per winning trade</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">Risk-Reward Ratio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-5xl font-bold text-blue-600">1:2.5</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average across all signals</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Trading with Our Signals?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Join thousands of successful traders who rely on our signals every day
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Start Your Free Trial
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-8 flex justify-center">
          <a
            href="https://t.me/+k1KKi2vVlWU5ZWNk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
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
            Join Our Telegram Group for Live Signals
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
        </nav>
      </footer>
    </div>
  )
}
