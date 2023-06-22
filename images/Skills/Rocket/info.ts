const Info = {
  Level1: {
    Meta: {
      TileDimensions: {
        Width: 16,
        Height: 16,
      },
      RealDimension: {
        Width: 3,
        Height: 5,
      },
      SpriteShiftPosition: {
        X: -6,
        Y: -5,
      },
    },
    Hitbox: {
      Frame0: [
        { Width: 1, Height: 1, X: 0, Y: 0 },
        { Width: 2, Height: 3, X: 1, Y: 1 },
        { Width: 1, Height: 1, X: 0, Y: 4 },
      ],
      Frame1: [{ Width: 7, Height: 9, X: -2, Y: -2 }],
      Frame2: [{ Width: 9, Height: 11, X: -3, Y: -3 }],
    },
    Animations: {
      Idle: {
        FrameLengthInTime: 1,
        Frames: [0],
      },
      Destroyed: {
        FrameLengthInTime: 0.1,
        Frames: [0, 1, 2, 3, 4, 5],
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
        Width: 6,
        Height: 3,
      },
      SpriteShiftPosition: {
        X: -5,
        Y: -6,
      },
    },
    Hitbox: {
      Frame0: [
        { Width: 1, Height: 1, X: 0, Y: 1 },
        { Width: 4, Height: 3, X: 1, Y: 0 },
        { Width: 1, Height: 1, X: 5, Y: 1 },
      ],
      Frame1: [{ Width: 12, Height: 13, X: -3, Y: -5 }],
      Frame2: [{ Width: 14, Height: 15, X: -4, Y: -6 }],
    },
    Animations: {
      Idle: {
        FrameLengthInTime: 1,
        Frames: [0],
      },
      Destroyed: {
        FrameLengthInTime: 0.1,
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
        Width: 9,
        Height: 4,
      },
      SpriteShiftPosition: {
        X: -4,
        Y: -6,
      },
    },
    Hitbox: {
      Frame0: [
        { Width: 1, Height: 2, X: 0, Y: 1 },
        { Width: 7, Height: 4, X: 1, Y: 0 },
        { Width: 1, Height: 2, X: 8, Y: 1 },
      ],
      Frame1: [{ Width: 15, Height: 13, X: -3, Y: -4 }],
      Frame2: [{ Width: 16, Height: 16, X: -4, Y: -6 }],
    },
    Animations: {
      Idle: {
        FrameLengthInTime: 1,
        Frames: [0],
      },
      Destroyed: {
        FrameLengthInTime: 0.1,
        Frames: [0, 1, 2, 3, 4, 5],
      },
    },
  },
  SubProjectile: {
    Meta: {
      TileDimensions: {
        Width: 16,
        Height: 16,
      },
      RealDimension: {
        Width: 3,
        Height: 2,
      },
      SpriteShiftPosition: {
        X: -6,
        Y: -7,
      },
      SpriteSpawnPosition: {
        Projectile1: {
          X: 3,
          Y: 0,
        },
        Projectile2: {
          X: 3,
          Y: 4,
        },
      },
    },
    Hitbox: {
      Frame0: [{ Width: 3, Height: 2, X: 0, Y: 0 }],
      Frame1: [{ Width: 7, Height: 7, X: -2, Y: -2 }],
    },
    Animations: {
      Idle: {
        FrameLengthInTime: 1,
        Frames: [0],
      },
      Destroyed: {
        FrameLengthInTime: 0.1,
        Frames: [0, 1, 2, 3, 4],
      },
    },
  },
};
