/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, User } from 'lucide-react'
import { useState } from 'react'
import { toast } from "sonner"
import { useLanguage } from '../providers/LanguageProvider'
import AddGift from "./AddGift"
import { GenerateLink } from "./GenerateLink"
import Header from "./Header"
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "./pageHeader"

type Gift = {
  id: number;
  name: string;
  price: number;
  description: string;
  purchased: boolean;
  purchasedBy?: string;
  message?: string;
}

export default function CoupleInterface() {
  const { t } = useLanguage()
  const [gifts, setGifts] = useState<Gift[]>([
    { id: 1, name: "Toaster", price: 50, description: "A sleek toaster for your kitchen", purchased: false },
    { id: 2, name: "Coffee Maker", price: 100, description: "Start your mornings right", purchased: false },
    { id: 3, name: "Blender", price: 75, description: "Perfect for smoothies and more", purchased: true, purchasedBy: "John Doe", message: "Enjoy your new blender!" },
    { id: 4, name: "Dinnerware Set", price: 200, description: "Elegant dining for your new home", purchased: false },
    { id: 5, name: "Bedding Set", price: 150, description: "Luxurious comfort for your bedroom", purchased: true, purchasedBy: "Jane Smith", message: "Sweet dreams in your new home!" },
  ])
  const [newGift, setNewGift] = useState({ name: '', price: '', description: '' })

  const addGift = () => {
    if (newGift.name && newGift.price) {
      setGifts([...gifts, {
        id: gifts.length + 1,
        name: newGift.name,
        price: parseFloat(newGift.price),
        description: newGift.description,
        purchased: false
      }])
      setNewGift({ name: '', price: '', description: '' })
      toast.success(t('giftAdded'))
    }
  }

  const purchasedGifts = gifts.filter(gift => gift.purchased)
  const unpurchasedGifts = gifts.filter(gift => !gift.purchased)

  const totalValue = gifts.reduce((sum, gift) => sum + gift.price, 0)
  const purchasedValue = purchasedGifts.reduce((sum, gift) => sum + gift.price, 0)
  const remainingValue = totalValue - purchasedValue

  return (
    <div className="border w-screen">
      <Header />
      <div className="space-y-8 px-8">
        <PageHeader>
          <PageHeaderHeading>{t('coupleGiftRegistry')}</PageHeaderHeading>
          <PageHeaderDescription>
            {t('weddingGiftRegistry')}
          </PageHeaderDescription>
        </PageHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex text-lg justify-center">{t('totalValue')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold flex items-center justify-center">
                {t('monetaryFigure')}
                {totalValue.toFixed(2)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex text-lg justify-center">{t('purchasedValue')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold flex items-center justify-center">
                {t('monetaryFigure')}
                {purchasedValue.toFixed(2)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex text-lg justify-center">{t('remainingValue')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold flex items-center justify-center">
                {t('monetaryFigure')}
                {remainingValue.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="all" className="w-full">
            <div className="w-full h-full md:flex-row smm:flex-col flex justify-between">
              <TabsList className="mb-4">
                <TabsTrigger value="all">{t('allGifts')}</TabsTrigger>
                <TabsTrigger value="purchased">{t('purchasedGifts')}</TabsTrigger>
                <TabsTrigger value="unpurchased">{t('unpurchasedGifts')}</TabsTrigger>
              </TabsList>
              <GenerateLink />
            </div>
            <TabsContent value="all">
              <GiftGrid gifts={gifts} addGift={addGift} setNewGift={setNewGift} newGift={newGift} />
            </TabsContent>
            <TabsContent value="purchased">
              <GiftGrid gifts={purchasedGifts} addGift={addGift} setNewGift={setNewGift} newGift={newGift} />
            </TabsContent>
            <TabsContent value="unpurchased">
              <GiftGrid gifts={unpurchasedGifts} addGift={addGift} setNewGift={setNewGift} newGift={newGift} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

type GiftGridProps = {
  gifts: Gift[];
  addGift: () => void;
  setNewGift: (newGift: any) => void;
  newGift: any;
}

function GiftGrid({ gifts, addGift, setNewGift, newGift }: GiftGridProps) {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div className="grid gap-6 md:grid-cols-2 pb-8 lg:grid-cols-3">
        <AddGift addGift={addGift} setNewGift={setNewGift} newGift={newGift} />
        {gifts.map((gift) => (
          <Card key={gift.id}>
            <CardHeader>
              <CardTitle className="text-xl">{gift.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2 flex items-center">
                {t('monetaryFigure')}
                {gift.price.toFixed(2)}
              </p>
              <p className="text-gray-500 text-sm mb-2">{gift.description}</p>
              <p className="text-sm font-medium text-gray-500 mb-2">
                {gift.purchased ? t('purchased') : t('notPurchased')}
              </p>
              {gift.purchased && (
                <>
                  <p className="text-sm font-medium flex items-center mb-1">
                    <User className="h-4 w-4 mr-1" />
                    {t('purchasedBy')}: {gift.purchasedBy}
                  </p>
                  {gift.message && (
                    <p className="text-sm flex items-start">
                      <MessageSquare className="h-4 w-4 mr-1 mt-1" />
                      {t('message')}: {gift.message}
                    </p>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}