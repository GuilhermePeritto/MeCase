import { useLanguage } from "../providers/LanguageProvider";

export default function Footer() {

  const { t } = useLanguage();
  
  return (
    <footer className="space-y-8 mx-auto container">
      <div className="container mx-auto p-3 border text-center text-gray-600">
        {t('copyRight')}
      </div>
    </footer>
  )
}

