import 'rxjs';
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/router';
import '@angular/forms';

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}