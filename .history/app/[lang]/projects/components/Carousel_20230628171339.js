"use client";
import Image from "next/image";
export const Carousel = () => {
  return (
    <>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-max">
        <div className="carousel-scroll-wrapper flex">
          <div className="carousel-item">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-222063?alt=media&token=9204efff-9bc4-48f3-8d01-b0eb4ac69dd7"
              className="rounded-box h-max"
              width={256}
              height={256}
              alt="Carousel Item Wesiu.dev Projects Page"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-225345?alt=media&token=35525abd-dada-4aaa-a2ea-c8f8b823c054"
              className="rounded-box h-max"
              width={256}
              height={256}
              alt="Carousel Item Wesiu.dev Projects Page"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-225422?alt=media&token=b5cf7513-ed93-4986-a301-21881a7cb680"
              className="rounded-box h-max"
              width={256}
              height={256}
              alt="Carousel Item Wesiu.dev Projects Page"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-22827?alt=media&token=13452a87-be2b-4d07-a223-4f8f3b3f429d"
              className="rounded-box h-max"
              width={256}
              height={256}
              alt="Carousel Item Wesiu.dev Projects Page"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-229282?alt=media&token=84ca7c84-1d7c-47b9-8e95-7ea53b69c727"
              className="rounded-box h-max"
              width={256}
              height={256}
              alt="Carousel Item Wesiu.dev Projects Page"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-221818?alt=media&token=f9b66250-6537-4c1c-8340-b8ae7b9a909a"
              className="rounded-box h-max"
              width={256}
              height={256}
              alt="Carousel Item Wesiu.dev Projects Page"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-219509?alt=media&token=4f1c602d-8322-41cd-be5a-9ec48511e3a3"
              className="rounded-box h-max"
              width={256}
              height={256}
              alt="Carousel Item Wesiu.dev Projects Page"
            />
          </div>
        </div>
      </div>
    </>
  );
};
