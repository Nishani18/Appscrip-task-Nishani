"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./FilterSidebar.module.css";

const filters = [
  { id: "ideal", name: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { id: "occasion", name: "OCCASION", options: ["Casual", "Formal", "Party"] },
  { id: "work", name: "WORK", options: ["Office", "Field", "Remote"] },
  {
    id: "fabric",
    name: "FABRIC",
    options: ["Cotton", "Silk", "Wool", "Linen"],
  },
  { id: "segment", name: "SEGMENT", options: ["Premium", "Budget"] },
  {
    id: "suitable",
    name: "SUITABLE FOR",
    options: ["Summer", "Winter", "All Season"],
  },
  { id: "raw", name: "RAW MATERIALS", options: ["Organic", "Synthetic"] },
  { id: "pattern", name: "PATTERN", options: ["Solid", "Striped", "Checked"] },
];

export default function FilterSidebar() {
  // Tracking open state for each filter section
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    ideal: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.customizable}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.checkboxText}>CUSTOMIZABLE</span>
        </label>
      </div>

      {filters.map((filter) => (
        <div key={filter.id} className={styles.filterSection}>
          <div
            className={styles.filterHeader}
            onClick={() => toggleSection(filter.id)}
          >
            <div className={styles.filterTitleGroup}>
              <span className={styles.filterName}>{filter.name}</span>
              <span className={styles.filterState}>All</span>
            </div>
            {openSections[filter.id] ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>

          {openSections[filter.id] && (
            <div className={styles.filterContent}>
              <button className={styles.unselectAll}>Unselect all</button>
              {filter.options.map((option) => (
                <label key={option} className={styles.optionLabel}>
                  <input type="checkbox" className={styles.optionCheckbox} />
                  <span className={styles.optionText}>{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
