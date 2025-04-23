import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TelegramCTA } from "@/components/telegram-cta"

export default function LoginPage() {
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
            <CardTitle className="text-2xl">Login to Eston FX</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Login</Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
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
