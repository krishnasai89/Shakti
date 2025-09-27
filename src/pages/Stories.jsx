import { useState } from "react";
import STORIES from "../assets/stories.json";

const Stories = () => {
  const [openId, setOpenId] = useState(null);
  return (
    <div>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Stories</h2>
        <div className="space-y-4">
          {STORIES.map((s) => (
            <article
              key={s.id}
              className="border rounded-md p-4 bg-white shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.excerpt}</p>
                </div>
                <div>
                  <button
                    onClick={() => setOpenId(openId === s.id ? null : s.id)}
                    className="text-sm px-3 py-1 rounded bg-orange-100"
                  >
                    {openId === s.id ? "Hide" : "Read"}
                  </button>
                </div>
              </div>
              {openId === s.id && (
                <div className="mt-3 text-gray-700">
                  <p>{s.content}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stories;
