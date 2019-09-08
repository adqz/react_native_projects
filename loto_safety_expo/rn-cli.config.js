// const { getDefaultConfig } = require("metro-config");

// module.exports = (async () => {
//   const {
//     resolver: { assetExts }
//   } = await getDefaultConfig();

//   return {
//     resolver: {
//       assetExts: [...assetExts, "pb", "txt"]
//     }
//   };
// })();

module.exports = {
  getAssetExts() {
    return ['pb', 'txt']
  }
}