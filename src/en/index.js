// import indexPt from "./index.html";
// import indexEn from "./en/index_en.html";

// export default {
// 	async fetch(request) {
// 		const { pathname } = new URL(request.url);

// 		if (pathname.startsWith("/en")) {
// 			return new Response(indexEn, {
// 				headers: { "content-type": "text/html" },
// 			});
// 		}

// 		// default = PT
// 		return new Response(indexPt, {
// 			headers: { "content-type": "text/html" },
// 		});
// 	},
// };
