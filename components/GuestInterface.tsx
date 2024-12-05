'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/providers/LanguageProvider"
import { useSettings } from "@/providers/SettingsProvider"
import { Gift } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'

type Gift = {
  id: number;
  name: string;
  price: number;
  description: string;
}

export default function GuestInterface() {
  const { t } = useLanguage()
  const { qrCodeHash } = useSettings()
  const [gifts, setGifts] = useState<Gift[]>([
    { id: 1, name: "Toaster", price: 50, description: "A sleek toaster for your kitchen" },
    { id: 2, name: "Coffee Maker", price: 100, description: "Start your mornings right" },
    { id: 3, name: "Blender", price: 75, description: "Perfect for smoothies and more" },
    { id: 4, name: "Dinnerware Set", price: 200, description: "Elegant dining for your new home" },
    { id: 5, name: "Bedding Set", price: 150, description: "Luxurious comfort for your bedroom" },
  ])
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null)
  const [guestName, setGuestName] = useState('')
  const [guestMessage, setGuestMessage] = useState('')

  const handlePurchase = () => {
    // Here you would typically send this data to your backend
    console.log('Gift purchased:', selectedGift)
    console.log('Purchased by:', guestName)
    console.log('Message:', guestMessage)
    // Reset the form
    setSelectedGift(null)
    setGuestName('')
    setGuestMessage('')
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">{t('weddingGiftRegistry')}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gifts.map((gift) => (
          <Card key={gift.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{gift.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2 flex items-center">
                {t('monetaryFigure')}
                {gift.price.toFixed(2)}
              </p>
              <p className="text-gray-500 text-sm mb-4">{gift.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full" onClick={() => setSelectedGift(gift)}>
                    <Gift className="mr-2 h-5 w-5" /> {t('viewGift')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{gift.name}</DialogTitle>
                    <DialogDescription>
                      {gift.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <p className="text-3xl font-bold flex items-center">
                      {t('monetaryFigure')}
                      {gift.price.toFixed(2)}
                    </p>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        {t('yourName')}
                      </Label>
                      <Input
                        id="name"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="message" className="text-right">
                        {t('yourMessage')}
                      </Label>
                      <Textarea
                        id="message"
                        value={guestMessage}
                        onChange={(e) => setGuestMessage(e.target.value)}
                        className="col-span-3"
                      />
                    </div>
                    <div className="flex justify-center">
                      <QRCodeSVG value={`${qrCodeHash}/purchase/${gift.id}`} size={200} />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button className="w-full" onClick={handlePurchase}>{t('purchase')}</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

