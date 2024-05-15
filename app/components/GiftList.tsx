"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Gift {
  id: number;
  name: string;
  reserved: boolean;
}

const GiftList = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [selectedGift, setSelectedGift] = useState<number | null>(null);

  useEffect(() => {
    fetchGifts();
  }, []);

  const fetchGifts = async () => {
    const res = await axios.get("/api/gifts");
    setGifts(res.data);
  };

  const reserveGift = async (giftId: number) => {
    const res = await axios.post("/api/reserve", { id: giftId });
    if (res.status === 200) {
      fetchGifts();
    }
  };

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Lista Prezentów</h2>
      <ul>
        {gifts.map((gift) => (
          <li key={gift.id} className="mb-2">
            <label>
              <input
                type="checkbox"
                disabled={gift.reserved}
                onChange={() => setSelectedGift(gift.id)}
                className="mr-2"
              />
              {gift.name} {gift.reserved && "(Zarezerwowany)"}
            </label>
            {selectedGift === gift.id && (
              <div className="mt-2">
                <button
                  onClick={() => reserveGift(gift.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Tak, na pewno
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftList;
