import React from 'react';
import { Twitter, Building2, Monitor, BedDouble } from 'lucide-react';

function App() {
  const handleContactClick = () => {
    window.open('https://twitter.com/messages/compose?recipient_id=NANG_TWITTER_ID', '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">YC Founder Short-Term Housing in SF 🏠</h1>
        <p className="text-gray-600">
          by{' '}
          <a href="https://x.com/not_nang" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Nang (YC F24)
          </a>
          <br />
          <a href="https://trypear.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Blog-post style website made with PearAI
          </a>
        </p>
      </header>

      <main className="prose prose-lg">
        <p className="text-lg mb-6">
          Hey YC founder! I'm offering a short term subleases for fully furnished 2 bed 2 Bath apartment
          in Avalon Dogpatch for the upcoming batch. This apartment is by far the best for YC (location, amenities,
          and quality of apt) - ask around about this! And the unit is on the top floor.
        </p>

        <p className="text-lg mb-6">
          Anyways, even if you're staying in SF, I don't think anyone should stay in Dogpatch after the batch. It kind of sucks.
          This short term lease is what I would've wanted if I did YC again.
        </p>

        <div className="my-8">
          <img
            src="/avalonshorttermhousing/2024-03-12.jpg"
            alt="Avalon Dogpatch Exterior"
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-gray-600" />
            <span>Avalon Dogpatch - 5 min walk to YC</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-gray-600" />
            <span>2 Bed 2 Bath, 1200 sq. ft.</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-gray-600" />
            <span>2 desks, 2 monitors, fast wifi </span>
          </div>
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-gray-600" />
            <span>2 beds, fully furnished</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-gray-600" />
            <span>5th (highest) floor</span>
          </div>
        </div>

        <p className="mb-6">
          3-month term available - just stay for the batch. All utilities included. Building has a 24/7 gym,
          package service, and secure access. Perfect for YC founders who want a hassle-free move. {' '}
          <a
            href="https://drive.google.com/drive/folders/1IvZyG8IuRfdEMYxz-Et1apeLjmwRfw-Q?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View all photos/videos of the apartment here
          </a>
        </p>

        <button
          onClick={handleContactClick}
          className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition"
        >
          <Twitter className="w-5 h-5" />
          Interested? DM me on X
        </button>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Quick FAQ:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>3-month short-term lease (you get to leave Dogpatch scot-free after your batch)</li>
            <li>All utilities + internet included</li>
            <li>No need to worry about moving in and out furniture, 24/7 Nice Gym Included</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;