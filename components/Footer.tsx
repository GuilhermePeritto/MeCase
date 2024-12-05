import { useLanguage } from "../providers/LanguageProvider";

export default function Footer() {

  const { t } = useLanguage();
  
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4 text-center text-gray-600">
        {t('copyRight')}
      </div>
    </footer>
  )
}

