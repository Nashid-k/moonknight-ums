const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be configured before starting MoonKnight UMS.");
}

module.exports = { sessionSecret };
