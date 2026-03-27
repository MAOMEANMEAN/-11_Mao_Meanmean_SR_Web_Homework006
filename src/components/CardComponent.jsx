import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@base-ui/react";
import { Badge } from "lucide-react";
import Image from "next/image";

export default function CardComponent({products}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      {/* <div>
        <p>NEW</p>
        <p className="bg-white rounded-xl w-10 h-5">4.3</p>
      </div> */}
      <Image
        width={600}
        height={500}
        src="https://files.vplak.com/500-images/jbl/TUNE-520C/blue/image-1.jpg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <div>
            <p className="font-semibold text-blue-700 text-xs">FLAGSHIP SERIES</p>
          </div>
        <CardAction>
          {/* <Badge variant="secondary">Featured</Badge> */}
          
          <div>
            <h1 className="font-semibold text-lg">${products.price}</h1>
          </div>
        </CardAction>
        <CardTitle>
          <div className="font-semibold text-lg">
            {products?.name}
          </div>
          </CardTitle>
        <CardDescription>
          <div className="text-md">
            {products?.description.length > 60
             ? products?.description.slice(0, 60) + "..."
             : products?.description}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full h-10 bg-blue-950 rounded-xl text-white font-semibold hover:bg-blue-600">View Event</Button>
      </CardFooter>
    </Card>
  );
}
