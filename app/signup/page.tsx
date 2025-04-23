import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TelegramCTA } from "@/components/telegram-cta"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 dark:bg-gray-900/50 p-4">
      <Link
        href="/"
        className="absolute left-4 top-4 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>
      <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
        <Card className="w-full">
          <CardHeader className="items-center">
            <div className="mb-4">
              <Image src="/images/eston_fx.png" alt="Eston FX Logo" width={150} height={50} className="h-12 w-auto" />
            </div>
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>Sign up to start receiving forex signals from Eston FX</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Select Plan</Label>
              <Select defaultValue="pro">
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic - 32,000 RWF/month</SelectItem>
                  <SelectItem value="pro">Pro - 87,000 RWF/month</SelectItem>
                  <SelectItem value="premium">Premium - 164,000 RWF/month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Account</Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="hidden md:flex md:flex-col md:justify-center">
          <TelegramCTA />
        </div>
      </div>
    </div>
  )
}
