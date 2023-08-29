import clsx from "clsx";
import Image from "next/image";
import testimonials from "./data";

const TestimonialGrid = () => {
  return (
    <div
      className={clsx([
        "max-w-screen-xl m-auto w-full gap-10",
        "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        "p-4 xl:p-0",
      ])}
    >
      {testimonials.map(({ name, role, title, testimony, image }, index) => {
        const isDarkCard = [0, 1, 4].includes(index);

        return (
          <article
            key={index}
            className={clsx(
              [
                "bg-white rounded-md shadow-lg shadow-black/25 p-8",
                "bg-gradient-to-br md:h-min relative",
              ],
              {
                "xl:col-span-2": index === 0 || index === 4,
                "from-violet-600 via-violet-600/95 to-violet-600 order-2 lg:order-1":
                  index === 0,
                "from-slate-600 via-slate-600/95 to-slate-600 lg:order-5 xl:order-2":
                  index === 1,
                "row-span-2": index === 2,
                "order-1 lg:order-3": index === 2,
                "lg:order-4": index === 3,
                "lg:order-2 xl:order-5": index === 4,
                "from-slate-800 via-slate-800/95 to-slate-800": index === 4,
              }
            )}
          >
            {index === 0 && (
              <Image
                src="/bg-pattern-quotation.svg"
                alt="quotes"
                height={120}
                width={120}
                className="absolute top-0 right-[15%]"
              />
            )}

            <header className="flex gap-4 items-center">
              <Image
                src={image}
                alt={name}
                height={32}
                width={32}
                className="rounded-full h-10 w-10"
              />
              <div>
                <div
                  className={clsx(["font-medium"], {
                    "text-white": isDarkCard,
                  })}
                >
                  {name}
                </div>
                <div
                  className={clsx(["text-sm opacity-50"], {
                    "text-white": isDarkCard,
                  })}
                >
                  {role}
                </div>
              </div>
            </header>
            <h1
              className={clsx(
                ["mt-4 mb-6", "font-semibold text-lg max-w-prose relative"],
                {
                  "text-white": isDarkCard,
                }
              )}
            >
              {title}
            </h1>
            <p
              className={clsx(["opacity-70 max-w-prose"], {
                "text-white": isDarkCard,
              })}
            >
              {testimony}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default TestimonialGrid;
