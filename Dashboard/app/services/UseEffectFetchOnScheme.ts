import { useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";

/**
 * Triggers a callback when:
 * - The screen becomes focused (first time)
 * - OR the version changes
 * - OR any dependency in deps changes
 */
export function useEffectFetchOnScheme(
  version: number | null,
  callback: () => void,
  deps: any[] = []
) {
  const isFocused = useIsFocused();

  // Save callback ref to avoid re-trigger from callback change
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  // Track previous version
  const lastVersion = useRef<number | null>(null);

  // Track first screen focus
  const isFirstRun = useRef(true);

  // Track dependency changes
  const lastDeps = useRef<any[]>(deps);
  const depsChanged = lastDeps.current.some((d, i) => d !== deps[i]);
  lastDeps.current = deps;

  useEffect(() => {
    if (!isFocused) return;

    // 1️⃣ Run on first screen focus
    if (isFirstRun.current) {
      isFirstRun.current = false;
      lastVersion.current = version;
      callbackRef.current();
      return;
    }

    // 2️⃣ Run when any dependency changes
    if (depsChanged) {
      callbackRef.current();
      return;
    }

    // 3️⃣ Run when the version changes
    if (lastVersion.current !== version) {
      lastVersion.current = version;
      callbackRef.current();
      return;
    }
  }, [isFocused, version, depsChanged]);
}
