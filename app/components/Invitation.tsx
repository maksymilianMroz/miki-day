import Image from "next/image";

const Invitation = () => {
  return (
    <div className="text-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Zaproszenie na Urodziny</h1>
      <p className="mb-4">
        Zapraszamy serdecznie na pierwsze urodziny Bącziego!
      </p>
      <Image
        src="/path-to-your-image.jpg"
        alt="birthday"
        width={600}
        height={400}
      />
    </div>
  );
};

export default Invitation;
