import { useCallback, useEffect, useState } from "react";

/** Creates an object-URL preview for a chosen file and cleans it up automatically. */
export function useImagePreview() {
  const [preview, setPreview] = useState<{ url: string; name: string } | null>(null);

  useEffect(() => {
    if (!preview) return;
    return () => URL.revokeObjectURL(preview.url);
  }, [preview]);

  const choose = useCallback((file: File) => {
    setPreview({ url: URL.createObjectURL(file), name: file.name });
  }, []);

  const clear = useCallback(() => setPreview(null), []);

  return { preview, choose, clear };
}
