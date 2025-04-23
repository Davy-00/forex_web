import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TelegramCTA() {
  return (
    <Card className="border-blue-600">
      <CardHeader className="pb-2">
        <CardTitle>Join Our Telegram Group</CardTitle>
        <CardDescription>Get instant forex signals and connect with other traders</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          All our signals are delivered through our exclusive Telegram group. Join now to start receiving professional
          forex signals.
        </p>
        <Link href="https://t.me/+k1KKi2vVlWU5ZWNk" target="_blank" rel="noopener noreferrer">
          <Button className="w-full gap-1 bg-blue-600 hover:bg-blue-700">
            Join Telegram Group
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
