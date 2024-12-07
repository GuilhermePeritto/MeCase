/* eslint-disable @typescript-eslint/no-explicit-any */
import { QRCodeCanvas } from "qrcode.react";
import { useLanguage } from "../providers/LanguageProvider";

export default function GiftModal({ gift, onClose } : any) {

  const { t } = useLanguage()

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{gift.name}</h2>
        <p className="text-gray-600 mb-4">{t('monetaryFigure')}{gift.price}</p>
        <p className="text-gray-700 mb-6">{gift.description}</p>
        <div className="flex justify-center mb-6">
          <QRCodeCanvas value={`https://example.com/purchase/${gift.id}`} />
        </div>
        <button
          className="w-full text-white py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

