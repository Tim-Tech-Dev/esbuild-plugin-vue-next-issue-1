const esbuild = require("esbuild");
const pluginVue = require("esbuild-plugin-vue-next").default;

esbuild
	.build({
		entryPoints: ["src/index.ts"],
		outdir: "dist",
		entryNames: "b_[name]",
		plugins: [pluginVue()],
	})
	.catch(() => process.exit(1))
	.then((result) => {
		if (result.errors.length > 0) {
			console.error(result.errors);
		}

		if (result.warnings.length > 0) {
			console.error(result.warnings);
		}
	});
