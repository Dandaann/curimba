export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Curimba Produções — Erro</title>
    <link rel="icon" href="/logo.jpg" type="image/jpeg" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #F4EFE6; color: #31211B; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      img { width: 4rem; height: 4rem; border-radius: 9999px; object-fit: cover; margin-bottom: 1rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #5c473e; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; font-weight: 700; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #C85A32; color: #F4EFE6; }
      .secondary { background: #F4EFE6; color: #31211B; border-color: #31211B; }
    </style>
  </head>
  <body>
    <div class="card">
      <img src="/logo.jpg" alt="Logo Curimba Produções" />
      <h1>Não foi possível carregar esta página</h1>
      <p>Ocorreu um erro inesperado. Tente recarregar ou voltar para a página inicial.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Tentar novamente</button>
        <a class="secondary" href="/">Voltar ao início</a>
      </div>
    </div>
  </body>
</html>`;
}
