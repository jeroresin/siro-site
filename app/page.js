import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="home">
      <div>
        <h1>{site.title}</h1>
        <p className="sub">{site.subtitle}</p>
      </div>
    </main>
  );
}
