import { useState } from "react";
import {
  MapPinIcon,
  SparklesIcon,
  UserCircleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import SHAKTI_PEETHAS from "../assets/peethas.json";
import Shakti_Peethas_img from "../assets/gallery/Shakti Peethas.png";
import { BookIcon } from "lucide-react";

const Peethas = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = SHAKTI_PEETHAS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.temple.toLowerCase().includes(query.toLowerCase()) ||
      p.bodyPart.toLowerCase().includes(query.toLowerCase()) ||
      p.goddessForm.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-6xl font-extrabold mb-6 text-center text-amber-500">
          Shakti Peethas
        </h2>

        {/* What are Shakti Peethas */}
        <div className="mb-10 space-y-4 grid sm:grid-cols-2">
          <div className="">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-amber-500" />
              What are Shakti Peethas?
            </h3>
            <p className="text-lg font-light leading-relaxed p-10">
              Shakti Peethas are sacred sites dedicated to the goddess Shakti,
              the divine feminine energy. Each Peetha is associated with a
              specific body part of Goddess Sati. Visiting these sites brings
              divine blessings, spiritual growth, and inner peace.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.0146517670796!2d78.14332677554907!3d29.921480374985737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909489baaaaaaab%3A0x79f9005cafb606d3!2sShree%20Daksheshwar%20Mahadev%20-%20Daksh%20Prajapati%20Temple!5e0!3m2!1sen!2sin!4v1759191699347!5m2!1sen!2sin"
              width="600"
              height="150"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Daksheshwar Mahadev - Daksh Prajapati Temple"
              className="border-0 rounded-2xl ml-10"
            ></iframe>
          </div>
          <img
            src={Shakti_Peethas_img}
            alt="Shakti Peethas"
            className="rounded shadow-lg mt-4 w-screen h-[21rem] object-cover "
          />
        </div>

        {/* Story */}
        <div className="mb-10 space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <BookOpenIcon className="w-6 h-6 text-amber-500" />
            The Story Behind Shakti Peethas
          </h3>

          {/* Each section of the story */}
          {[
            {
              title: "The Organizer – King Daksha",
              location: "Prayag / Prayagraj, Uttar Pradesh",
              text: "King Daksha, a powerful patriarch and son of Brahma, organized a grand yagna (sacrificial ceremony).",
            },
            {
              title: "The Conflict – Daksha’s Animosity",
              location: "Prayag",
              text: "Daksha harbored animosity towards his son-in-law, Lord Shiva, and deliberately snubbed him by not inviting him to the yagna.",
            },
            {
              title: "Sati’s Sacrifice",
              location: "Prayag",
              text: "Disrespectfully snubbed by her father, Sati attended the yagna but, insulted and humiliated, immolated herself in the sacred fire.",
            },
            {
              title: "Shiva’s Rage – Creation of Veerabhadra",
              location: "Prayag → Across the Indian Subcontinent",
              text: "Grief-stricken and enraged by Sati’s death, Lord Shiva created the fierce deity Veerabhadra.",
            },
            {
              title: "The Destruction of the Yagna",
              location: "Prayag",
              text: "Veerabhadra decimated the sacrificial ceremony and decapitated King Daksha.",
            },
            {
              title: "The Aftermath",
              location: "Across India",
              text: "After the destruction, the gods and participants of the yagna were left without the blessings they once received.",
            },
            {
              title: "Formation of Shakti Peethas",
              location: "Various Across India, Pakistan, Nepal, Bangladesh",
              text: "Shiva, carrying Sati’s body, wandered in grief. To calm him and enable Sati’s reincarnation as Parvati, Lord Vishnu used his Sudarshan Chakra to cut Sati’s body into pieces. These fell at different locations and became sacred Shakti Peethas.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="border-l-4 border-amber-400 pl-4 space-y-1"
            >
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <BookIcon className="w-6 h-6 text-amber-500" />
                {section.title}{" "}
                <span className="text-gray-500 text-sm flex items-center">
                  <MapPinIcon className="w-5 h-5 text-amber-500" />(
                  {section.location})
                </span>
              </h4>
              <p className="text-gray-700">{section.text}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6 flex gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, temple, location, body part"
            className="flex-1 p-3 border rounded shadow-sm"
          />
          <button
            onClick={() => setQuery("")}
            className="px-4 py-2 border rounded bg-amber-200 hover:bg-amber-300"
          >
            Clear
          </button>
        </div>

        {/* Peetha Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className={`p-4 border rounded shadow hover:shadow-lg transition ${p.bgColor}`}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-44 object-cover rounded mb-3"
                />
              )}
              <h3 className="font-semibold text-xl text-amber-950">{p.name}</h3>
              <p className="text-md text-rose-600 font-medium">
                <b>Temple Name: </b>
                {p.temple}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" />
                <b>Location: </b> {p.location}
              </p>

              <p className="text-sm text-gray-700 mt-1 flex items-center gap-1">
                <UserCircleIcon className="w-4 h-4" />{" "}
                <strong>Body Part:</strong> {p.bodyPart}
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-1">
                <SparklesIcon className="w-4 h-4" />{" "}
                <strong>Goddess Form:</strong> {p.goddessForm}
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setSelected(p)}
                  className="px-3 py-1 rounded bg-amber-100 hover:bg-amber-200"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 overflow-auto">
            <div className="bg-white rounded max-w-2xl w-full p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold flex items-center gap-2 mt-96">
                    <SparklesIcon className="w-6 h-6 text-amber-500" />{" "}
                    {selected.name}
                  </h3>
                  <p className="text-xl text-rose-600 font-medium">
                    {selected.temple}
                  </p>
                  <p className="text-sm text-gray-600">{selected.state}</p>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </div>

              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-60 object-cover rounded mt-4"
                />
              )}

              <div className="mt-4 text-gray-700 space-y-2">
                <p className="flex items-center gap-1">
                  <UserCircleIcon className="w-4 h-4" />{" "}
                  <strong>Body Part:</strong> {selected.bodyPart}
                </p>
                <p className="flex items-center gap-1">
                  <SparklesIcon className="w-4 h-4" />{" "}
                  <strong>Goddess Form:</strong> {selected.goddessForm}
                </p>
                <p className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4" />{" "}
                  <strong>Preposition:</strong> {selected.preposition}
                </p>
                <div className="mt-4 w-full h-64">
                  <iframe
                    src={selected.googleLocation}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={selected.name + " Location"}
                  ></iframe>
                </div>
                <p className="flex items-center gap-1">
                  <BookOpenIcon className="w-4 h-4" />{" "}
                  <div className="">
                    <strong>Story (Goddess):</strong> {selected.storyGoddess}
                  </div>
                </p>
                <p className="flex items-center gap-1">
                  <BookOpenIcon className="w-4 h-4" />{" "}
                  <div className="">
                    <strong>Story (Temple):</strong> {selected.storyTemple}
                  </div>
                </p>
              </div>

              <div className="mt-4 text-right">
                <button
                  className="px-4 py-2 rounded bg-amber-500 text-white hover:bg-amber-600"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Peethas;
