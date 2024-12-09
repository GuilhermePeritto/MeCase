import { useLanguage } from "../providers/LanguageProvider";

export default function Footer() {

  const { t } = useLanguage();
  
  return (
    <footer className="w-screen container ">
      <div className="w-screen p-3 border text-center text-gray-600">
        {t('copyRight')}
      </div>
    </footer>
  )
}

