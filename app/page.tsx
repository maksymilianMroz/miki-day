import Invitation from "./components/Invitation";

const GiftList = dynamic(() => import("./components/GiftList"), {
  ssr: false,
});

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Invitation />
      <GiftList />
    </main>
  );
}
