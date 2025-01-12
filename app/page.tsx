import Advantages from "./ui/main/advantages";
import Services from "./ui/main/services";
import Main from "./ui/main/main";

export default function Home() {
  return (
    <div>
      <Main></Main>
      {/* Problems block */}
      <div className="h-screen border"></div>
      <Services></Services>
      <Advantages></Advantages>
      {/* Numbers block */}
      <div className="h-screen border"></div>
      {/* FAQ */}
      <div className="h-screen border"></div>
    </div>
  );
}