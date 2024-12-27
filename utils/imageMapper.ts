import assassin from "@/public/images/NPCs/assassin.png";
import neoGuy from "@/public/images/NPCs/neon-guy.png";
import mafiaEngland from "@/public/images/NPCs/mafia-england.png";
import bassketballGirl from "@/public/images/NPCs/bassketball-girl.png";
import theDj from "@/public/images/NPCs/the-dj.png";
import { StaticImageData } from "next/image";

const TOTAL_AVAILABLE_IMAGES = 5;
const imageMap = {
  1: assassin,
  2: neoGuy,
  3: mafiaEngland,
  4: bassketballGirl,
  5: theDj,
};

export const getImageSource = (imageId: number): StaticImageData => {
  const normalizedId = ((imageId - 1) % TOTAL_AVAILABLE_IMAGES) + 1;
  return imageMap[normalizedId as keyof typeof imageMap];
};
