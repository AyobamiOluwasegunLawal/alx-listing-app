import { PROPERTY_IMAGES, ICONS, properties } from "@/contants/index";
import { Property } from "@/interfaces";
import Image from "next/image";

const Card = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-10">
      {properties.map(
        ({
          specifications,
          description,
          id,
          location,
          pricePerNight,
          rating,
          title,
          image,
        }: Property) => (
          <li key={id} className="flex flex-col gap-4">
            <Image
              src={image}
              alt="Property One"
              className="w-full rounded-3xl"
            />

            <div className="flex gap-1.5">
              {description.map((d, index) => (
                <span
                  key={index}
                  className="bg-gray-100 rounded-2xl py-1.5 px-4 text-black text-xs"
                >
                  {d}
                </span>
              ))}
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl">{title}</h3>
                <p>{location}</p>
              </div>

              <div className="flex items-center gap-1.5">
                <Image
                  src={ICONS.rating}
                  alt="Star Icon"
                  width={16}
                  height={16}
                />
                <span>{rating}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline">
              <div className="flex gap-3 border-2 border-gray-100 rounded-3xl py-2 w-fit px-4 ">
                {specifications.map((s, index) => (
                  <span
                    key={index}
                    className="flex  gap-1.5 items-center justify-center"
                  >
                    <Image
                      src={
                        s.bathrooms
                          ? ICONS.bathroom
                          : s.guests
                          ? ICONS.person
                          : ICONS.bedroom
                      }
                      alt="bedroom"
                      className="size-4"
                    />

                    <span>
                      {s.bedrooms
                        ? s.bedrooms
                        : s.bathrooms
                        ? s.bathrooms
                        : s.guests}
                    </span>
                  </span>
                ))}
              </div>

              <div>
                <span className="text-xl">${pricePerNight}/</span>{" "}
                <span className="text-sm">n</span>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default Card;
