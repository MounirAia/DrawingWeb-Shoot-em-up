const Info = {
  Level1: {
    Meta: {
      TileDimensions: {
        Width: 8,
        Height: 8,
      },
      RealDimension: {
        Width: 3,
        Height: 5,
      },
      SpriteShiftPosition: {
        X: -3,
        Y: -1,
      },
      SpriteShiftPositionOnPlayer: {
        Cannon1: { X: 19, Y: -5 },
      },
    },
    Hitbox: {
      Width: 3,
      Height: 5,
    },
    Animations: {
      Idle: {
        FrameLengthInTime: 1,
        Frames: [0],
      },
      OnHit: {
        FrameLengthInTime: 1,
        Frames: [4],
      },
      Destroyed: {
        FrameLengthInTime: 6 / 60,
        Frames: [0, 1, 2, 3],
      },
    },
  },
  Level2: {
    Meta: {
      TileDimensions: {
        Width: 16,
        Height: 16,
      },
      RealDimension: {
        Width: 8,
        Height: 6,
      },
      SpriteShiftPosition: {
        X: -4,
        Y: -5,
      },
      SpriteShiftPositionOnPlayer: {
        Cannon1: { X: 14, Y: -6 },
        Cannon2: { X: 14, Y: 12 },
      },
    },
    Hitbox: {
      Width: 8,
      Height: 6,
    },
    Animations: {
      Idle: {
        FrameLengthInTime: 1,
        Frames: [0],
      },
      OnHit: {
        FrameLengthInTime: 1,
        Frames: [5],
      },
      Destroyed: {
        FrameLengthInTime: 6 / 60,
        Frames: [0, 1, 2, 3, 4],
      },
    },
  },
  Level3: {
    Meta: {
      TileDimensions: {
        Width: 16,
        Height: 16,
      },
      RealDimension: {
        Width: 7,
        Height: 7,
      },
      SpriteShiftPosition: {
        X: -5,
        Y: -5,
      },
      SpriteShiftPositionOnPlayer: {
        Cannon1: { X: 14, Y: -7 },
        Cannon2: { X: 14, Y: 12 },
      },
    },
    Hitbox: {
      Width: 7,
      Height: 7,
    },
    Animations: {
      Idle: {
        FrameLengthInTime: 1,
        Frames: [0],
      },
      OnHit: {
        FrameLengthInTime: 1,
        Frames: [5],
      },
      Destroyed: {
        FrameLengthInTime: 0.1,
        Frames: [0, 1, 2, 3, 4],
      },
    },
  },
};
