import NewArrivalCard from "./NewArrivalCard";
import assassin from "@/public/images/NPCs/assassin.png";
import neoGuy from "@/public/images/NPCs/neon-guy.png";
import mafiaEngland from "@/public/images/NPCs/mafia-england.png";
import bassketballGirl from "@/public/images/NPCs/bassketball-girl.png";

export default function NewArrivals() {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 lg:gap-20 max-w-6xl mx-auto">
        <NewArrivalCard image={assassin} name="ASSASSIN" />
        <NewArrivalCard image={neoGuy} name="NEON GUY" />
        <NewArrivalCard image={mafiaEngland} name="MAFIA ENGLAND" />
        <NewArrivalCard image={bassketballGirl} name="BASSKETBALL GIRL" />
      </div>
    </div>
  );
}
