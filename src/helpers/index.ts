export const getImageUrl = (id: string) => "https://i.scdn.co/image/" + id;

export const getArtist = (artists: []) => {
  const artistNames = artists.map((artist: any) => artist?.name);

  return artistNames.join(", ");
};
