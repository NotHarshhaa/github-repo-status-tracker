import { REPOS_DATA } from '@/data/repos-data';

export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">About</h2>
      <p className="text-gray-700">{REPOS_DATA.about}</p>

      <h2 className="text-2xl font-semibold text-green-600 mb-4">Summary</h2>
      <p className="text-gray-700">{REPOS_DATA.summary}</p>
    </div>
  );
}
