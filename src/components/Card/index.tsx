import {Card, Image} from "@nextui-org/react";

type Props = {
    name: string,
    url: string
}
export default function CardItem({name, url} : Props) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none flex justify-center items-center w-max:200 p-2"
    >
        <p>{name}</p>
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={url}
        width={200}
      />
    </Card>
  );
}
