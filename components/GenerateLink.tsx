import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function GenerateLink() {
  return (
    <div className="flex gap-2">
        <Input placeholder="gere o link da lista de presentes aqui!" className="min-w-[25rem]"/>
        <Button>Gerar link</Button>
    </div>
  );
}