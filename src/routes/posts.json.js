import fs from "fs";
import path from "path";

export async function get(req, res) {
  const files = fs.readdirSync(path.resolve(process.cwd(), "./src/routes"));

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      posts: files
        .filter((file) => /svelte$/.test(file))
        .filter(
          (file) =>
            !["index.svelte", "_error.svelte", "_layout.svelte"].includes(file)
        )
        .map((file) => file.replace(/\.svelte$/, "")),
    })
  );
}
