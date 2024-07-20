document.addEventListener('DOMContentLoaded', () => {
    const haikus = [
      ["An old silent pond", "A frog jumps into the pond—", "Splash! Silence again."],
      ["Autumn moonlight—", "a worm digs silently", "into the chestnut."],
      ["In the twilight rain", "these brilliant-hued hibiscus—", "A lovely sunset."],
      ["The light of a candle", "is transferred to another candle—", "spring twilight"],
      ["Over the wintry", "forest, winds howl in rage", "with no leaves to blow."]
    ];
  
    const button = document.getElementById('generateHaiku');
    const haikuDisplay = document.getElementById('haikuDisplay');
  
    button.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * haikus.length);
      const selectedHaiku = haikus[randomIndex];
      haikuDisplay.innerText = `${selectedHaiku[0]}\n${selectedHaiku[1]}\n${selectedHaiku[2]}`;
    });
  });
  