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

export const colorSchemeClasses = {
  BROWN: {
    background: 'bg-dersu-brown',
    color: 'text-dersu-blue',
  },
  BROWN_INVERTED: {
    background: 'bg-dersu-blue',
    color: 'text-dersu-brown',
  },
  YELLOW: {
    background: 'bg-dersu-yellow',
    color: 'text-dersu-brown',
  },
  YELLOW_INVERTED: {
    background: 'bg-dersu-brown',
    color: 'text-dersu-yellow',
  },
  GREEN: {
    background: 'bg-dersu-dark-green',
    color: 'text-dersu-light-green',
  },
  GREEN_INVERTED: {
    background: 'bg-dersu-light-green',
    color: 'text-dersu-dark-green',
  },
  PINK: {
    background: 'bg-dersu-pink',
    color: 'text-dersu-brown',
  },
  PINK_INVERTED: {
    background: 'bg-dersu-brown',
    color: 'text-dersu-pink',
  },
};
