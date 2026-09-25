import { useState, useEffect } from "react";

export const CarouselModal = ({
  title,
  images,
  onClose,
}: {
  title: string;
  images: string[];
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight")
        setCurrentIndex((currentIndex + 1) % images.length);
      if (event.key === "ArrowLeft")
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, onClose]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-900/70"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image gallery`}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center max-w-4xl w-full p-4 bg-violet-200 rounded-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute top-0 -right-2 flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-white hover:bg-violet-700 font-bold m-4"
        >
          ✕
        </button>

        <div className="w-full flex justify-center">
          <img
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1} of ${images.length}`}
            className="max-w-full max-h-[70vh] rounded-xl shadow-2xl object-contain"
          />
        </div>

        <div className="flex flex-row items-center gap-4 mt-4">
          <button
            type="button"
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + images.length) % images.length,
              )
            }
            aria-label="Previous image"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-white hover:bg-violet-700 font-bold"
          >
            ←
          </button>
          <span className="font-semibold text-lg bg-indigo-900/70 text-white px-4 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
            aria-label="Next image"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600 text-white hover:bg-violet-700 font-bold"
          >
            →
          </button>
        </div>

        <div className="flex flex-row gap-2 mt-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`View image ${index + 1} of ${images.length}`}
              aria-current={index === currentIndex ? "true" : "false"}
              className={`w-16 h-12 rounded-md overflow-hidden transition-opacity ${
                index === currentIndex
                  ? "ring-2 ring-violet-600 opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
