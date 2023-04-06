export const scrollToSection = (elementRef: {
  current: { offsetTop: number };
}) => {
  return window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });
};
