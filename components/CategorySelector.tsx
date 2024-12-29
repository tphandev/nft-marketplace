import { Category } from "@/types/filters";

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: Category | undefined;
  onCategoryChange: (category: Category) => void;
}

export default function CategorySelector({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategorySelectorProps) {
  return (
    <div className="overflow-x-auto scrolling-touch custom-scrollbar max-w-[95vw]">
      <div className="flex gap-6 no-wrap min-w-min pb-2">
        {categories.map((category) => (
          <label
            key={category}
            className={`flex items-center space-x-2 cursor-pointer p-2 rounded ${
              category === (selectedCategory || "All")
                ? "bg-gradient"
                : "bg-gradient-secondary"
            } text-white`}
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={category === (selectedCategory || "All")}
              onChange={() => onCategoryChange(category)}
              className="form-radio hidden"
            />
            <span className="header-16-medium pr-2 whitespace-nowrap">
              {category}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
