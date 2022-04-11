import { useDispatch, useSelector } from "react-redux";

import { pause, play } from "store/slices/player.slice";

export const usePlayer = (trackToPlay: any) => {
  const dispatch = useDispatch();
  const { playing, track } = useSelector(state => state.player);

  console.log("ply", playing);

  const _play = () => {
    if (playing && trackToPlay?.name === track?.name) {
      dispatch(pause());
    } else {
      dispatch(play(trackToPlay));
    }
  };

  return [_play];
};
