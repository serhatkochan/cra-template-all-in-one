import { createSelector } from 'reselect';

const selectSystem = (state) => state.system;

const SystemLanguageSelector = createSelector(
  [selectSystem],
  (system) => system.language,
);

export { SystemLanguageSelector };
