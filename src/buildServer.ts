import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/server.ts"],
    bundle: true,
    //   outdir: "build",
    outfile: "build/server.js",
    platform: "node",
    minify: Deno.env.get("PROD") ? true : false,
});
