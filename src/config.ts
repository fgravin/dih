import * as Cesium from 'cesium'

Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MmMwNDg2Zi03NWIyLTQwMTAtYWY0Zi03YWVmZGQyZjMzZDQiLCJpZCI6MTQxMTQ4LCJpYXQiOjE2ODQ5MjIyMTV9.J0Jqm9Haf2JHm6AfvFPR340N2XEg5RiD070Yxz9S3tM'

export const initialExtent = new Cesium.Rectangle(
  0.03648658349781334,
  0.12643372785340393,
  1.3358143669403713,
  0.6790447540734244
)

export const alFaridTombLocation = Cesium.Cartesian3.fromDegrees(
  37.9612225362985,
  26.77412011548026,
  30
)
export const alKhuraybatTombLocation = Cesium.Cartesian3.fromDegrees(
  37.945046581617795,
  26.781436942691027,
  30
)
