export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Next only rewrites basePath for Link and next/image, not raw anchors. */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
