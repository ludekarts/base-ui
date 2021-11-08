const { runCommand } = require("@ludekarts/task-runner");

(async function builder() {
  await runCommand("microbundle -i src/basic/index.js -o public/base-ui.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/media/index.js -o public/media.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/panels/index.js -o public/panels.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/layout/index.js -o public/layout.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/buttons/index.js -o public/buttons.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/interactive/index.js -o public/interactive.js --no-pkg-main --jsx React.createElement -f cjs");
  await runCommand("microbundle -i src/utils/index.js -o public/utils.js --no-pkg-main --jsx React.createElement -f cjs");
}());
