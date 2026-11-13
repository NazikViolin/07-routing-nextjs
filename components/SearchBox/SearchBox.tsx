"use client";

import type { ChangeEvent } from "react";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onChange: (value: string) => void;
}

export default function SearchBox({ onChange }: SearchBoxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={css.input}
      type="text"
      name="search"
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}
