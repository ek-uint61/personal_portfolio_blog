import React, { useState } from 'react';
import { EXTRA_LINKS } from '@/constants';

type ModalContentProps = {
  onClose: () => void;
};

const items = [
  {
    category: 'General',
    icon: (
<svg fill="#000000" height="20" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  enable-background="new 0 0 512 512">
  <g>
    <path d="m491,94.4l-73.8-74c-12.5-12.5-35.4-12.5-47.8,0l-157,157.4c-7.3,6.3-10.4,14.6-10.4,24-8.8,0-17.7,3.1-23.9,9.4l-157.1,157.4c-7.3,6.3-10.4,14.6-10.4,24 0,9.4 4.2,17.7 10.4,24l73.8,74c6.2,7.3 14.6,10.4 23.9,10.4 9.4,0 17.7-4.2 23.9-10.4l157-157.4c7-6 10.2-14 10.4-22.9 8.3,0 16.6-4.2 23.9-10.4l157-157.4c12.2-11.8 13.4-33.8 0.1-48.1zm-204.8,224.2l-157.1,157.4c-5.2,5.2-14.6,5.2-19.8,0l-73.8-74c-4.7-4.6-6-12.6 0-18.8l157-156.4c5.8-5.7 14.8-6 19.8-1l29.5,29.6-52.8,53 14.7,14.7 52.8-53 29.6,29.7c6.5,6.9 5,14 0.1,18.8zm191.3-190.8l-157,157.4c-5.2,5.2-14.6,5.2-19.8,0l-29.6-29.7 51.7-51.9-14.7-14.7-51.7,51.9-29.5-29.6c-4.8-4.3-5.3-14.4 0-18.8l157-157.4c5.5-5.2 14-5.6 19.8,0l73.8,74c5.6,6.1 3.6,15.6 0,18.8z"/>
  </g>
</svg>    ),
    text: 'Source code',
    href: EXTRA_LINKS.source.href
  },
  {
    category: 'Links',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
      <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
      </svg>
    ),
    text: 'GitHub',
    href: EXTRA_LINKS.github.href
  },
  
  
  {
    category: 'Links',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="20" height="20"   viewBox="0 0 50 50">
      <path d="M15 14c6.065 0 11 4.935 11 11s-4.935 11-11 11S4 31.065 4 25 8.935 14 15 14M15 12C7.82 12 2 17.82 2 25s5.82 13 13 13 13-5.82 13-13S22.18 12 15 12L15 12zM35.5 15c2.124 0 4.5 4.277 4.5 10s-2.376 10-4.5 10S31 30.723 31 25 33.376 15 35.5 15M35.5 13c-3.59 0-6.5 5.373-6.5 12s2.91 12 6.5 12S42 31.627 42 25 39.09 13 35.5 13L35.5 13zM46.377 15.667h.005H46.377M45.5 18.577C45.78 20.158 46 22.327 46 25s-.22 4.842-.5 6.423C45.22 29.842 45 27.673 45 25S45.22 20.158 45.5 18.577M45.5 14c-1.381 0-2.5 4.925-2.5 11s1.119 11 2.5 11S48 31.075 48 25 46.881 14 45.5 14L45.5 14z"></path>
      </svg>
    ),
    text: 'Medium',
    href: EXTRA_LINKS.medium.href
  },
  {
    category: 'Links',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"   width="20" height="20"  viewBox="0 0 32 32">
      <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
      </svg>
    ),
    text: 'LinkedIn',
    href: EXTRA_LINKS.linkedin.href
  },
  {
    category: 'Links',
    icon: (
      <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="20" height="20"   viewBox="0 0 50 50">
      <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
      </svg>
    ),
    text: 'X (Twitter)',
    href: EXTRA_LINKS.twitter.href
  },
  {
    category: 'Links',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"   width="20" height="20"  viewBox="0 0 50 50">
      <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
      </svg>
    ),
    text: "Instagram",
    href: EXTRA_LINKS.instagram.href
  },

  {
    category: 'Links',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"   width="20" height="20"   viewBox="0 0 50 50">
<path d="M 25 1.9902344 C 12.266865 1.9902344 1.9902344 12.266865 1.9902344 25 C 1.9902344 37.733135 12.266865 48.009766 25 48.009766 C 37.733135 48.009766 48.009766 37.733135 48.009766 25 C 48.009766 12.266865 37.733135 1.9902344 25 1.9902344 z M 25 4.0097656 C 36.650865 4.0097656 45.990234 13.349135 45.990234 25 C 45.990234 36.650865 36.650865 45.990234 25 45.990234 C 13.349135 45.990234 4.0097656 36.650865 4.0097656 25 C 4.0097656 13.349135 13.349135 4.0097656 25 4.0097656 z M 21.933594 14 C 16.000841 14 11.536373 15.027452 11.318359 15.078125 L 11.316406 15.078125 L 11.316406 15.080078 C 9.7155259 15.453865 8.7059511 17.079339 9.078125 18.679688 C 9.450288 20.281477 11.075526 21.288538 12.675781 20.921875 L 12.683594 20.921875 L 12.689453 20.919922 C 12.575843 20.947632 12.739283 20.908042 12.859375 20.882812 C 12.979472 20.857582 13.156783 20.822622 13.386719 20.779297 C 13.846591 20.692637 14.514202 20.576349 15.345703 20.460938 C 17.008724 20.230114 19.325722 20 21.933594 20 L 21.996094 20 C 26.308988 20.0059 32.506391 20.667785 37.480469 23.587891 L 37.482422 23.587891 L 37.482422 23.589844 C 37.954848 23.865283 38.481566 24 38.998047 24 C 40.027098 24 41.03278 23.462606 41.587891 22.517578 C 42.4204 21.099781 41.937951 19.245598 40.519531 18.412109 C 34.27637 14.746763 27.008921 14.007143 22.003906 14 L 21.933594 14 z M 21.933594 16 L 22.003906 16 C 26.808831 16.007 33.751684 16.758455 39.505859 20.136719 C 39.99344 20.42323 40.148772 21.019657 39.863281 21.505859 C 39.672394 21.830832 39.340995 22 38.998047 22 C 38.827923 22 38.658397 21.95814 38.494141 21.863281 L 38.490234 21.861328 C 33.0131 18.647428 26.504103 18.006131 21.998047 18 L 21.933594 18 C 19.208465 18 16.806263 18.239792 15.072266 18.480469 C 14.205267 18.600807 13.504003 18.72047 13.015625 18.8125 C 12.771436 18.85852 12.58045 18.8978 12.447266 18.925781 C 12.322091 18.952081 12.331069 18.948276 12.230469 18.972656 C 11.674724 19.099993 11.153228 18.776774 11.025391 18.226562 C 10.897698 17.677484 11.221452 17.156242 11.769531 17.027344 C 11.921515 16.992022 16.232346 16 21.933594 16 z M 21.992188 22.001953 C 19.485831 22.022933 17.321981 22.257131 15.742188 22.498047 C 14.162394 22.738963 13.265055 22.956785 12.976562 23.039062 C 11.545298 23.4449 10.697078 24.961798 11.103516 26.394531 C 11.511255 27.828702 13.027844 28.672719 14.458984 28.265625 L 14.464844 28.263672 L 14.46875 28.263672 C 14.49469 28.257572 14.53521 28.248108 14.587891 28.236328 C 14.69326 28.212768 14.848723 28.180835 15.048828 28.140625 C 15.449038 28.060205 16.026057 27.951569 16.740234 27.84375 C 18.168588 27.628113 20.142467 27.410079 22.322266 27.390625 C 26.185509 27.356565 30.567753 27.924285 34.84375 30.587891 C 35.289626 30.867749 35.792755 31.001953 36.28125 31.001953 C 37.187002 31.001953 38.077741 30.54265 38.589844 29.722656 C 39.378024 28.458742 38.985326 26.765566 37.720703 25.978516 C 32.336064 22.623808 26.560664 21.964096 21.992188 22.001953 z M 22.009766 24 C 26.371289 23.96386 31.724703 24.598489 36.664062 27.675781 C 37.00944 27.890731 37.108398 28.317977 36.892578 28.664062 C 36.752681 28.88807 36.521498 29.001953 36.28125 29.001953 C 36.149745 29.001953 36.024374 28.968673 35.90625 28.894531 L 35.904297 28.892578 C 31.213033 25.969431 26.380741 25.35469 22.304688 25.390625 C 20.002485 25.411175 17.940802 25.640824 16.441406 25.867188 C 15.691708 25.980369 15.083306 26.093481 14.654297 26.179688 C 14.439792 26.222787 14.270205 26.258358 14.150391 26.285156 C 14.090481 26.298556 14.043261 26.309979 14.007812 26.318359 C 13.972362 26.326759 14.028242 26.308563 13.902344 26.345703 L 13.912109 26.341797 C 13.529249 26.450703 13.137605 26.235485 13.027344 25.847656 C 12.915932 25.454918 13.129707 25.073722 13.521484 24.962891 L 13.523438 24.962891 C 13.511947 24.966191 14.540762 24.703693 16.042969 24.474609 C 17.545141 24.245573 19.619122 24.020016 22.009766 24 z M 22.5 29.001953 C 18.141114 29.002953 14.914292 30.062424 14.708984 30.130859 C 13.409991 30.563124 12.696085 31.994504 13.128906 33.292969 C 13.561895 34.591934 14.993351 35.312698 16.294922 34.871094 L 16.279297 34.876953 C 16.379482 34.844753 16.438799 34.823793 16.742188 34.742188 C 17.045575 34.660578 17.491802 34.551256 18.048828 34.441406 C 19.16288 34.221707 20.724875 34.002431 22.5 34.001953 C 26.836932 34.000989 29.799021 35.039503 32.113281 36.582031 L 32.113281 36.580078 C 32.537053 36.863144 33.023236 37.001953 33.498047 37.001953 C 34.304696 37.001953 35.102812 36.603444 35.580078 35.886719 C 36.338631 34.748062 36.024808 33.181703 34.886719 32.421875 C 31.24152 29.992096 27.140106 28.999891 22.5 29.001953 z M 22.5 31.001953 C 26.859894 31.000053 30.494548 31.897723 33.777344 34.085938 C 34.015629 34.246398 34.075032 34.5406 33.916016 34.779297 C 33.815282 34.930571 33.661397 35.001953 33.498047 35.001953 C 33.400857 35.001953 33.310884 34.976899 33.222656 34.917969 L 33.222656 34.916016 C 30.588916 33.160587 27.163068 32.000917 22.5 32.001953 C 20.561125 32.002475 18.875557 32.239215 17.662109 32.478516 C 17.055386 32.598166 16.565205 32.718405 16.222656 32.810547 C 15.880107 32.902687 15.581784 33.000359 15.667969 32.972656 L 15.660156 32.974609 L 15.652344 32.976562 C 15.385915 33.066963 15.116402 32.933192 15.025391 32.660156 C 14.934381 32.387121 15.069741 32.117683 15.341797 32.027344 C 15.400487 32.007784 18.468886 31.002914 22.5 31.001953 z"></path>
</svg>
    ),
    text: 'Spotify',
    href: EXTRA_LINKS.spotify.href
  },

  {
    category: 'Links',
    icon: (
      <svg  width="20" height="20"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.9007 13.804C14.9007 14.4463 15.1703 14.7674 15.7096 14.7674C16.2733 14.7674 16.7267 14.4589 17.0699 13.8418C17.3885 13.2625 17.5478 12.4943 17.5478 11.5372C17.5478 9.62298 17.0086 8.11806 15.9301 7.02243C14.8517 5.93939 13.4485 5.39787 11.7206 5.39787C9.8701 5.39787 8.36275 6.00236 7.19853 7.21133C6.03431 8.44549 5.45221 10.0449 5.45221 12.0094C5.45221 13.9992 6.02819 15.5923 7.18015 16.7887C8.34436 17.9976 9.84559 18.6021 11.6838 18.6021C13.6201 18.6021 15.2561 18.0858 16.5919 17.0531L17.3272 18.2432C16.6532 18.7847 15.7831 19.2192 14.7169 19.5466C13.7243 19.8489 12.7316 20 11.739 20C9.43505 20 7.56618 19.2507 6.13235 17.7521C4.71078 16.266 4 14.3833 4 12.1039C4 9.82448 4.71078 7.90397 6.13235 6.34239C7.54167 4.78079 9.34927 4 11.5551 4C13.7978 4 15.5931 4.68634 16.9412 6.05903C18.3137 7.4695 19 9.28926 19 11.5183C19 12.8028 18.7059 13.8796 18.1176 14.7485C17.4681 15.7056 16.6471 16.1842 15.6544 16.1842C15.1029 16.1842 14.6311 16.0457 14.239 15.7686C13.7855 15.4664 13.4976 15.0508 13.375 14.5218C12.8971 15.4538 12.076 15.9197 10.9118 15.9197C9.88235 15.9197 9.05515 15.5545 8.43015 14.8241C7.79289 14.1189 7.47427 13.1806 7.47427 12.0094C7.47427 10.8383 7.79289 9.88745 8.43015 9.15702C9.07966 8.4392 9.91912 8.08028 10.9485 8.08028C12.0147 8.08028 12.7929 8.47698 13.2831 9.27037V8.17473H14.9007V13.804ZM11.1691 14.5218C11.7574 14.5218 12.2598 14.2952 12.6765 13.8418C13.0809 13.401 13.2831 12.8532 13.2831 12.1983V11.8205C13.2831 11.1657 13.0809 10.6116 12.6765 10.1582C12.2598 9.70484 11.7574 9.47816 11.1691 9.47816C10.5564 9.47816 10.06 9.71114 9.68015 10.1771C9.30025 10.6431 9.11029 11.2538 9.11029 12.0094C9.11029 12.7776 9.30025 13.3821 9.68015 13.8229C10.06 14.2889 10.5564 14.5218 11.1691 14.5218Z" fill="#1F2328"/>
      </svg>
    ),
    text: 'Resume',
    href: EXTRA_LINKS.resume.href
  },

];

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md mx-auto">
      <button
        className="text-sm absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center justify-center"
        onClick={onClose}
        aria-label="Close"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <input
        type="text"
        placeholder="type a search"
        className="w-full p-2 mb-4 border rounded text-xs bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="space-y-2">
        {['General', 'Links'].map((category, index) => (
          <React.Fragment key={category}>
            <h2 className="text-xs font-light text-gray-800 dark:text-gray-300">{category}</h2>
            {filteredItems
              .filter(item => item.category === category)
              .map(item => (
                <a
                  key={item.text}
                  href={item.href}
                  target='_blank'
                  className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-sm font-normal text-gray-800 dark:text-gray-200"
                >
                  <span className="text-base dark:bg-white rounded-full">{item.icon}</span>
                  <span className="inline-flex items-center gap-2 text-xs font-medium">{item.text}</span>
                </a>
              ))}
            {index < ['General', 'Links'].length - 1 && <hr className="my-2 border-gray-200 dark:border-gray-700" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ModalContent;
