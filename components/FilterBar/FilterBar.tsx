"use client";

import { useState } from "react";
import styles from "./FilterBar.module.css";
import { ChevronLeft, ChevronRight, ChevronDown, Check } from "lucide-react";

interface FilterBarProps {
  isFilterVisible: boolean;
  onToggleFilter: () => void;
  itemCount: number;
}

const SORT_OPTIONS = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE: HIGH TO LOW",
  "PRICE: LOW TO HIGH",
];

export default function FilterBar({
  isFilterVisible,
  onToggleFilter,
  itemCount,
}: FilterBarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  return (
    <div className={styles.filterBar}>
      <div className={styles.desktopLeftGroup}>
        <span className={styles.itemCount}>{itemCount} ITEMS</span>
        <button className={styles.filterToggle} onClick={onToggleFilter}>
          {isFilterVisible ? (
            <ChevronLeft size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
          {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <button className={styles.mobileFilterBtn} onClick={onToggleFilter}>
        FILTER
      </button>

      <div className={styles.mobileDivider}></div>

      <div className={styles.sortWrapper}>
        <button
          className={styles.sortTrigger}
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          {selectedSort}{" "}
          <ChevronDown
            size={16}
            className={`${styles.chevron} ${isSortOpen ? styles.rotate : ""}`}
          />
        </button>

        {isSortOpen && (
          <div className={styles.dropdownMenu}>
            {SORT_OPTIONS.map((option) => (
              <button
                key={option}
                className={`${styles.dropdownItem} ${
                  selectedSort === option ? styles.selected : ""
                }`}
                onClick={() => {
                  setSelectedSort(option);
                  setIsSortOpen(false);
                }}
              >
                {selectedSort === option && (
                  <Check size={16} className={styles.checkIcon} />
                )}
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
