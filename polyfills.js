import includes from 'core-js/library/fn/string/virtual/includes';
import repeat from 'core-js/library/fn/string/virtual/repeat';
import assign from 'core-js/library/fn/object/assign';

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)

String.prototype.includes = includes;
String.prototype.repeat = repeat;
Object.assign = assign;
