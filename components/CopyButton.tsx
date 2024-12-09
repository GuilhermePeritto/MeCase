import { Check, Clipboard } from "lucide-react";
import { Button } from "./ui/button";

type CopyButtonProps = {
    onClickCopy: () => void;
    isCopied: boolean;
}

export default function CopyButton({ onClickCopy, isCopied }: CopyButtonProps) {
    return (
        <div className="flex flex-1 gap-2 max-w-[35rem]">
            <Button
                variant="ghost"
                className="hidden rounded-md border bg-transparent shadow-none md:flex lg:w-auto"
                onClick={onClickCopy}
            >
                {isCopied ? <Check /> : <Clipboard />}
            </Button>
        </div>
    );
}