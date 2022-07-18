const itemOptions = {
  threshold: 0.05,
};

const itemObserver = (callback: any) =>
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const div = entry.target;
      div.removeAttribute('data-search-item');
      observer.unobserve(entry.target);

      callback();
    });
  }, itemOptions);

export default itemObserver;
