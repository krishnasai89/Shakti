import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCrown,
  faPalette,
  faSpa,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Parvati = () => {
  return (
    <div className="mx-auto p-6 bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-pink-900 mb-2">
          Parvati Devi
        </h2>
        <p className="font-extralight text-gray-900">
          The Divine Mother, Consort of Shiva, and Embodiment of Shakti
        </p>
        <div className="p-1 bg-pink-900 rounded-2xl w-28 mx-auto mt-4"></div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:grid-row-2 my-4">
        <section className="bg-white px-10 py-8 rounded-xl shadow-md hover:shadow-2xl">
          <h3 className="font-semibold text-xl">
            Meaning of the Name & Alternate Names
          </h3>
          <p className="text-gray-900 font-light px-4 py-1">
            Parvati (Sanskrit: पार्वती, IAST: Pārvatī) is known as the daughter
            of the mountains (Parvata). She is also known by many other names:
          </p>
          <ul className="list-disc px-10 pt-1">
            <li>
              <b>Gauri </b>
              <span className="text-zinc-900 font-light">
                - The golden one, the brilliant
              </span>
            </li>
            <li>
              <b>Uma </b>
              <span className="text-zinc-900 font-light">
                - Light, tranquility, knowledge
              </span>
            </li>
            <li>
              <b>Shakti </b>
              <span className="text-zinc-900 font-light">
                - The divine feminine energy/power
              </span>
            </li>
            <li>
              <b>Ambika </b>
              <span className="text-zinc-900 font-light">- Mother</span>
            </li>
            <li>
              <b>Shailaja </b>
              <span className="text-zinc-900 font-light">
                - Daughter of the mountains
              </span>
            </li>
            <li>
              <b>Haimavathi </b>
              <span className="text-zinc-900 font-light">
                - Daughter of Himavan (the Himalayas)
              </span>
            </li>
          </ul>
        </section>
        <section className="bg-white px-10 py-8 rounded-xl shadow-md hover:shadow-2xl">
          <h3 className="font-semibold text-xl">Major Forms/Avatars</h3>
          <p className="text-gray-900 font-light px-4 py-1">
            Parvati manifests in various divine forms, each representing
            different aspects of the feminine divine:
          </p>
          <ul className="list-disc px-10 pt-1">
            <li>
              <b>Durga </b>
              <span className="text-zinc-900 font-light">
                - The invincible, destroyer of evil
              </span>
            </li>
            <li>
              <b>Lalitha Tripura Sundari </b>
              <span className="text-zinc-900 font-light">
                - The beautiful goddess of the three worlds
              </span>
            </li>
            <li>
              <b>Annapurna </b>
              <span className="text-zinc-900 font-light">
                Goddess of nourishment and food
              </span>
            </li>
            <li>
              <b>Kali </b>
              <span className="text-zinc-900 font-light">
                The fierce form of time and transformation
              </span>
            </li>
            <li>
              <b>Meenakshi </b>
              <span className="text-zinc-900 font-light">
                - The fish-eyed goddess of Madurai
              </span>
            </li>
            <li>
              <b>Kamakshi </b>
              <span className="text-zinc-900 font-light">
                - The goddess of love and desire
              </span>
            </li>
            <li>
              <b>Bhairavi </b>
              <span className="text-zinc-900 font-light">
                - The fierce form
              </span>
            </li>
            <li>
              <b>Chandi </b>
              <span className="text-zinc-900 font-light">
                - The furious form
              </span>
            </li>
          </ul>
        </section>
      </div>
      <div className="px-10 py-14 my-4 shadow-md hover:shadow-2xl rounded-lg bg-white">
        <h3 className="font-semibold text-xl">Stories and Mythology</h3>
        <p className="p-2">
          <b>Origin: </b>
          <span className="text-zinc-900 font-light">
            Parvati is the reincarnation of Sati, the first wife of Shiva. After
            Sati immolated herself in her father Daksha's yajna, she was reborn
            as Parvati, daughter of Himavan (the king of the mountains) and
            Menavati.
          </span>
        </p>
        <p className="p-2">
          <b>Marriage to Shiva: </b>
          <span className="text-zinc-900 font-light">
            Parvati performed severe penance to win Shiva as her husband. After
            years of austerity, Shiva finally accepted her and they married in a
            grand ceremony attended by all the gods. Their union represents the
            balance of masculine and feminine energies in the universe.
          </span>
        </p>
        <p className="p-2">
          <b>Children: </b>
          <span className="text-zinc-900 font-light">
            Parvati and Shiva have two sons: Ganesha (the elephant-headed god of
            wisdom) and Kartikeya (the god of war).
          </span>
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:grid-row-2 my-4">
        <section className="bg-white px-10 py-10 rounded-xl shadow-md hover:shadow-2xl">
          <h3 className="font-semibold text-xl">
            Symbolism, Iconography, and Spiritual Significance
          </h3>
          <p className="text-gray-600 font-light p-1">
            Parvati's iconography is rich with symbolism:
          </p>
          <ul className="list-disc px-8 py-2">
            <li>
              <FontAwesomeIcon icon={faSpa} className="text-pink-600 text-xl" />
              <b> Lotus: </b>
              <span className="text-zinc-900 font-light">
                Represents purity, spiritual awakening, and detachment from
                worldly desires.
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBolt}
                className="text-yellow-400 text-xl"
              />
              <b> Trident (Trishula): </b>
              <span className="text-zinc-900 font-light">
                Symbolizes power, will, and action. It represents the three
                gunas (sattva, rajas, tamas).
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCrown}
                className="text-amber-500 text-xl"
              />
              <b> Lion/Tiger: </b>
              <span className="text-zinc-900 font-light">
                Her mount (vahana) represents power, will, and determination. It
                also symbolizes the controlled animal instincts.
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSun}
                className="text-yellow-400 text-xl"
              />
              <b> Mudras: </b>
              <span className="text-zinc-900 font-light">
                Abhaya (fearlessness) and Varada (boon-giving) mudras represent
                her protective and benevolent nature.
              </span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPalette}
                className="text-rose-700 text-xl"
              />
              <b> Colors: </b>
              <span className="text-zinc-900 font-light">
                Red symbolizes action and the creative energy (rajasic), white
                represents purity and spiritual knowledge (sattvic), and black
                represents destruction and transformation (tamasic).
              </span>
            </li>
          </ul>
        </section>
        <section className="bg-white px-10 py-10 rounded-xl shadow-md hover:shadow-2xl">
          <h3 className="font-semibold text-xl">
            Associated Temples and Locations
          </h3>
          <p className="text-gray-600 font-light p-1">
            Major temples dedicated to Parvati and her various forms across
            India:
          </p>
          <ul className="list-disc px-8 py-2">
            <li>
              <b>Meenakshi Temple </b>
              <span className="text-zinc-900 font-light">
                - Madurai, Tamil Nadu
              </span>
            </li>
            <li>
              <b>Chamunda Devi Temple </b>
              <span className="text-zinc-900 font-light">
                - Himachal Pradesh
              </span>
            </li>
            <li>
              <b>Kamakshi Amman Temple </b>
              <span className="text-zinc-900 font-light">
                - Kanchipuram, Tamil Nadu
              </span>
            </li>
            <li>
              <b>Vaishno Devi Temple </b>
              <span className="text-zinc-900 font-light">
                - Himachal Pradesh
              </span>
            </li>
            <li>
              <b>Jwala Ji Temple </b>
              <span className="text-zinc-900 font-light"></span>
            </li>
            <li>
              <b>Dakshayani Temple </b>
              <span className="text-zinc-900 font-light"> - Kerala</span>
            </li>
            <li>
              <b>Annapurna Temple </b>
              <span className="text-zinc-900 font-light">
                - Varanasi, Uttar Pradesh
              </span>
            </li>
            <li>
              <b>Kali Temple </b>
              <span className="text-zinc-900 font-light">
                - Kolkata, West Bengal
              </span>
            </li>
            <li>
              <b>Maa Jwala Ji Temple </b>
              <span className="text-zinc-900 font-light">- Uttarakhand</span>
            </li>
            <li>
              <b>Shaktipeeth Mahamaya </b>
              <span className="text-zinc-900 font-light">- Chhattisgarh</span>
            </li>
          </ul>
        </section>
      </div>
      <div className="px-10 py-10 my-4 shadow-md hover:shadow-2xl rounded-lg bg-white">
        <h3 className="font-semibold text-xl">
          Special Rituals, Pujas, and Festivals
        </h3>
        <h4 className="font-medium text-lg">Rituals and Pujas</h4>
        <ul className="list-disc px-8 py-2">
          <li>
            <b>Lalitha Sahasranama Archana </b>
            <span className="text-zinc-900 font-light">
              - Recitation of 1000 names of Lalitha Tripura Sundari
            </span>
          </li>
          <li>
            <b>Durga Puja</b>
            <span className="text-zinc-900 font-light">
              - Elaborate worship of Durga, especially during Navratri
            </span>
          </li>
          <li>
            <b>Kali Puja </b>
            <span className="text-zinc-900 font-light">
              - Special worship of Goddess Kali on new moon nights
            </span>
          </li>
          <li>
            <b>Gauri Puja </b>
            <span className="text-zinc-900 font-light">
              - Worship of Parvati in her form as Gauri, especially by married
              women
            </span>
          </li>
          <li>
            <b>Sundara Kandam Parayanam </b>
            <span className="text-zinc-900 font-light">
              - Recitation of the Sundara Kandam of Ramayana
            </span>
          </li>
        </ul>
        <h4 className="font-medium text-lg">Festivals</h4>
        <ul className="list-disc px-8 py-2">
          <li>
            <b>Navratri </b>
            <span className="text-zinc-900 font-light">
              - Nine-night festival celebrating the nine forms of Durga
            </span>
          </li>
          <li>
            <b>Durga Puja </b>
            <span className="text-zinc-900 font-light">
              - Major festival in Bengal and other states
            </span>
          </li>
          <li>
            <b>Gowri Habba </b>
            <span className="text-zinc-900 font-light">
              - Festival celebrated a day before Ganesh Chaturthi in Karnataka
            </span>
          </li>
          <li>
            <b>Teej </b>
            <span className="text-zinc-900 font-light">
              - Festival celebrated by women for marital bliss
            </span>
          </li>
          <li>
            <b>Karthigai Deepam </b>
            <span className="text-zinc-900 font-light">
              - Festival of lights celebrated in Tamil Nadu
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Parvati;
