import { useState } from "react";

import Img1 from "../../images/img1.png";
import Card from "../reuseable/Card";
import WeatherCard from "../weather/WeatherCard";

function Body() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nachricht: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-28 items-center">
      <div className="w-full bg-lila mb-28">
        <div className="grid gridcols-1 md:grid-cols-2 gap-3 mx-auto w-full max-w-screen-xl">
          <p className="text-5xl text-lime py-28 text-left p-3">
            <span className="font-bold">Lorem ipsum dolor sit amet,</span> consetetur sadipscing elitr.
          </p>
          <img src={Img1} className="mb-[-10rem] rounded-[4%] p-3" alt="/"></img>
        </div>
      </div>

      <div className="max-w-screen-sm text-left p-3">
        <p className="text-3xl text-lime">
          <span className="font-bold">Lorem ipsum dolor sit amet,</span> consetetur sadipscing elitr.
        </p>
        <p className="py-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          <span className="font-bold">Stet clita kasd gubergren</span>, no sea takimata sanctus est Lorem ipsum dolor
          sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="grid gridcols-1 md:grid-cols-2 gap-3 w-full max-w-screen-xl">
        <Card className="bg-lime text-white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est.
        </Card>
        <Card className="bg-lila text-lime">
          <p className="mb-2">
            <span className="font-bold">Lorem ipsum dolor sit amet,</span> consetetur sadipscing elitr.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-auto text-black">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-md px-2 py-1"
            />
            <input
              type="email"
              placeholder="E-Mail Adresse"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md px-2 py-1"
            />
            <input
              type="nachricht"
              placeholder="Nachricht"
              id="nachricht"
              name="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
              className="h-24 rounded-md px-2 py-1 placeholder:-translate-y-6"
            />
            <label className="block mt-2 text-white font-thin text-sm">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2 h-4 w-4 rounded-md"
              />
              Einwilligung zur Datenverarbeitung*
            </label>
            <button
              type="submit"
              className="bg-orange w-[30%] hover:bg-orange-dark text-sm text-white py-2 px-4 rounded-md"
            >
              Jetzt absenden!
            </button>
          </form>
        </Card>
      </div>
      <WeatherCard />
    </div>
  );
}

export default Body;
