export const connectEmulator = (db) => {
  if (window?.location?.hostname === "localhost")
    db.useEmulator("localhost", 8080);
};
