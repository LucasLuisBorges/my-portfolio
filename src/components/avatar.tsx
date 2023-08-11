import { Avatar as AvatarComp, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  name: string;
  src: string;
}

export function Avatar({ name, src }: IProps) {
  return (
    <AvatarComp>
      <AvatarImage src={src} />
      <AvatarFallback>{name}</AvatarFallback>
    </AvatarComp>

  )
}