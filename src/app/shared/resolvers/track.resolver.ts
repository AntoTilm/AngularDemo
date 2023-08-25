import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TrackAPIService } from '../services/track-api.service';
import { map } from 'rxjs';
import { Track } from '../models/track';

export const trackResolver: ResolveFn<Track[]> = (route, state) => {
  const trackService = inject(TrackAPIService);
  return trackService.getAll().pipe(map((value) => { return value }));
};
