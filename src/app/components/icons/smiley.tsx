interface SmileyProps  {
  width?: number;
  height?: number;
  favicon?: boolean;
};
export const Smiley = ({width = 32, height = 32, favicon = false}: SmileyProps) => (
  <svg
    width={width}
    height={height} 
    viewBox="0 0 96.916924 96.890442"
    version="1.1"
    id="svg1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="layer1" transform="translate(-4.7624984,-27.78125)">
      <path
        d="M 53.260647,27.781274 C 26.590647,27.754816 4.7889808,49.503565 4.7625225,76.147107 4.7360642,102.84356 26.511272,124.67169 53.20773,124.67169 c 26.802292,0 48.47167,-21.66938 48.47167,-48.41875 C 101.7058,49.503565 80.03648,27.807732 53.260647,27.781274 Z"
        id="path1"
        style={{ fill: favicon ? '#000': 'var(--primary)', strokeWidth: 0.264583 }}
      />
      <path
        className="st0"
        d="M 8.3079391,76.25294 C 8.2550225,51.48794 28.389814,31.353149 53.234189,31.326691 78.052105,31.300232 98.13398,51.382107 98.13398,76.332315 98.160438,100.59461 78.634188,120.7294 53.922105,121.09981 28.575022,121.49669 8.3343975,101.07086 8.3079391,76.25294 Z m 73.2366659,9.525 c -3.518958,13.573125 -15.319375,24.23583 -30.056666,23.28333 -13.335,-0.84666 -23.33625,-11.350622 -26.273125,-22.992288 0.423333,-0.211667 0.899583,-0.423334 1.296458,-0.687917 0.714375,-0.47625 0.978959,-1.42875 0.608542,-2.2225 -0.343958,-0.767292 -1.27,-1.296458 -2.090208,-0.9525 -1.799167,0.740833 -3.571875,1.561042 -5.318125,2.407708 -0.740834,0.370417 -0.9525,1.11125 -0.767292,1.931459 0.185208,0.767291 0.740833,1.243541 1.508125,1.322916 0.423333,0.05292 0.899583,-0.105833 1.375833,-0.185208 0.07937,0.238125 0.185209,0.502708 0.291042,0.767292 1.481667,4.7625 3.757083,9.101666 7.064375,12.805828 8.837083,9.89542 19.764375,13.81125 32.676041,10.18646 11.27125,-3.175 18.335625,-11.1125 22.330833,-21.933955 0.264584,-0.714375 0.47625,-1.42875 0.740834,-2.169583 0.343958,0.132291 0.582083,0.211666 0.820208,0.291041 0.9525,0.291042 1.825625,-0.07937 2.2225,-0.9525 0.370416,-0.820208 0.105833,-1.825625 -0.714375,-2.248958 -1.74625,-0.846667 -3.518958,-1.666875 -5.318125,-2.407708 -0.899583,-0.370417 -1.878542,0.15875 -2.2225,1.031875 -0.343958,0.846666 -0.02646,1.74625 0.79375,2.2225 0.3175,0.15875 0.661458,0.3175 1.031875,0.502708 z M 44.767522,65.325649 c -0.15875,-1.481667 -0.264583,-2.963334 -0.502708,-4.418542 -0.370417,-2.090208 -1.005417,-4.101042 -2.513542,-5.688542 -1.296458,-1.375833 -2.963333,-1.402291 -4.180417,0.02646 -0.714375,0.820208 -1.296458,1.825625 -1.693333,2.831041 -1.5875,4.28625 -1.613958,8.651875 -0.449792,13.0175 0.423334,1.5875 1.058334,3.122083 2.275417,4.28625 1.243542,1.164167 2.69875,1.243542 3.862917,0.02646 0.714375,-0.767291 1.322916,-1.719791 1.772708,-2.672291 1.031875,-2.328333 1.322917,-4.841875 1.42875,-7.408333 z m 27.14625,-0.02646 c -0.185209,-1.508125 -0.264584,-3.01625 -0.529167,-4.497916 -0.370417,-1.984375 -0.9525,-3.915834 -2.354792,-5.450417 -1.402291,-1.561042 -3.122083,-1.561042 -4.445,0.05292 -0.661458,0.79375 -1.190625,1.74625 -1.561041,2.69875 -1.481667,3.995208 -1.561042,8.09625 -0.635,12.22375 0.396875,1.825624 1.031875,3.571874 2.354791,4.947708 1.27,1.322916 2.778125,1.375833 4.074584,0.07937 0.502708,-0.502709 0.9525,-1.137709 1.296458,-1.799167 1.296458,-2.566458 1.666875,-5.371041 1.799167,-8.255 z"
        id="path2"
        style={{ fill: favicon ? '#fff' : 'var(--accent)', strokeWidth: 0.264583 }}
      />
    </g>
  </svg>
);