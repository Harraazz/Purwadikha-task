import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface card {
  gambar: string;
  header: string;
  desc: string;
  badge: string;
}

import { Badge } from "@/components/ui/badge";
function CardPerson({ gambar, header, desc, badge }: card) {
  return (
    <div>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute aspect-video" />
        <img
          src={gambar}
          alt="Event cover"
          className="relative z-20 aspect-square rounded-t-2xl w-full object-cover "
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">{badge}</Badge>
          </CardAction>
          <CardTitle>{header}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default CardPerson;
