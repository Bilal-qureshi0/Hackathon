export default function FilterBar() {
    return (
      <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-[#F4F4F4] border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-300 text-sm">Filter</button>
          <p className="text-sm text-gray-600">Showing 1–12 of 24 results</p>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm text-gray-600">
            Sort by:
          </label>
          <select id="sort" className="border border-gray-300 px-2 py-1 text-sm">
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    );
  }
  