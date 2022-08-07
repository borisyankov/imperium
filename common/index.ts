import civilised from './civilised/';
import fame from './fame/';
import regions from './regions/';
import tributaries from './tributaries/';
import uncivilised from './uncivilised/';
import unrest from './unrest/';

export * from './unrest/unr01';
export * from './unrest/unr02';
export * from './unrest/unr03';
export * from './unrest/unr04';
export * from './unrest/unr05';
export * from './unrest/unr06';
export * from './unrest/unr07';
export * from './unrest/unr08';
export * from './unrest/unr09';
export * from './unrest/unr10';
export * from './unrest/unr11';
export * from './unrest/unr12';

export default [...civilised, ...fame, ...regions, ...tributaries, ...uncivilised, ...unrest];