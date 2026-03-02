import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardPortoProps {
  id: string;
  title: string;
  description: string;
  badge: string;
}

function CardPorto({ id, title, description, badge }: CardPortoProps) {
  return (
    <Card className="relative mx-auto w-full max-w-xl pt-0 mt-4">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="/img/glass.jpg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className="text-lg">
            {badge}
          </Badge>
        </CardAction>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={`${id}`}>
          <Button className="w-full mt-4">View Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardPorto;
