# Diretrizes do Projeto — Curimba Produções

- **Identidade Visual e Tipografia (Manual de Marca):**
  - Tipografia principal (`--font-display`): `Bahiana` para títulos e chamadas em destaque.
  - Tipografia secundária (`--font-sans`): `Montserrat` para textos corridos, subtítulos e navegação.
  - Paleta oficial (`src/styles.css`):
    - `--terracotta`: `#8a4011`
    - `--cream`: `#dcceae`
    - `--earth`: `#252715`
    - `--olive`: `#798321`
    - `--mustard`: `#c09625`
  - Elementos gráficos: grafismo orgânico oficial em `/grafismo.png` (`.pattern-geo`).
- **Fluxo Git:**
  - Evite reescrever o histórico já publicado na branch `main` (`git push --force`, `rebase` de commits remotos).
  - Mantenha a branch `main` sempre compilando e passando nos testes (`bun run test`).
