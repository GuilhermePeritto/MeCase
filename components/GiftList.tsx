/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLanguage } from "../providers/LanguageProvider"

export default function GiftList({ gifts, isCouple, onGiftClick } : any) {

  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gifts.map((gift: any) => {
        return (
          <div
            key={gift.id}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => !isCouple && onGiftClick(gift)}
          >
            <h3 className="text-lg font-semibold">{gift.name}</h3>
            <p className="text-gray-600">{t('monetaryFigure')}{gift.price}</p>
            {isCouple && (
              <p className="text-sm text-gray-500 mt-2">
                {gift.purchased ? 'Purchased' : 'Not purchased'}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}