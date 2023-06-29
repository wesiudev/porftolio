export const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const scrollWrapper = carousel.querySelector(".carousel-scroll-wrapper");
    const items = carousel.querySelectorAll(".carousel-item");

    const height = scrollWrapper.offsetHeight;
    const totalHeight = height * items.length;

    gsap.set(carousel, { height });
    gsap.set(scrollWrapper, { height: totalHeight });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    gsap.utils.toArray(items).forEach((item, index) => {
      const y = height * index;
      const speed = 5;

      tl.to(
        item,
        { y: `-=${y}`, duration: speed },
        `+=${(speed / items.length) * index}`
      );
    });

    return () => {
      tl.kill();
    };
  }, []);
  return;
};
