function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search startups..."
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3 text-white outline-none"
      />
    </div>
  );
}

export default SearchBar;