import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function GenerateLink() {
  return (
    <div className="flex flex-1 gap-2 max-w-[35rem]">
        <Input placeholder="gere o link da lista de presentes aqui!" className="sm:w-full"/>
        <Button>Gerar link</Button>
    </div>
  );
}