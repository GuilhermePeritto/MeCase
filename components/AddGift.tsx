/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Plus } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type AddGiftProps = {
    setNewGift: Function,
    newGift: any,
    addGift: () => void
}

export default function AddGift({setNewGift, newGift, addGift} : AddGiftProps) {

    const { t } = useLanguage();

    return (
        <Dialog>
        <DialogTrigger asChild>
          <Card id="addGift" className="flex justify-center cursor-pointer hover:border-gray-300 hover:opacity-100 transition-shadow">
            <CardContent className="flex-col max-w-full max-h-full items-center justify-center">
              <Plus className="flex w-full h-full opacity-20 pt-6" />
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t('addNewGift')}</DialogTitle>
            <DialogDescription>
              {t('addNewGiftDescription')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {t('name')}
              </Label>
              <Input
                id="name"
                value={newGift.name}
                onChange={(e) => setNewGift({ ...newGift, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                {t('price')}
              </Label>
              <Input
                id="price"
                type="number"
                value={newGift.price}
                onChange={(e) => setNewGift({ ...newGift, price: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                {t('description')}
              </Label>
              <Input
                id="description"
                value={newGift.description}
                onChange={(e) => setNewGift({ ...newGift, description: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={addGift}>{t('addGift')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
}