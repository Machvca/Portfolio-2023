// import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

// export function CarouselDefault() {
//   return (
//     <Carousel className="rounded-xl">
//       <Image
//         src="/public/images/joe.JPG"
//         alt="image 1"
//         className="h-full w-full object-cover"
//         width={500}
//         height={500}
//       />
//       <Image
//         src="/public/images/joe.JPG"
//         alt="image 2"
//         className="h-full w-full object-cover"
//         width={500}
//         height={500}
//       />
//       <Image
//         src="/public/images/joe.JPG"
//         alt="image 3"
//         className="h-full w-full object-cover"
//         width={500}
//         height={500}
//       />
//     </Carousel>
//   );
// }

import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <Image
        src="/images/joe.JPG"
        alt="image 1"
        className="h-full w-full object-cover"
        width={500}
        height={500}
      />
      <Image
        src="/images/joe.JPG"
        alt="image 2"
        className="h-full w-full object-cover"
        width={500}
        height={500}
      />
      <Image
        src="/images/joe.JPG"
        alt="image 3"
        className="h-full w-full object-cover"
        width={500}
        height={500}
      />
    </Carousel>
  );
}