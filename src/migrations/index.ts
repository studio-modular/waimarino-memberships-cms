import * as migration_20250131_043129_initialise from './20250131_043129_initialise';
import * as migration_20250203_115735_moved from './20250203_115735_moved';
import * as migration_20250217_020643_home from './20250217_020643_home';

export const migrations = [
  {
    up: migration_20250131_043129_initialise.up,
    down: migration_20250131_043129_initialise.down,
    name: '20250131_043129_initialise',
  },
  {
    up: migration_20250203_115735_moved.up,
    down: migration_20250203_115735_moved.down,
    name: '20250203_115735_moved',
  },
  {
    up: migration_20250217_020643_home.up,
    down: migration_20250217_020643_home.down,
    name: '20250217_020643_home'
  },
];
