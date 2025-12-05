import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCrown,
  faPalette,
  faSpa,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Marriage from "../assets/gallery/Marriage.jpg";
import Self_Immolation from "../assets/gallery/Sati_Self-Immolation.jpg";
import Veerabhadra from "../assets/gallery/Veerabhadra.jpg";
import Veerabhadra_kali from "../assets/gallery/Veerabhadra+kali.png";
import sad_shiva from "../assets/gallery/Sad_Shiva.png";
import Kamadeva from "../assets/gallery/Kamadeva.png";
import Parvati_Tapasya from "../assets/gallery/Parvati’s_Tapasya.png";
import Shiva_test from "../assets/gallery/Shiva _Tests.png";
import Parvati_puja from "../assets/gallery/Parvati_puja.png";
import Family from "../assets/gallery/Family.png";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-8 p-6">
      <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto"></div>
      <div className="grid gap-6 md:grid-cols-2">
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-md space-y-3 h-[20rem]"
          >
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-10 rounded-lg shadow-md">
        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-64 bg-gray-300 rounded-lg"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Parvati = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

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
      <div className="px-10 py-14 my-4">
        <h3 className="font-extrabold text-3xl text-center text-rose-900">
          Stories and Mythology
        </h3>
        <div className="p-1">
          <div className="my-2 py-7 px-5 grid gap-6 lg:grid-cols-2">
            <img
              src={Marriage}
              alt=""
              className="object-cover w-full h-full rounded-lg hover:shadow-xl"
            />
            <div className="hover:shadow-xl bg-white rounded-lg my-2 py-5 px-5">
              <p className="p-2">
                <b>Origin: </b>
                <span className="text-zinc-900 font-light">
                  Parvati is the reincarnation of Sati, the first wife of Shiva.
                  After Sati immolated herself in her father Daksha's yajna, she
                  was reborn as Parvati, daughter of Himavan (the king of the
                  mountains) and Menavati.
                </span>
              </p>
              <p className="p-2">
                <h3 className="text-4xl font-serif">
                  Sati – The First Birth of Parvati (The First Love Story)
                </h3>
                <strong className="text-lg font-mono">
                  Birth and Early Life of Sati
                </strong>
                <span className="text-zinc-900 font-light">
                  <ul className="list-disc ml-4">
                    <li>
                      <b>Parents:</b> King Daksha (one of Brahma’s sons) and
                      Queen Prasuti.
                    </li>
                    <li>
                      <b>Incarnation:</b> Sati was an incarnation of Shakti, the
                      divine feminine energy, destined to unite with Lord Shiva.
                    </li>
                    <li>
                      <b>Childhood:</b>
                      <ul className="list-disc ml-8">
                        <li>Sati was virtuous, brave, and deeply spiritual.</li>
                        <li>
                          From an early age, she was devoted to Shiva and knew
                          she was meant for him.
                        </li>
                        <li>
                          She had intense love for the divine, unlike ordinary
                          royal daughters.
                        </li>
                        <li>
                          <b>Meaning:</b> Sati represents pure devotion and
                          divine love, showing that true love for God comes from
                          inner conviction, not family or society.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </span>
              </p>
              <p className="p-2">
                <strong className="text-lg font-mono">
                  Sati’s Penance and Marriage to Shiva
                </strong>
                <span className="text-zinc-900 font-light">
                  <ul className="list-disc ml-4">
                    <li>
                      Daksha, her father, disapproved of Shiva — he thought
                      Shiva was unfit for a royal princess. But Sati’s love for
                      Shiva was unshakable. She performed deep tapasya (penance)
                      — standing barefoot in snow, meditating without food,
                      reciting Shiva’s name for years.
                    </li>
                    <li>
                      But Sati’s love for Shiva was unshakable. She performed
                      deep tapasya (penance) — standing barefoot in snow,
                      meditating without food, reciting Shiva’s name for years.
                    </li>
                    <li>
                      Finally, moved by her devotion, Shiva appeared before her
                      and accepted her as his wife. Their marriage was
                      celebrated by all celestial beings. It was the union of
                      Purusha (divine consciousness) and Prakriti (divine
                      energy) — the balance of the cosmos itself.
                    </li>
                    <li>
                      <b>Lesson: </b>
                      True love requires devotion, patience, and alignment with
                      cosmic purpose.
                    </li>
                  </ul>
                </span>
              </p>
            </div>
          </div>
          <div className="hover:shadow-xl rounded-lg my-2 py-7 px-5 bg-white">
            <strong className="text-lg font-mono">
              Married Life of Sati and Shiva
            </strong>
            <span className="text-zinc-900 font-light">
              <ul className="list-disc ml-4">
                <li>Sati and Shiva lived happily on Mount Kailash.</li>
                <li>
                  They were deeply in love — simple, spiritual, and full of
                  divine joy.
                </li>
                <li>
                  But Sati still missed her family — her father Daksha, who
                  still did not respect Shiva.
                </li>
                <li>
                  Daksha, consumed by pride and ego, could not bear that his
                  daughter chose the wandering yogi over his royal expectations.
                </li>
              </ul>
            </span>
            <strong className="text-lg font-mono">
              Daksha Yagna (The Great Sacrifice)
            </strong>
            <span className="text-zinc-900 font-light">
              <ul className="list-disc ml-4">
                <li>
                  One day, Daksha performed a grand yagna (sacrifice) to show
                  his power.
                </li>
                <li>He invited all the gods — except Shiva and Sati.</li>
                <li>
                  When Sati learned of it, she felt humiliated. She said to
                  Shiva:
                </li>
                <li>
                  “It is my father’s yagna. I will go, even if we were not
                  invited.”
                </li>
                <li>
                  Shiva warned her not to go, but out of daughterly duty, Sati
                  went alone.
                </li>
                <li>
                  <b>Meaning:</b> Ego and arrogance can blind even powerful
                  kings (Daksha), showing conflict between worldly pride and
                  spiritual truth.
                </li>
              </ul>
            </span>
          </div>
          <div className="grid lg:grid-cols-2 rounded-lg overflow-hidden hover:shadow-2xl gap-10 p-4">
            <div className="bg-white px-5 flex flex-col justify-start h-full hover:shadow-2xl rounded-xl">
              <strong className="text-base font-mono mb-2 mt-0">
                Sati’s Self-Immolation
              </strong>
              <ul className="list-disc ml-5 text-sm text-zinc-800 font-light space-y-1">
                <li>
                  At the yagna, Daksha insulted Shiva — calling him dirty,
                  ascetic, and unworthy.
                </li>
                <li>
                  Sati’s heart burned with pain and anger. She spoke firmly,
                  “You have insulted my Lord. I no longer wish to be called your
                  daughter.”
                </li>
                <li>
                  Then, using her yogic power, Sati self-immolated in the sacred
                  fire, returning to her divine form — Shakti.
                </li>
                <li>
                  This moment shook the heavens; even the gods trembled at her
                  power and devotion.
                </li>
                <li>
                  <b>Spiritual meaning:</b> True devotion transcends family
                  loyalty — Sati chose divine love over worldly ties.
                </li>
              </ul>
            </div>
            <img
              src={Self_Immolation}
              alt="Sati’s Self-Immolation"
              className="object-center w-[42rem] h-[15rem] rounded-xl hover:shadow-xl"
            />
          </div>
          <div className="grid lg:grid-cols-2 hover:shadow-xl rounded mt-2 p-2 gap-2">
            <img
              src={Veerabhadra}
              alt=""
              className="hover:shadow-xl rounded object-center h-[40rem] w-[45rem]"
            />
            <div className="grid lg:grid-rows-2 rounded gap-4">
              <p className="p-4 bg-white rounded hover:shadow-xl">
                <strong className="text-xl font-mono">
                  Shiva’s Grief and Cosmic Destruction
                </strong>
                <span className="text-zinc-900 font-light p-4">
                  <ul className="list-disc ml-4">
                    <li>
                      When Shiva learned of Sati’s death, he was filled with
                      unbearable grief and fury.
                    </li>
                    <li>
                      He tore a lock of his hair and struck it to the ground —
                      from it arose the fierce warrior Veerabhadra and the
                      goddess Kali.
                    </li>
                    <li>They stormed Daksha’s yagna, destroying everything.</li>
                    <li>Daksha was beheaded.</li>
                    <li>All gods begged Shiva to calm down.</li>
                    <li>
                      When his anger cooled, Shiva forgave Daksha and restored
                      his life — giving him a goat’s head as a reminder of his
                      arrogance.
                    </li>
                  </ul>
                </span>
              </p>
              <img
                src={Veerabhadra_kali}
                alt=""
                className="hover:shadow-2xl rounded object-cover pl-4 mb-1"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 hover:shadow-xl bg-white rounded my-2 py-5 px-5 mt-2 gap-5">
            <img
              src={sad_shiva}
              alt=""
              className="rounded-xl hover:shadow-xl w-[45rem] h-[30rem]"
            />
            <p className="p-2">
              <strong className="text-xl font-mono">
                Shiva’s Mourning – The Wandering Ascetic
              </strong>
              <span className="text-zinc-900 font-light">
                <ul className="list-disc ml-4">
                  <li>Shiva was heartbroken.</li>
                  <li>
                    He lifted Sati’s burnt body and wandered across the
                    universe, crying in agony.
                  </li>
                  <li>
                    The whole world trembled with his pain — the sun dimmed,
                    mountains shook, and creation fell into imbalance.
                  </li>
                  <li>
                    To restore balance, Vishnu used his Sudarshan Chakra to cut
                    Sati’s body into 51 pieces.
                  </li>
                  <li>
                    Each piece fell on Earth — and those sacred spots became
                    Shakti Peethas (holy centers of Shakti’s power).
                  </li>
                  <li>
                    Even after Sati’s death, her energy continued to bless the
                    world.
                  </li>
                </ul>
              </span>
              <strong className="text-xl font-mono mt-2">
                Shiva’s Isolation and Waiting(21 Manvantaras = 306,720,000 human
                years)
              </strong>
              <span className="text-zinc-900 font-light">
                <ul className="list-disc ml-4">
                  <li>After this, Shiva withdrew from the world.</li>
                  <li>
                    He entered deep meditation in the Himalayas for thousands of
                    years — some texts say several Yugas (306,720,000 of human
                    years).
                  </li>
                  <li>
                    During this time, he rejected all worldly contact — lost in
                    the memory of Sati.
                  </li>
                  <li>
                    The world began to suffer from imbalance again because the
                    divine masculine and feminine forces were separated.
                  </li>
                </ul>
              </span>
            </p>
          </div>
          <div className="grid lg:grid-cols-2 hover:shadow-xl bg-white rounded my-2 py-5 px-5 mt-2 gap-5">
            <p className="p-2">
              <p>
                <strong className="text-xl font-mono">
                  Rebirth of Shakti as Parvati
                </strong>
                <span className="text-zinc-900 font-light">
                  <ul className="list-disc ml-4">
                    <li>
                      To restore harmony, the gods prayed to Shakti to be born
                      again.
                    </li>
                    <li>
                      Thus, Sati was reborn as Parvati, the daughter of King
                      Himavan (the Himalaya) and Queen Menavati.
                    </li>
                    <li>From childhood, Parvati was gentle and radiant.</li>
                    <li>
                      She would make clay idols of Shiva and meditate on him
                      daily — her soul remembered him from her past life.
                    </li>
                  </ul>
                </span>
              </p>
              <p>
                <strong className="text-xl font-mono">
                  Kamadeva’s Attempt and the Burning of Desire
                </strong>
                <span className="text-zinc-900 font-light">
                  <p>
                    The gods, worried that Shiva still remained detached from
                    the world, sent Kamadeva (the god of love) to awaken him.
                    Kamadeva aimed his flower arrows of desire toward Shiva as
                    Parvati served and meditated nearby.
                  </p>
                  <p>
                    But Shiva, disturbed from his trance, opened his third eye,
                    and burned Kamadeva to ashes with a single glance.
                  </p>
                  <p>
                    Yet, Kamadeva’s sacrifice was not in vain — the seed of love
                    was planted in Shiva’s heart for Parvati.
                  </p>
                  <p>Thus began the divine reunion.</p>
                </span>
              </p>
              <p>
                <strong className="text-xl font-mono">
                  Parvati’s Tapasya (Penance)
                </strong>
                <span className="text-zinc-900 font-light">
                  <ul className="list-disc ml-4">
                    <li>
                      Shiva still lived in meditation, detached from the world.
                    </li>
                    <li>So Parvati began a severe penance to win him again.</li>
                    <li>
                      She lived only on fruits. Then only on leaves. Finally, on
                      air alone — meditating for thousands of years(3000 years).
                    </li>
                    <li>The gods were astonished by her devotion.</li>
                    <li>Even the sages bowed before her penance.</li>
                  </ul>
                </span>
              </p>
            </p>
            <img
              src={Kamadeva}
              alt=""
              className="rounded-xl hover:shadow-xl w-[47rem] h-[36rem] object-center"
            />
          </div>
          <div className="grid lg:grid-cols-2 hover:shadow-xl bg-white rounded my-2 py-5 px-5 mt-2 gap-5">
            <img
              src={Parvati_Tapasya}
              alt=""
              className="rounded-xl hover:shadow-xl w-[45rem] lg:h-[52rem] object-cover"
            />
            <p className="p-2">
              <p>
                <strong className="text-xl font-mono">
                  Parvati’s Deep Devotion — The Embrace of the Shiva Linga
                </strong>
                <span className="text-zinc-900 font-light">
                  <p>
                    After the burning of Kamadeva, the world was struck with
                    despair. Spring vanished, love disappeared, and even the
                    gods felt the loss. Still, Lord Shiva remained in his deep
                    meditation — untouched, unmoved.
                  </p>
                  <p>
                    But Parvati’s heart was unwavering. Every day, she would
                    come to the forest and worship the Shiva Linga with flowers,
                    water, and devotion. Her love was silent but boundless —
                    born not of desire, but of deep union of soul and spirit.
                  </p>
                  <p>
                    Seeing her steadfastness, Shiva decided to test the depth of
                    her devotion.
                  </p>
                  <p>
                    He whispered to the elements: “Let us see if her love is
                    true — let the wind, the sun, and the river rise against
                    her.”
                  </p>
                  <p>
                    Immediately, the wind began to howl fiercely, uprooting
                    trees and scattering her offerings. Dust and leaves swirled
                    violently.
                  </p>
                  <p>Yet Parvati sat unmoved, eyes closed in meditation.</p>
                  <p>
                    Then Shiva commanded the sun to blaze with unbearable heat.
                    The ground cracked, her skin burned, but she did not waver.
                    Beads of sweat rolled down her face, yet her mind remained
                    fixed on the divine Linga.
                  </p>
                  <p>
                    Finally, Shiva called upon the river to overflow with
                    thunderous force. The current rushed toward her, threatening
                    to wash away the sacred Linga she had made.
                  </p>
                  <p>
                    Seeing this, Parvati cried out, “No! I cannot let Your image
                    — the symbol of Your being — be swept away!”
                  </p>
                  <p>
                    Without hesitation, she threw herself upon the Shiva Linga,
                    embracing it tightly with both arms. “Let me be destroyed,”
                    she said, “but may the Lord remain! If my body must perish,
                    let it perish in His service!”
                  </p>
                  <p>
                    The flood crashed around her, but not a single drop touched
                    the sacred form. Her devotion created an invisible shield of
                    divine energy.
                  </p>
                  <p>The wind calmed. The sun softened. The river retreated.</p>
                  <p>
                    Then Shiva appeared before her in radiant light and spoke
                    gently, “Parvati, your devotion has conquered the elements
                    themselves. Even the forces of nature bow to your love. You
                    are Shakti — my eternal power, my very self.”
                  </p>
                  <p>
                    Parvati bowed humbly, tears of joy in her eyes. “O Lord, I
                    seek nothing but You. My penance, my breath, my being — all
                    exist only for You.”
                  </p>
                  <p>
                    Shiva smiled: “In time, our union will restore balance to
                    the worlds. Until then, continue your Tapasya. The moment of
                    our reunion is near.”With that, he vanished, leaving
                    Parvati’s heart filled with divine bliss and renewed
                    purpose.
                  </p>
                </span>
              </p>
            </p>
          </div>
          <div className="grid lg:grid-cols-2 hover:shadow-xl bg-white rounded px-5 pt-5 gap-5">
            <p className="p-2 pb-0">
              <p>
                <strong className="text-xl font-mono">
                  Shiva Tests Parvati
                </strong>
                <span className="text-zinc-900 font-light">
                  <ul className="list-disc ml-4">
                    <li>
                      After witnessing Parvati’s centuries of penance and her
                      unshakable devotion, Lord Shiva decided to test her love —
                      to ensure it was not born of desire but of true spiritual
                      union.
                    </li>
                    <li>
                      One morning, as Parvati sat under a tree, her body lean
                      from years of austerity and her eyes glowing with divine
                      concentration, an old Brahmin ascetic appeared before her.
                      His matted hair was grey, his robe tattered, and his face
                      lined with wisdom — yet it was none other than Lord Shiva
                      himself in disguise.
                    </li>
                    <li>
                      The Brahmin spoke with a teasing tone: “O fair maiden, you
                      are the daughter of mighty Himavan, the jewel of the
                      mountains! Why are you torturing your delicate body in
                      this forest? What are you seeking in this harsh penance?”
                    </li>
                    <li>
                      Parvati bowed respectfully, “O holy one, I seek to please
                      Lord Shiva — the Supreme, the Destroyer of illusion — and
                      to have him as my husband.”
                    </li>
                    <li>
                      The Brahmin raised his brows, pretending to be shocked.
                      “Shiva? That ash-smeared hermit? The one who dwells in
                      cremation grounds, wearing skulls as ornaments and
                      serpents as garlands? He has no home, no wealth, no
                      family! How can such a being be a husband for one as
                      beautiful and noble as you?”
                    </li>
                    <li>
                      Parvati remained calm, but her heart stirred with
                      righteous pride. “You speak out of ignorance, O Brahmin.
                      The Lord you mock is not what He appears. He is the Master
                      of the three worlds, the essence of all creation. His
                      garland of skulls represents the passing of time itself.
                      His ash reminds us of life’s impermanence. To me, He is
                      the most auspicious, the most beautiful — the One beyond
                      all illusion.”
                    </li>
                    <li>
                      The Brahmin laughed softly. “My child, you could wed a
                      prince or a god — perhaps Vishnu himself! Why choose one
                      who looks like a mad ascetic?”
                    </li>
                    <li>
                      Now Parvati’s eyes flashed with divine fire. “Enough! You
                      may insult me, but never Him! I would rather die in
                      devotion than hear His name defiled. You see a beggar, but
                      I see the Lord of Lords — the eternal consciousness, the
                      light in all darkness. My heart belongs to Him alone!”
                    </li>
                    <li>
                      At that moment, the Brahmin’s laughter changed — it echoed
                      like thunder, and the forest filled with divine light. The
                      old man’s form began to shimmer and expand, revealing the
                      radiant Lord Shiva himself — adorned with the crescent
                      moon, the Ganga flowing from his matted locks, and the
                      glow of eternity in his three eyes.
                    </li>
                    <li>
                      Parvati folded her hands, overwhelmed by reverence and
                      love. Tears streamed down her face.
                    </li>
                    <li>
                      Shiva smiled gently and said, “Parvati, your devotion has
                      conquered even Me. You have passed every test, endured
                      every trial. You are Shakti — my other half, my eternal
                      power. Ask for a boon.”
                    </li>
                    <li>
                      Parvati replied humbly, “My Lord, I desire nothing but
                      You. Let me serve You and unite with You as one soul in
                      two forms.”
                    </li>
                  </ul>
                </span>
              </p>
              <p>
                <strong className="text-xl font-mono">
                  Parvati’s Noble Refusal
                </strong>
                <span className="text-zinc-900 font-light">
                  <ul className="list-disc ml-4">
                    <li>
                      Then Shiva said with affection, “Come to Mount Kailash; be
                      my wife.”
                    </li>
                    <li>
                      Parvati bowed and replied softly, “O Lord, I too wish to
                      be united with You. But let our union follow the sacred,
                      traditional rites — with my parents’ blessings and Vedic
                      ceremonies. I will not abandon my father’s home until they
                      approve.”
                    </li>
                    <li>
                      Hearing her words, Shiva smiled with admiration. “Beloved,
                      your wisdom and respect for dharma honor both your family
                      and me. Let our marriage be celebrated in the right way —
                      before gods, sages, and your kin.”
                    </li>
                    <li>
                      Thus, Shiva agreed that their wedding should be performed
                      openly and properly, honoring both love and tradition, and
                      bringing together heaven and earth in sacred harmony.
                    </li>
                  </ul>
                </span>
              </p>
            </p>
            <div className="grid lg:grid-rows-2 gap-5">
              <img
                src={Shiva_test}
                alt=""
                className="rounded-xl hover:shadow-xl"
              />
              <img
                src={Parvati_puja}
                alt=""
                className="rounded-xl hover:shadow-xl"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 hover:shadow-xl bg-white rounded my-2 py-5 px-5 mt-2 gap-5">
            <img
              src={Family}
              alt=""
              className="object-cover rounded-xl hover:shadow-xl h-[25rem] w-[45rem]"
            />
            <p className="p-2">
              <strong className="text-xl font-mono">
                Marriage of Shiva and Parvati
              </strong>
              <span className="text-zinc-900 font-light">
                <ul className="list-disc ml-4">
                  <li>
                    Their marriage was the grandest event in all three worlds.
                  </li>
                  <li>Mount Kailash shone with divine light.</li>
                  <li>All gods, sages, and celestial beings attended.</li>
                  <li>
                    Even Vishnu gave away Parvati as her brother in the
                    ceremony.
                  </li>
                  <li>
                    The universe rejoiced — Shiva and Shakti were reunited,
                    bringing balance and bliss to creation once again.
                  </li>
                </ul>
              </span>
              <strong className="text-xl font-mono">After Marriage</strong>
              <span className="text-zinc-900 font-light">
                <ul className="list-disc ml-4">
                  <li>
                    Shiva and Parvati settled on Mount Kailash, ruling as equals
                    — consciousness and energy united.
                  </li>
                  <li>
                    They had two divine sons:{" "}
                    <ul className="list-decimal ml-4">
                      <li>Kartikeya (Murugan) — the god of war.</li>
                      <li>Ganesha — the remover of obstacles.</li>
                    </ul>
                  </li>
                  <li>
                    Together, they symbolize family, balance, and spiritual
                    wholeness.
                  </li>
                </ul>
              </span>
            </p>
          </div>
        </div>
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
