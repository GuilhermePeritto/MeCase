import { useLanguage } from "@/providers/LanguageProvider";
import { Link } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import CopyButton from "./CopyButton";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function GenerateLink() {

  const [link, setLink] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const { t } = useLanguage()

  const generateLink = () => {
    setIsGenerating(true)
    setLink('mecase.vercel.app/guest')
    navigator.clipboard.writeText(link)
    toast.success('Link gerado com sucesso!')
    setTimeout(() => setIsGenerating(false), 1500)
  }

  const copyLink = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(link)
    toast.success('Link copiado para a área de transferência!')
    setTimeout(() => setIsCopied(false), 1500)
  }

  return (
    <div className="flex flex-1 gap-2 max-w-[35rem]">
      <Input placeholder="gere o link da lista de presentes aqui!" className="sm:w-full" />
      <CopyButton onClickCopy={copyLink} isCopied={isCopied} />
      <Button onClick={generateLink} className="min-w-24">
        {isGenerating
          ? <Icons.spinner className="h-4 w-4 animate-spin" />
          : <div className="flex items-center gap-1 smm:p-8">
            <Link/>
            <Label>{t("generateLink")}</Label>
          </div>
        }
      </Button>
    </div>
  );
}