// import indexPt from "./pt/index.html";
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
// Importa o HTML da página principal (para a raiz '/')
import indexPt from "./pt/index.html";

// Importa o HTML do formulário específico (para '/form')
// !!! IMPORTANTE: Certifique-se de que você salvou o HTML do formulário
// !!! no arquivo 'pt/form.html' ou ajuste este caminho se salvou em outro lugar.
import formHtml from "./form/index.html";

// Opcional: Importa a versão em inglês se precisar para /en
import indexEn from "./en/index_en.html"; // Garanta que este arquivo exista se usar a rota /en

export default {
    async fetch(request) {
        const { pathname } = new URL(request.url);

        // 1. Verifica o caminho do formulário primeiro
        if (pathname === "/form" || pathname === "/form/") {
            // Serve o HTML do formulário (que interage com Chatwoot)
            return new Response(formHtml, {
                headers: { "content-type": "text/html; charset=utf-8" },
            });
        }

        // 2. Verifica o caminho da raiz
        if (pathname === "/") {
            // Serve a página principal em Português
            return new Response(indexPt, {
                headers: { "content-type": "text/html; charset=utf-8" },
            });
        }

        // 3. Opcional: Verifica o caminho em inglês
        if (pathname.startsWith("/en")) {
            // Serve a versão em inglês
            return new Response(indexEn, {
                headers: { "content-type": "text/html; charset=utf-8" },
            });
        }

        // 4. Para qualquer outro caminho não encontrado, retorna 404
        return new Response("Página não encontrada", {
            status: 404,
            headers: { "content-type": "text/plain; charset=utf-8" },
        });
    },
};