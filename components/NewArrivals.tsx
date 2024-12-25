import NewArrivalCard from "./NewArrivalCard";
import assassin from "@/public/images/NPCs/assassin.png";
import neoGuy from "@/public/images/NPCs/neon-guy.png";
import mafiaEngland from "@/public/images/NPCs/mafia-england.png";
import bassketballGirl from "@/public/images/NPCs/bassketball-girl.png";

export default function NewArrivals() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <NewArrivalCard image={assassin} name="ASSASSIN" />
        <NewArrivalCard image={neoGuy} name="NEON GUY" />
        <NewArrivalCard image={mafiaEngland} name="MAFIA ENGLAND" />
        <NewArrivalCard image={bassketballGirl} name="BASSKETBALL GIRL" />
      </div>
    </div>
  );
}
