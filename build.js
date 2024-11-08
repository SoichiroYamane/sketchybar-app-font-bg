import { execSync } from "node:child_process";
import fs from "node:fs";
import { pathToFileURL } from "node:url";

export const startMarker = "### START-OF-ICON-MAP";
export const endMarker = "### END-OF-ICON-MAP";

export function build() {
  execSync("./node_modules/.bin/svgtofont -s svgs/ -o public/dist/", {
    stdio: "inherit",
  });

  const iconMap = fs.readdirSync("./mappings").map((file) => {
    const iconName = file.replace(".svg", "");
    const appNames = fs.readFileSync(`./mappings/${file}`, "utf8").trim();
    return {
      iconName,
      appNames,
    };
  });

  const iconMapBashFn = `
${startMarker}
function __icon_map() {
    case "$1" in
${iconMap
      .map(
        ({ appNames, iconName }) =>
          `   ${appNames})
        icon_result="${iconName}"
        ;;`,
      )
      .join("\n")}
    *)
        icon_result=":default:"
        ;;
    esac
}
${endMarker}`;

  fs.writeFileSync(
    "./public/dist/icon_map.sh",
    `#!/usr/bin/env bash
${iconMapBashFn}
`,
    "utf8",
  );

  const iconMapLua = `return {
${iconMap
      .map(({ appNames, iconName }) =>
        appNames
          .split("|")
          // remove all * in mappings
          .map((app) => app.replace("*", ""))
          .map((app) => `\t[${app.trim()}] = "${iconName}",`)
          .join("\n"),
      )
      .join("\n")}
}`;

  fs.writeFileSync("./public/dist/icon_map.lua", iconMapLua, "utf8");

  // chmod +x ./public/dist/icon_map.sh
  fs.chmodSync("./public/dist/icon_map.sh", 0o755);

  const iconMapJson = JSON.stringify(iconMap.map(a => {
    return {
      iconName: a.iconName,
      appNames: a.appNames.replaceAll("\"", "").split(" | "),
    }
  }), null, 4)

  fs.writeFileSync("./public/dist/icon_map.json", iconMapJson, "utf-8");

  return { iconMapBashFn };
}

// only execute if run directly (ESM)
// use url instead of __filename to support pnpm
if (import.meta.url === pathToFileURL(process.argv[1]).toString()) {
  build();
}
