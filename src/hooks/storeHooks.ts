import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@types';

/** Typed variant of the standard Redux dispatch hook. */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/** Typed variant of the standard Redux selector hook. */
export const useAppSelector = useSelector.withTypes<RootState>();
