import * as migration_20250131_043129_initialise from './20250131_043129_initialise';

export const migrations = [
  {
    up: migration_20250131_043129_initialise.up,
    down: migration_20250131_043129_initialise.down,
    name: '20250131_043129_initialise'
  },
];
