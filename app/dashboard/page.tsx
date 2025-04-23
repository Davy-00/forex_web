import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Filter,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/images/eston_fx.png" alt="Eston FX Logo" width={120} height={40} className="h-8 w-auto" />
        </Link>
        <nav className="hidden flex-1 md:flex">
          <ul className="flex flex-1 items-center gap-4 text-sm font-medium">
            <li>
              <Link href="/dashboard" className="flex items-center gap-1 text-blue-600">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/signals"
                className="flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <BarChart3 className="h-4 w-4" />
                Signals
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/calendar"
                className="flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Calendar className="h-4 w-4" />
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4 md:flex-initial">
          <Button variant="outline" size="icon" className="relative h-8 w-8 rounded-full">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1 px-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline-block">John Doe</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Signals</CardTitle>
              <BarChart3 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+2 from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+2.5% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Signals This Month</CardTitle>
              <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">12 more than last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Subscription</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Pro</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Renews in 18 days</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4">
          <Tabs defaultValue="active">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="active">Active Signals</TabsTrigger>
                <TabsTrigger value="history">Signal History</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filter</span>
                </Button>
                <Input placeholder="Search signals..." className="h-8 w-[150px] lg:w-[250px]" />
              </div>
            </div>
            <TabsContent value="active" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Forex Signals</CardTitle>
                  <CardDescription>Your currently active trading signals</CardDescription>
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
                          <p className="font-medium text-blue-600">+28 pips</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                          <p className="font-medium">1.0895</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                          <p className="font-medium">1.0835</p>
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
                          <p className="font-medium text-red-600">-12 pips</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">5 hours ago</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                          <p className="font-medium">185.80</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                          <p className="font-medium">187.00</p>
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
                          <p className="font-medium text-blue-600">+45 pips</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                          <p className="font-medium">1.3670</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                          <p className="font-medium">1.3580</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Signals
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Signal History</CardTitle>
                  <CardDescription>Your past trading signals and their outcomes</CardDescription>
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
                            <h3 className="font-semibold">AUD/USD</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Entry: 0.6580</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/30 dark:text-blue-400">
                            WIN
                          </Badge>
                          <p className="text-sm text-gray-500 dark:text-gray-400">+62 pips</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Take Profit</p>
                          <p className="font-medium">0.6642</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Stop Loss</p>
                          <p className="font-medium">0.6530</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Date</p>
                          <p className="font-medium">Apr 18, 2025</p>
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
                      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
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
                          <p className="font-medium">Apr 15, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Load More
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
