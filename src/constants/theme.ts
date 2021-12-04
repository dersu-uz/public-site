export enum COLOR_SCHEMES {
  BROWN = 'BROWN',
  BROWN_INVERTED = 'BROWN_INVERTED',
  YELLOW = 'YELLOW',
  YELLOW_INVERTED = 'YELLOW_INVERTED',
  GREEN = 'GREEN',
  GREEN_INVERTED = 'GREEN_INVERTED',
  PINK = 'PINK',
  PINK_INVERTED = 'PINK_INVERTED',
}

export enum ALIGN_MODES {
  LEFT = 'LEFT',
  CENTER = 'CENTER',
  RIGHT = 'RIGHT',
}

export const colorSchemeClasses = {
  BROWN: {
    background: 'bg-dersu-brown',
    color: 'text-dersu-blue',
    monochromeColor: 'text-dersu-white',
  },
  BROWN_INVERTED: {
    background: 'bg-dersu-blue',
    color: 'text-dersu-brown',
    monochromeColor: 'text-dersu-black',
  },
  YELLOW: {
    background: 'bg-dersu-yellow',
    color: 'text-dersu-brown',
    monochromeColor: 'text-dersu-black',
  },
  YELLOW_INVERTED: {
    background: 'bg-dersu-brown',
    color: 'text-dersu-yellow',
    monochromeColor: 'text-dersu-white',
  },
  GREEN: {
    background: 'bg-dersu-dark-green',
    color: 'text-dersu-light-green',
    monochromeColor: 'text-dersu-white',
  },
  GREEN_INVERTED: {
    background: 'bg-dersu-light-green',
    color: 'text-dersu-dark-green',
    monochromeColor: 'text-dersu-black',
  },
  PINK: {
    background: 'bg-dersu-pink',
    color: 'text-dersu-brown',
    monochromeColor: 'text-dersu-black',
  },
  PINK_INVERTED: {
    background: 'bg-dersu-brown',
    color: 'text-dersu-pink',
    monochromeColor: 'text-dersu-white',
  },
}
