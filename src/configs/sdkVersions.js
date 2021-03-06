/* @flow */

import semver from 'semver';

// minimum SDK versions that support snack features
const minFeatureVersion = {
  MULTIPLE_FILES: '21.0.0',
  PROJECT_DEPENDENCIES: '25.0.0',
};

// special casing of features that have been backported to particular SDK versions
export const versions = {
  '24.0.0': [],
  '25.0.0': [],
  '26.0.0': [],
  '27.0.0': [],
  '28.0.0': [],
  '29.0.0': [],
  '30.0.0': [],
};

export const defaultSDKVersion = '30.0.0';

export type Feature = $Keys<typeof minFeatureVersion>;
export type SDKVersion = $Keys<typeof versions>;

export const sdkSupportsFeature = (sdkVersion: SDKVersion, feature: Feature) => {
  if (!versions.hasOwnProperty(sdkVersion)) {
    return false;
  }
  const result =
    semver.gte(sdkVersion, minFeatureVersion[feature]) || versions[sdkVersion].includes(feature);
  return result;
};
