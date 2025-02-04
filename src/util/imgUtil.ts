import type { Option } from "../types/option";
import type { Slot } from "../types/slot";

const imagesBySlot: Record<Slot, Record<string, any>> = {
  EYES: import.meta.glob("/src/assets/eyes/*", { eager: true }) as Record<
    string,
    any
  >,
  MOUTH: import.meta.glob("/src/assets/mouth/*", { eager: true }) as Record<
    string,
    any
  >,
  HAIR: import.meta.glob("/src/assets/hair/*", { eager: true }) as Record<
    string,
    any
  >,
  TOP: import.meta.glob("/src/assets/top/*", { eager: true }) as Record<
    string,
    any
  >,
  OUTERWEAR: import.meta.glob("/src/assets/outerwear/*", {
    eager: true,
  }) as Record<string, any>,
  DRESS: import.meta.glob("/src/assets/dress/*", { eager: true }) as Record<
    string,
    any
  >,
  PANTS: import.meta.glob("/src/assets/pants/*", { eager: true }) as Record<
    string,
    any
  >,
  SOCK: import.meta.glob("/src/assets/sock/*", { eager: true }) as Record<
    string,
    any
  >,
  SHOE: import.meta.glob("/src/assets/shoe/*", { eager: true }) as Record<
    string,
    any
  >,
  UNDERGARMENT: import.meta.glob("/src/assets/undergarment/*", {
    eager: true,
  }) as Record<string, any>,
  BASE_BODY: import.meta.glob("/src/assets/base_body/*", {
    eager: true,
  }) as Record<string, any>,
  BACKGROUND_ELEMENT: import.meta.glob("/src/assets/background_element/*", {
    eager: true,
  }) as Record<string, any>,
  BACKGROUND: import.meta.glob("/src/assets/background/*", {
    eager: true,
  }) as Record<string, any>,
  ACCESSORY: import.meta.glob("/src/assets/accessory/*", {
    eager: true,
  }) as Record<string, any>,
};

const iconImages: Record<string, any> = import.meta.glob("/src/assets/icon/*");

function resolveFromImages(
  images: Record<string, any>,
  fileName: string | undefined,
): string {
  if (!fileName) return "";

  const matchingKey = Object.keys(images).find((key) =>
    key.endsWith(`/${fileName}`),
  );

  return matchingKey ? images[matchingKey]?.default || images[matchingKey] : "";
}

export function resolveIconImage(slot: Slot): string {
  return resolveFromImages(iconImages, slot.toLowerCase());
}

export function resolveImage(option: Option | undefined): string {
  if (!option) return "";

  const images = imagesBySlot[option.slot];
  return images ? resolveFromImages(images, option.asset) : "";
}
