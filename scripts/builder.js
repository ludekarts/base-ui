const { runCommand } = require("@ludekarts/task-runner");

(async function builder() {
  await runCommand("microbundle -i src/basic/index.js -o public/base-ui.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/media/index.js -o public/lib/media.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/panels/index.js -o public/lib/panels.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/layout/index.js -o public/lib/layout.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/buttons/index.js -o public/lib/buttons.js --no-pkg-main --jsx React.createElement -f cjs");
}());
