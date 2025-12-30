import { useState } from 'react';
import { Flower2, Sparkles, Heart } from 'lucide-react';

interface SecretGardenProps {
  onSecretFound: (message: string) => void;
}

export default function SecretGarden({ onSecretFound }: SecretGardenProps) {
  const [bloomedFlowers, setBloomedFlowers] = useState<number[]>([]);
  const [foundFinalSecret, setFoundFinalSecret] = useState(false);

  const flowers = [
    { name: 'Rose of Love', message: 'For the love that never fades' },
    { name: 'Lily of Joy', message: 'For the joy you bring daily' },
    { name: 'Daisy of Hope', message: 'For your hopeful spirit' },
    { name: 'Tulip of Grace', message: 'For your graceful heart' },
    { name: 'Sunflower of Light', message: 'For being my sunshine' },
    { name: 'Lotus of Peace', message: 'For your calming presence' },
  ];

  const handleFlowerClick = (index: number) => {
    if (!bloomedFlowers.includes(index)) {
      setBloomedFlowers([...bloomedFlowers, index]);

      if (bloomedFlowers.length + 1 === flowers.length && !foundFinalSecret) {
        setTimeout(() => {
          onSecretFound('🌸 FINAL SECRET 🌸\n\nMothanike anni chooshanv explore chesinav kabbati I am so happy, there is more I need to see in you in a different versions a wife, a mother,grandmother, grand grandmother😂😂anni oddule just keep that spark always dont lose it finally \n Happy Birthday to the most amazing sister! I hope this year brings you everything you wish for and more. Love you to infinity! 💖✨🎂');
          setFoundFinalSecret(true);
        }, 1500);
      }
    }
  };

  return (
    <section className="py-20 px-4 min-h-screen bg-gradient-to-b from-purple-100 to-rose-200 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-rose-300 opacity-30 animate-pulse"
            size={16}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 mx-auto mb-4 text-rose-500 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4 font-serif">
            Secret Garden of Sisterhood
          </h2>
          <p className="text-rose-500 text-lg">
            🌸 Click each flower to make it bloom with love! 🌸
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {flowers.map((flower, index) => (
            <div
              key={index}
              onClick={() => handleFlowerClick(index)}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div
                className={`relative w-24 h-24 mb-4 transition-all duration-700 ${
                  bloomedFlowers.includes(index)
                    ? 'scale-125 rotate-12'
                    : 'scale-100 group-hover:scale-110'
                }`}
              >
                <Flower2
                  className={`w-24 h-24 transition-all duration-700 ${
                    bloomedFlowers.includes(index)
                      ? 'text-pink-500 fill-pink-300'
                      : 'text-rose-300 group-hover:text-rose-400'
                  }`}
                  strokeWidth={1.5}
                />

                {bloomedFlowers.includes(index) && (
                  <div className="absolute inset-0 animate-ping">
                    <Flower2 className="w-24 h-24 text-pink-400 opacity-50" />
                  </div>
                )}
              </div>

              <div className={`text-center transition-all duration-500 ${
                bloomedFlowers.includes(index) ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
              }`}>
                <h3 className="text-rose-700 font-bold mb-1">{flower.name}</h3>
                <p className="text-rose-500 text-sm">{flower.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg">
            <p className="text-rose-600 text-lg font-medium">
              🌺 Garden Progress: {bloomedFlowers.length}/{flowers.length} flowers bloomed 🌺
            </p>
          </div>

          {bloomedFlowers.length === flowers.length && (
            <div className="mt-8 animate-fade-in">
              <p className="text-2xl md:text-3xl font-bold text-rose-600 mb-4 font-serif">
                The Garden is Complete! 🎉
              </p>
              <p className="text-rose-500 text-lg">
                Just like this garden, our bond grows more beautiful every year! 💕
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center text-rose-400 text-sm">
          <p className="animate-pulse">
            💡 Pro tip: Try typing "sister" on your keyboard for one more secret!
          </p>
        </div>
      </div>
    </section>
  );
}
