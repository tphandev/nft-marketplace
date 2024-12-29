import {
  FilterParams,
  PriceRange,
  Theme,
  Tier,
  SortOption,
} from "@/types/filters";
import PricingRange from "./PriceRange";
import SearchInput from "./SearchInput";
import Select from "./Select";
import { THEMES, TIERS, SORT_OPTIONS } from "@/constants/filter";
import { Button, Drawer } from "antd";
import { PrimaryButton } from "./PrimaryButton";
import { CloseCircleFilled } from "@ant-design/icons";

const DEFAULT_FILTERS: FilterParams = {
  q: "",
  priceRange: undefined,
  tier: undefined,
  theme: undefined,
  sort: "createdAt_desc",
};

interface FilterPanelProps {
  filters: FilterParams;
  onFilterChange: (filters: FilterParams) => void;
  isMobileView?: boolean;
  onClose?: () => void;
}

export default function FilterPanel({
  filters,
  onFilterChange,
  isMobileView,
  onClose,
}: FilterPanelProps) {
  const handlePriceRangeChange = (priceRange: PriceRange) => {
    onFilterChange({ ...filters, priceRange });
  };

  const handleSearchChange = (searchTerm: string) => {
    onFilterChange({ ...filters, q: searchTerm });
  };

  const handleTierChange = (tier: Tier) => {
    onFilterChange({ ...filters, tier: tier === "All" ? undefined : tier });
  };

  const handleThemeChange = (theme: Theme) => {
    onFilterChange({ ...filters, theme: theme === "All" ? undefined : theme });
  };

  const handleSortChange = (sort: SortOption) => {
    onFilterChange({ ...filters, sort });
  };

  const handleResetFilters = () => {
    onFilterChange(DEFAULT_FILTERS);
  };

  const filterContent = (
    <div className="space-y-10">
      <SearchInput value={filters.q} onSearch={handleSearchChange} />
      <PricingRange
        key={`${filters.priceRange?.min}-${filters.priceRange?.max}`}
        initialValue={filters.priceRange || { min: undefined, max: undefined }}
        onChange={handlePriceRangeChange}
      />
      <div className="flex flex-col space-y-6">
        <Select
          label="TIER"
          onChange={handleTierChange}
          options={TIERS.map((item) => ({ label: item, value: item }))}
          value={filters.tier || "All"}
        />
        <Select
          label="THEME"
          onChange={handleThemeChange}
          options={THEMES.map((item) => ({ label: item, value: item }))}
          value={filters.theme || "All"}
        />
        <Select
          label="SORT BY"
          onChange={handleSortChange}
          options={SORT_OPTIONS}
          value={filters.sort || "createdAt_desc"}
        />
      </div>
      <Button
        type="link"
        onClick={handleResetFilters}
        style={{ color: "white" }}
        icon={<CloseCircleFilled style={{ color: "#FBC625" }} />}
      >
        Reset filter
      </Button>
    </div>
  );

  if (isMobileView) {
    return (
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span>Search & Filter</span>
            <PrimaryButton onClick={onClose}>Close</PrimaryButton>
          </div>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={true}
        style={{
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
      >
        {filterContent}
      </Drawer>
    );
  }

  return <div className="w-80">{filterContent}</div>;
}
