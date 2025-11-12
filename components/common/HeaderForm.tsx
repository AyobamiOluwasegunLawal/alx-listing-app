import { ICONS } from "@/constants";
import { HeaderFormData } from "@/interfaces";
import Image from "next/image";
import React from "react";

const HeaderForm: React.FC = () => {
  const [post, setPost] = React.useState<HeaderFormData>({
    location: "",
    checkIn: "",
    checkOut: "",
    guest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="large-form-grid">
        <div className="col-span-2">
          <label className="font-medium text-sm4" htmlFor="location">
            Location
          </label>

          <input
            name="location"
            value={post.location}
            type="text"
            className="headerFormInput"
            placeholder="Search for Destination"
            onChange={handleChange}
          />
        </div>

        <div className="flex-center gap-3">
          <div className="divider" />

          <div>
            <label className="font-medium text-sm4" htmlFor="checkIn">
              Check in
            </label>

            <input
              name="checkIn"
              value={post.checkIn}
              type="text"
              className="headerFormInput"
              placeholder="Add Date"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-center gap-3">
          <div className="divider" />

          <div>
            <label className="font-medium text-sm4" htmlFor="checkOut">
              Check out
            </label>

            <input
              name="checkOut"
              value={post.checkOut}
              type="text"
              className="headerFormInput"
              placeholder="Add Date"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-center gap-3">
          <div className="divider" />

          <div>
            <label className="font-medium text-sm4" htmlFor="guest">
              People
            </label>

            <input
              name="guest"
              value={post.guest}
              type="text"
              className="headerFormInput"
              placeholder="Add Guest"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="small-form-grid">
        <div className="col-span-2">
          <label className="font-medium text-sm4" htmlFor="location">
            Where to
          </label>

          <div className="small-form-input">
            <input
              name="location"
              value={post.location}
              type="text"
              className="headerFormInput"
              placeholder="Location"
              onChange={handleChange}
            />

            <input
              name="checkIn"
              value={post.checkIn}
              type="text"
              className="headerFormInput"
              placeholder="Date"
              onChange={handleChange}
            />

            <input
              name="guest"
              value={post.guest}
              type="text"
              className="headerFormInput"
              placeholder="Add guest"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-secondary rounded-full p-3 cursor-pointer w-fit shrink-0"
      >
        <Image src={ICONS.search} alt="search" />
      </button>
    </form>
  );
};

export default HeaderForm;
