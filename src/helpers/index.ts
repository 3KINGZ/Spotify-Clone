export const getImageUrl = (id: string) => "https://i.scdn.co/image/" + id;

export const getArtist = (artists: []) => {
  const artistNames = artists?.map((artist: any) => artist?.name);

  return artistNames?.join(", ");
};

export const generateGreeting = () => {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 17) {
    return "Good evening";
  } else if (hour >= 12 && hour <= 17) {
    return "Good afternoon";
  } else {
    return "Good morning";
  }
};
