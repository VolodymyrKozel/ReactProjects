import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
export default function Products() {
  const [searchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { name, maxPrice, inStock } = params;

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setSearchParams({ name: e.target.value })}
      />
      <p>Color: {color}</p>
      <p>Maximum price: {maxPrice}</p>
    </div>
  );
}
