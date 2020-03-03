import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (error) {
    yield put(
      ErrorActions.setError("Não foi possivel carregar os detalhes da playlist")
    );
    console.log(error);
  }
}
