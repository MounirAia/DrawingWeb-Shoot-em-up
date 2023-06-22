const Info = {
  Level1: {
    Frame: {
      Meta: {
        TileDimensions: {
          Width: 16,
          Height: 16,
        },
        RealDimension: {
          Width: 7,
          Height: 13,
        },
        SpriteShiftPosition: {
          X: -6,
          Y: -8,
        },
      },
      Hitbox: [{}],
      Animations: {
        Spawning: {
          FrameLengthInTime: 3 / 60,
          Frames: [0, 1, 2, 3],
        },
        Generating: {
          FrameLengthInTime: 3 / 60,
          Frames: [4, 5, 6, 7],
        },
        Destroyed: {
          FrameLengthInTime: 3 / 60,
          Frames: [8, 9, 10, 11],
        },
      },
    },
    Laser: {
      Meta: {
        TileDimensions: {
          Width: 16,
          Height: 16,
        },
        RealDimension: {
          Width: 11,
          Height: 8,
        },
        SpriteShiftPosition: {
          X: -3,
          Y: -4,
        },
      },
      Hitbox: [
        {
          X: 0,
          Y: 0,
          Width: 11,
          Height: 8,
        },
      ],
      Animations: {
        Idle: {
          FrameLengthInTime: 3 / 60,
          Frames: [0, 1, 2],
        },
        Destroyed: {
          FrameLengthInTime: 3 / 60,
          Frames: [3, 4, 5],
        },
      },
    },
  },
  Level2: {
    Frame: {
      Meta: {
        TileDimensions: {
          Width: 32,
          Height: 32,
        },
        RealDimension: {
          Width: 8,
          Height: 15,
        },
        SpriteShiftPosition: {
          X: -11,
          Y: -14,
        },
      },
      Hitbox: [{}],
      Animations: {
        Spawning: {
          FrameLengthInTime: 3 / 60,
          Frames: [0, 1, 2, 3, 4],
        },
        Generating: {
          FrameLengthInTime: 3 / 60,
          Frames: [5, 6, 7, 8],
        },
        Destroyed: {
          FrameLengthInTime: 3 / 60,
          Frames: [9, 10, 11, 12],
        },
      },
    },
    Laser: {
      Meta: {
        TileDimensions: {
          Width: 32,
          Height: 32,
        },
        RealDimension: {
          Width: 13,
          Height: 13,
        },
        SpriteShiftPosition: {
          X: -10,
          Y: -13,
        },
      },
      Hitbox: [
        {
          X: 0,
          Y: 0,
          Width: 13,
          Height: 13,
        },
      ],
      Animations: {
        Generating: {
          FrameLengthInTime: 3 / 60,
          Frames: [0, 1],
        },
        Idle: {
          FrameLengthInTime: 3 / 60,
          Frames: [2, 3],
        },
        Destroyed: {
          FrameLengthInTime: 3 / 60,
          Frames: [4, 5, 6, 7],
        },
      },
    },
  },
  Level3: {
    Frame: {
      Meta: {
        TileDimensions: {
          Width: 32,
          Height: 32,
        },
        RealDimension: {
          Width: 21,
          Height: 24,
        },
        SpriteShiftPosition: {
          X: -12,
          Y: -12,
        },
      },
      Hitbox: [{}],
      Animations: {
        Spawning: {
          FrameLengthInTime: 3 / 60,
          Frames: [0, 1, 2, 3, 4],
        },
        Generating: {
          FrameLengthInTime: 3 / 60,
          Frames: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        },
        Destroyed: {
          FrameLengthInTime: 3 / 60,
          Frames: [15, 16, 17, 18, 19],
        },
      },
    },
    Laser: {
      Meta: {
        TileDimensions: {
          Width: 32,
          Height: 32,
        },
        RealDimension: {
          Width: 13,
          Height: 18,
        },
        SpriteShiftPosition: {
          X: -10,
          Y: -14,
        },
      },
      Hitbox: [
        {
          X: 0,
          Y: 0,
          Width: 15,
          Height: 18,
        },
      ],
      Animations: {
        Idle: {
          FrameLengthInTime: 3 / 60,
          Frames: [0, 1, 2, 3],
        },
        Destroyed: {
          FrameLengthInTime: 3 / 60,
          Frames: [4, 5, 6, 7, 8, 9, 10],
        },
      },
    },
  },
};
